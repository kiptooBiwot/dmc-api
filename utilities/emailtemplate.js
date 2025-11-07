

export const emailVerificationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verification</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f7;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    h1 {
      font-size: 24px;
      color: #333;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #555;
      line-height: 1.6;
    }
    .code {
      font-size: 32px;
      font-weight: bold;
      background-color: #f0f0f5;
      padding: 12px;
      border-radius: 6px;
      text-align: center;
      letter-spacing: 5px;
      color: #222;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      font-size: 14px;
      color: #888;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Email Verification</h1>
    <p>Hi there,</p>
    <p>Thank you for signing up. Please use the verification code below to confirm your email address:</p>
    <div class="code">{verificationCode}</div>
    <p>If you didn’t request this email, you can safely ignore it.</p>
    <div class="footer">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`

// <p>Or click the button below to verify your account:</p>
// <a href="#" class="btn">Verify Email</a>


export const welcomeEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to DMC Group Kenya</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #003366;
      padding: 20px;
      text-align: center;
    }
    .header img {
      max-width: 150px;
    }
    .content {
      padding: 30px;
    }
    h1 {
      font-size: 28px;
      color: #003366;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }
    .btn {
      display: inline-block;
      background-color: #003366;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
    }
    .btn:hover {
      background-color: #002244;
    }
    .footer {
      background-color: #003366;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .container {
        width: 100%;
        padding: 10px;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Header -->
  <div class="header">
    <img src="https://dmcgroupkenya.co.ke/logo.png" alt="DMC Group Kenya Logo">
  </div>

  <!-- Welcome Message -->
  <div class="content">
    <h1>Welcome to DMC Group Kenya!</h1>
    <p>Dear [User's Name],</p>
    <p>We’re delighted to have you join us at <strong>DMC Group Kenya</strong>. Your account has been successfully created, and you can now access our platform to explore the tools, resources, and opportunities we offer.</p>
    <p>Click below to log in and get started:</p>
    <a href="https://dmcgroupkenya.co.ke/login" class="btn">Go to Dashboard</a>
    <p>If you have any questions, feel free to reach out — we’re always here to help!</p>
  </div>

  <!-- Footer -->
  <div class="footer">
    <p>Need help? Contact us at <a href="mailto:support@dmcgroupkenya.co.ke">support@dmcgroupkenya.co.ke</a></p>
    <p>&copy; 2025 DMC Group Kenya. All rights reserved.</p>
  </div>
</div>

</body>
</html>
`;


export const forgotPasswordEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - DMC Group Kenya</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #003366;
      padding: 20px;
      text-align: center;
    }
    .header img {
      max-width: 150px;
    }
    .content {
      padding: 30px;
    }
    h1 {
      font-size: 28px;
      color: #003366;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }
    .btn {
      display: inline-block;
      background-color: #003366;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
    }
    .btn:hover {
      background-color: #002244;
    }
    .footer {
      background-color: #003366;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .container {
        width: 100%;
        padding: 10px;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Header Section -->
  <div class="header">
    <!-- <img src="https://dmcgroupkenya.co.ke/logo.png" alt="DMC Group Kenya Logo"> -->
  </div>

  <!-- Content Section -->
  <div class="content">
    <h1>Reset Your Password</h1>
    <p>Hello,</p>
    <p>We received a request to reset your password for your DMC Group Kenya account. If you didn’t request this, please ignore this email. Otherwise, click the button below to reset your password:</p>
    <a href="[client_url]" class="btn">Reset Password</a>
    <p>If the button doesn’t work, copy and paste the following link into your browser:</p>
    <p><a href="[client_url]" style="color: #003366;">[client_url]</a></p>
    <p>For your security, this link will expire in 1 hour.</p>
  </div>

  <!-- Footer Section -->
  <div class="footer">
    <p>Need help? Visit our <a href="https://dmcgroupkenya.co.ke/support">Support Center</a> or contact us at <a href="mailto:support@dmcgroupkenya.co.ke">support@dmcgroupkenya.co.ke</a></p>
    <p>&copy; 2025 DMC Group Kenya. All rights reserved.</p>
  </div>
</div>

</body>
</html>
`;


export const resetPasswordEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful - DMC Group Kenya</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #003366;
      padding: 20px;
      text-align: center;
    }
    .header img {
      max-width: 150px;
    }
    .content {
      padding: 30px;
    }
    h1 {
      font-size: 28px;
      color: #003366;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 1.6;
      color: #555;
    }
    .btn {
      display: inline-block;
      background-color: #003366;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 5px;
      text-decoration: none;
      font-size: 16px;
      margin-top: 20px;
      text-align: center;
    }
    .btn:hover {
      background-color: #002244;
    }
    .footer {
      background-color: #003366;
      color: #ffffff;
      text-align: center;
      padding: 20px;
      font-size: 14px;
    }
    .footer a {
      color: #ffffff;
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .container {
        width: 100%;
        padding: 10px;
      }
      .content {
        padding: 20px;
      }
    }
  </style>
</head>
<body>

<div class="container">
  <!-- Header Section -->
  <div class="header">
    <!-- <img src="https://dmcgroupkenya.co.ke/logo.png" alt="DMC Group Kenya Logo"> -- >
  </div>

  <!-- Content Section -->
  <div class="content">
    <h1>Password Reset Successful</h1>
    <p>Hello [User's Name],</p>
    <p>Your password has been successfully reset. You can now log in to your <strong>DMC Group Kenya</strong> account with your new credentials.</p>
    <p>If you did not request this change or believe someone has accessed your account without permission, please contact us immediately.</p>
    <a href="https://dmcgroupkenya.co.ke/login" class="btn">Log In to Your Account</a>
    <p>For your security, remember to never share your password with anyone and ensure your account details are always up to date.</p>
  </div>

  <!-- Footer Section -->
  <div class="footer">
    <p>Need help? Visit our <a href="https://dmcgroupkenya.co.ke/contact-us">Support Center</a> or contact us at <a href="mailto:info@dmcgroupkenya.co.ke">info@dmcgroupkenya.co.ke</a></p>
    <p>&copy; DMC Group Kenya. All rights reserved.</p>
  </div>
</div>

</body>
</html>
`;


export const registrationInvitationEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>You're Invited - DMC Group Kenya</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f7;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #003366;
        padding: 20px;
        text-align: center;
      }
      .header img {
        max-width: 150px;
      }
      .content {
        padding: 30px;
      }
      h1 {
        font-size: 28px;
        color: #003366;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.6;
        color: #555;
      }
      .btn {
        display: inline-block;
        background-color: #003366;
        color: #ffffff;
        padding: 12px 20px;
        border-radius: 5px;
        text-decoration: none;
        font-size: 16px;
        margin-top: 20px;
        text-align: center;
      }
      .btn:hover {
        background-color: #002244;
      }
      .link-box {
        margin-top: 20px;
        font-size: 14px;
        color: #555;
        background-color: #f3f4f6;
        padding: 10px;
        border-radius: 5px;
        word-break: break-all;
      }
      .footer {
        background-color: #003366;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 14px;
      }
      .footer a {
        color: #ffffff;
        text-decoration: underline;
      }
      @media (max-width: 600px) {
        .container {
          width: 100%;
          padding: 10px;
        }
        .content {
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>

    <div class="container">
      <!-- Body -->
      <div class="content">
        <h1>You’re Invited!</h1>
        <p>Hello,</p>
        <p>
          You have been invited to join <strong>DMC Group Kenya Website Administration Section</strong>.
          Click the button below to accept your invitation and create your account.
        </p>
        <a href="{{inviteLink}}" class="btn" target="_blank">Accept Invitation</a>
        <p>If the button above doesn’t work, copy and paste the link below into your browser:</p>
        <div class="link-box">{{inviteLink}}</div>
        <p>This invitation link will expire in 24 hours. If you didn’t expect this email, you can safely ignore it.</p>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>Need help? Contact us at <a href="mailto:info@dmcgroupkenya.co.ke">info@dmcgroupkenya.co.ke</a></p>
        <p>&copy; DMC Group Kenya. All rights reserved.</p>
      </div>
    </div>

  </body>
</html>
`;
