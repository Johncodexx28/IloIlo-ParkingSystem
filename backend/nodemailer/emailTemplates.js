export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .email-container { background-color: #1a1a1a !important; color: #ffffff !important; }
      .email-body { background-color: #2d2d2d !important; color: #ffffff !important; }
      .email-footer { color: #a0a0a0 !important; }
      .divider { background-color: #404040 !important; }
    }
  </style>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 16px; background-color: #f9fafb;">
  <div class="email-container" style="max-width: 540px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background-color: #22c55e; padding: 24px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">Email Verification</h1>
      <p style="color: rgba(255, 255, 255, 0.9); margin: 4px 0 0; font-size: 14px;">Complete your account setup</p>
    </div>
    
    <!-- Body -->
    <div class="email-body" style="background-color: #ffffff; padding: 24px 20px;">
      <p style="margin: 0 0 16px;">Hello,</p>
      <p style="margin: 0 0 24px;">Please use the verification code below to complete your account setup:</p>
      
      <!-- Verification Code -->  
      <div style="text-align: center; margin: 32px 0;">
        <div style="background-color: #f3f4f6; border: 2px solid #22c55e; padding: 16px 24px; border-radius: 8px; display: inline-block;">
          <span style="font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #22c55e; font-family: 'Courier New', monospace;">{verificationCode}</span>
        </div>
      </div>
      
      <p style="margin: 0 0 24px; text-align: center; color: #6b7280;">Enter this code on the verification page to activate your account.</p>
      
      <!-- Info Box -->
      <div style="background-color: #f0fdf4; border-left: 3px solid #22c55e; padding: 12px 16px; margin: 24px 0; border-radius: 0 4px 4px 0;">
        <p style="font-size: 13px; color: #065f46; margin: 0;">
          <strong>Security Notice:</strong> This code expires in 15 minutes. If you didn't request this verification, please ignore this email.
        </p>
      </div>
      
      <p style="margin: 24px 0 0;">Best regards,<br><strong style="color: #22c55e;">The Team</strong></p>
    </div>
    
    <!-- Footer -->
    <div class="email-footer" style="padding: 16px 20px; text-align: center; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;

// Password Reset Success
export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>The Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

// Password Reset Request
export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb; margin: 0; padding: 16px;">
  <div style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    
    <div style="background-color: #22c55e; padding: 24px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600;">Reset Your Password</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 4px 0 0; font-size: 14px;">Regain access to your account</p>
    </div>
    
    <div style="padding: 24px 20px;">
      <p style="margin: 0 0 16px;">Hello,</p>
      <p style="margin: 0 0 24px;">We received a request to reset your password. If this wasn't you, ignore this email.</p>
      
      <div style="text-align: center; margin: 32px 0;">
        <a href="{resetURL}" style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Reset My Password</a>
      </div>
      
      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px 16px; border-radius: 6px; margin: 24px 0;">
        <p style="color: #065f46; margin: 0; font-size: 13px;">This link will expire in 1 hour for security purposes.</p>
      </div>
      
      <p style="margin: 24px 0 0;">Best regards,<br><strong style="color: #22c55e;">The Team</strong></p>
    </div>
    
    <div style="padding: 16px 20px; text-align: center; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;

// New Welcome Email
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Aboard!</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb; margin: 0; padding: 16px;">
  <div style="max-width: 540px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
    
    <div style="background-color: #22c55e; padding: 24px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 600;">Welcome to Our Community!</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 4px 0 0; font-size: 14px;">We're glad to have you here</p>
    </div>
    
    <div style="padding: 24px 20px;">
      <p style="margin: 0 0 16px;">Hello {userName},</p>
      <p style="margin: 0 0 24px;">Welcome! You've successfully created your account. Explore our platform, connect, and make the most of your experience.</p>
      
      <div style="text-align: center; margin: 32px 0;">
        <a href="{dashboardURL}" style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Go to Dashboard</a>
      </div>
      
      <p style="margin: 24px 0 0;">We're excited to see you thrive,<br><strong style="color: #22c55e;">The Team</strong></p>
    </div>
    
    <div style="padding: 16px 20px; text-align: center; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">
        This is an automated message. Please do not reply to this email.
      </p>
    </div>
  </div>
</body>
</html>
`;
