import express from 'express'
import { checkAuth, forgotPassword, login, logout, resetPassword, signup, verifyEmail, getAllUsers, inviteUser, deleteUser } from '../controllers/auth.controller.js'
import { verifyToken } from '../middleware/auth.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'

const router = express.Router()

router.get('/check-auth', verifyToken, checkAuth)

router.post('/signup', signup)
router.post('/login', login)
// router.post('/login', verifyToken, authorizeRoles('admin'), login)
router.post('/logout', logout)
router.get('/users', getAllUsers)

router.post('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', resetPassword)

// Invite User
router.post('/invite', inviteUser)

// Delete user
router.delete('/:id', deleteUser)

export default router