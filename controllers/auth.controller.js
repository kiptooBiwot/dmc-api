import User from '../models/User.model.js'
import createError from 'http-errors'
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import Invite from '../models/Invite.model.js'

// import { generateVerificationToken } from '../utilities/generateVerificationCode.js'
// import { generateTokenAndSetCookie } from '../utilities/generateTokenAndSetCookie.js'
import { generateVerificationCode } from '../utilities/generateVerificationCode.js'
import { generateTokenAndSetCookie } from '../utilities/generateEmailAndSetCookie.js'
import { emailVerificationTemplate, forgotPasswordEmailTemplate, resetPasswordEmailTemplate, welcomeEmailTemplate, registrationInvitationEmailTemplate } from '../utilities/emailtemplate.js'
import { sendEmail } from '../utilities/sendEmail.js'

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find().select('-password')

    if (!allUsers || allUsers.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No users found. Please add new users to try again.'
      })
    }


    res.status(200).json({
      users: allUsers
    })
  } catch (error) {
    next(error)
  }
}


export const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, surname } = req.body

    if (!email || !password || !firstName || !surname) {
      throw createError.BadRequest('All required fields must be filled')
    }

    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) throw createError.Conflict('The user already exists')

    const hashedPassword = await bcryptjs.hash(password, 12)
    const verificationToken = generateVerificationCode()

    const user = new User({
      ...req.body,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24-hours
    })

    const newUser = await user.save()

    // Generate Token
    generateTokenAndSetCookie(res, newUser._id, user.role)

    const html = emailVerificationTemplate.replace('{verificationCode}', newUser.verificationToken)

    const emailResponse = await sendEmail(newUser.email, 'Email Verification', html)

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        ...user._doc,
        password: undefined
      }
    })

  } catch (error) {
    next(error)
  }
}


export const verifyEmail = async (req, res, next) => {

  const { code } = req.body
  try {
    const user = await User.findOne({ verificationToken: code, verificationTokenExpiresAt: { $gt: Date.now() } })


    if (!user) {
      throw createError(400, 'Invalid or expired verification code')
    }

    user.isVerified = true
    user.verificationToken = undefined
    user.verificationTokenExpiresAt = undefined

    await user.save()

    // TODO: Handle the payment for paid-for accounts

    // Send welcome email
    const html = welcomeEmailTemplate.replace("[User's Name]", user.firstName)

    const emailResponse = await sendEmail(user.email, 'Welcome to SIL Connect', html)

    res.status(200).json({
      success: true, message: 'Your email has been verified. Sign In to proceed.', user: {
        ...user._doc,
        password: undefined
      }
    })

  } catch (error) {
    next(error)
  }
}


export const login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) throw createError.Unauthorized('Invalid email and/or password')

    // Verify password
    const isPasswordValid = await bcryptjs.compare(password, user.password)

    if (!isPasswordValid) throw createError.Unauthorized('Invalid email and/or password')

    // Generate Token
    const token = generateTokenAndSetCookie(res, user._id, user.role)

    // Update last login time
    user.lastLogin = new Date()
    await user.save()


    res.status(200).json({ message: 'Login successful! Welcome back.', user: { ...user._doc, password: undefined }, token })
  } catch (error) {
    next(error)
  }
}

export const logout = (req, res, next) => {
  res.clearCookie('token')
  res.status(200).json({ success: true, message: 'Logged out successfully.' })
}


export const forgotPassword = async (req, res, next) => {
  const { email } = req.body
  try {
    if (!email) {
      throw createError(400, 'Email is required')
    }

    const user = await User.findOne({ email })

    if (!user) {
      throw createError(404, 'Account not found')
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpiresAt = Date.now() + 1 + 60 * 60 * 1000 // 1 hour

    user.resetPasswordToken = resetToken
    user.resetPasswordExpiresAt = resetTokenExpiresAt

    await user.save()

    // Forgot password email template
    const html = forgotPasswordEmailTemplate.replaceAll("[client_url]", `${process.env.CLIENT_URL}/forgot-password/${resetToken}`)

    // Send forgot password email
    await sendEmail(user.email, 'Reset Your Password', html)

    res.status(200).json({ success: true, message: 'Password reset link has been sent to your email' })

  } catch (error) {
    console.log(error)
    next(error)
  }
}

export const resetPassword = async (req, res, next) => {
  const { token } = req.params
  const { password } = req.body

  try {

    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresAt: { $gt: Date.now() } })

    if (!user) {
      throw createError(400, 'Invalid or expired reset token. Try again.')
    }

    // Update password
    user.password = await bcryptjs.hash(password, 12)
    user.resetPasswordToken = undefined
    user.resetPasswordExpiresAt = undefined
    await user.save()


    // Send password reset confirmation email
    const html = resetPasswordEmailTemplate.replace("[User's Name]", user.firstName)

    await sendEmail(user.email, 'Password Reset Confirmation', html)

    res.status(200).json({ success: true, message: 'Password reset successful' })
  } catch (error) {
    next(error)

  }
}


export const checkAuth = async (req, res, next) => {

  try {
    // Get the user
    const user = await User.findById(req.user.userId)

    if (!user) {
      throw createError(404, 'User not found')
    }

    res.status(200).json({ success: true, user: { ...user._doc, password: undefined } })
  } catch (error) {
    next(error)
  }
}


export const inviteUser = async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    // 1. Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // 2. Check if an invite already exists
    let existingInvite = await Invite.findOne({ email })
    if (existingInvite && existingInvite.expiresAt > Date.now()) {
      return res
        .status(400)
        .json({ message: 'An invitation has already been sent to this email' })
    }

    // 3. Generate a unique token
    const token = crypto.randomBytes(32).toString('hex')

    // 4. Create a new invite or update an existing one
    const invite = await Invite.findOneAndUpdate(
      { email },
      { email, token, expiresAt: Date.now() + 24 * 60 * 60 * 1000 },
      { upsert: true, new: true }
    )

    // 5. Construct the signup link
    const inviteLink = `${process.env.FRONTEND_URL}/auth/signup?token=${token}&email=${email}`

    // 6. (Optional) Send the invitation email here

    // const html = registrationInvitationEmailTemplate(email, inviteLink)

    const html = registrationInvitationEmailTemplate.replaceAll(/{{inviteLink}}/g, inviteLink)


    const emailResponse = await sendEmail(email, 'DMC Website Administration Registration', html)

    // 7. Respond
    return res.status(200).json({
      message: 'Invitation sent successfully',
      // inviteLink, // only for dev/testing — remove in production
    })
  } catch (error) {
    console.error('Invite Error:', error)
    return res.status(500).json({ message: 'Server error', error: error.message })
  }
}


export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params

    const user = await User.findByIdAndDelete(id)
    if (!user) throw createError(404, 'User not found')

    res.status(200).json({ message: 'User deleted successfully' })
  } catch (error) {
    next(error)
  }
}
