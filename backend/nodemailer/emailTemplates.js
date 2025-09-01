// Verification Email
export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Verify Your P-Parking Email</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; background-color: #1e1e1e; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="margin: 0; color: #fff; font-size: 22px;">P-Parking Email Verification</h1>
      <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Secure access to your parking account</p>
    </div>

    <!-- Body -->
    <div style="padding: 24px;">
      <p>Hello,</p>
      <p>Use the verification code below to activate your P-Parking account:</p>
      
      <div style="text-align: center; margin: 32px 0;">
        <div style="background-color: #2a2a2a; border: 2px solid #16a34a; padding: 16px 24px; border-radius: 8px; display: inline-block;">
          <span style="font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #16a34a; font-family: 'Courier New', monospace;">{verificationCode}</span>
        </div>
      </div>
      
      <p style="text-align: center; color: #9ca3af;">Enter this code in P-Parking to confirm your email and access parking services.</p>
      
      <div style="background-color: #064e3b; border-left: 3px solid #16a34a; padding: 12px 16px; margin: 24px 0; border-radius: 0 6px 6px 0;">
        <p style="font-size: 13px; color: #d1fae5; margin: 0;">
          <strong>Security Notice:</strong> This code expires in 15 minutes. If you didn’t request this, please ignore this message.
        </p>
      </div>
      
      <p>Best regards,<br><strong style="color: #16a34a;">The P-Parking Team</strong></p>
    </div>

    <!-- Footer -->
    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; background-color: #1e1e1e; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 20px; text-align: center;">
      <h1 style="color: white; margin: 0;">Password Reset Successful</h1>
    </div>

    <div style="padding: 24px;">
      <p>Hello,</p>
      <p>Your password has been successfully reset.</p>

      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #16a34a; color: white; width: 56px; height: 56px; line-height: 56px; border-radius: 50%; display: inline-block; font-size: 30px;">
          ✓
        </div>
      </div>

      <p>If you didn’t request this reset, contact P-Parking support immediately.</p>
      <p>For your security, we recommend that you:</p>
      <ul>
        <li>Use a strong, unique password</li>
        <li>Enable two-factor authentication if available</li>
        <li>Avoid using the same password across multiple accounts</li>
      </ul>

      <p>Thank you for keeping your P-Parking account secure.</p>
      <p>Best regards,<br><strong>The P-Parking Team</strong></p>
    </div>

    <div style="text-align: center; padding: 16px; color: #888; font-size: 12px; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p>This is an automated message from P-Parking, please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

// Password Reset Request
export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Reset Your Password</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; background: #1e1e1e; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0;">Reset Your Password</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Regain access to your account</p>
    </div>

    <div style="padding: 24px;">
      <p>Hello,</p>
      <p>We received a request to reset your P-Parking password. If this wasn’t you, please ignore this email.</p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="{resetURL}" style="background-color: #16a34a; color: white; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Reset My Password</a>
      </div>

      <div style="background-color: #064e3b; border: 1px solid #16a34a; padding: 12px 16px; border-radius: 6px; margin: 24px 0;">
        <p style="color: #d1fae5; margin: 0; font-size: 13px;">This link will expire in 1 hour for security purposes.</p>
      </div>

      <p>Best regards,<br><strong style="color: #16a34a;">The P-Parking Team</strong></p>
    </div>

    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

// Welcome Email
export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to P-Parking!</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; background: #1e1e1e; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Welcome to P-Parking!</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Your smarter way to park starts here</p>
    </div>

    <div style="padding: 24px;">
      <p>Hello {userName},</p>
      <p>Welcome aboard! Your P-Parking account is ready. Explore available parking spots, manage reservations, and enjoy a hassle-free parking experience.</p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="{dashboardURL}" style="background-color: #16a34a; color: white; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Go to Dashboard</a>
      </div>

      <p>We’re excited to make your parking easier,<br><strong style="color: #16a34a;">The P-Parking Team</strong></p>
    </div>

    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const PARTNERSHIP_REQUEST_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to P-Parking Partnership Program!</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Welcome to P-Parking!</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Your smarter way to park starts here</p>
    </div>

    <div style="padding: 24px;">
      <p>Thank you for your interest in partnering with us, {companyName}!</p>
      <p>
          We have received your partnership request. Our team will carefully review your application, 
          and you can expect to hear back from us within <strong>2-3 business days</strong>.
      </p>

       <p>
          In the meantime, if you have any urgent inquiries or would like to provide additional details 
          about your company, feel free to reply directly to this email.
        </p>

        <p style="margin-top: 20px;">
          Best regards,<br>
          <strong>The Partnership Team</strong><br>
          P-Parking IloIlo
        </p>

    </div>

    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
    </div>
  </div>
</body>
</html>

`;

export const PARTNERSHIP_VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>P-Parking Partnership Approval</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">

    <!-- Header -->
    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Partnership Approved 🎉</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Welcome to the P-Parking Network</p>
    </div>

    <!-- Body -->
    <div style="padding: 24px;">
      <p>Dear {companyName},</p>
      <p>
        We’re excited to let you know that your partnership request has been <strong>approved</strong>!  
        To activate your account and gain access to the partner dashboard, please verify your account using the information below:
      </p>

      <p style="margin: 20px 0; text-align: center;">
        <span style="display: inline-block; background: #065f46; color: #fff; padding: 12px 24px; border-radius: 8px; font-size: 18px; letter-spacing: 1px;">
          {verificationToken}
        </span>
      </p>

      <p style="text-align: center; margin: 20px 0;">
        <a href="{verificationLink}" style="display: inline-block; background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
          Verify Account
        </a>
      </p>

      <p>This verification code and link will expire in <strong>24 hours</strong>.</p>

      <p style="margin-top: 20px;">
        We’re thrilled to have you join the <strong>P-Parking Partnership Program</strong>.  
        Let’s make parking smarter together 🚗💨
      </p>

      <p>
        Best regards,<br/>
        <strong>The P-Parking Team</strong><br/>
        IloIlo City
      </p>
    </div>

    <!-- Footer -->
    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
    </div>
  </div>
</body>
</html>
`;

export const PARTNERSHIP_WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Partnership Verified! Welcome to P-Parking 🎉</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #121212; margin: 0; padding: 20px; color: #e5e5e5;">
  <div style="max-width: 560px; margin: auto; background: #1e1e1e; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
    <div style="background: linear-gradient(135deg, #16a34a, #065f46); padding: 24px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Partnership Verified! 🎉</h1>
      <p style="color: rgba(255,255,255,0.85); margin: 4px 0 0; font-size: 14px;">Welcome to the P-Parking Network</p>
    </div>
    <div style="padding: 24px;">
      <p>Dear {companyName},</p>
      <p>Congratulations! Your partnership with P-Parking has been successfully verified. We’re excited to have you on board.</p>
      <p>You can now log in to your partner dashboard and start managing your parking spots, reservations, and more.</p>
      <div style="text-align: center; margin: 32px 0;">
        <a href="{loginLink}" style="background-color: #16a34a; color: white; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 500; display: inline-block;">Go to Partner Dashboard</a>
      </div>
      <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
      <p>We look forward to a successful partnership!</p>
      <p>Best regards,<br><strong style="color: #16a34a;">The P-Parking Team</strong></p>
    </div>
    <div style="padding: 16px; text-align: center; background-color: #1a1a1a; border-top: 1px solid #333;">
      <p style="font-size: 12px; color: #6b7280; margin: 0;">This is an automated message from P-Parking. Please do not reply.</p>
    </div>
  </div>
</body>
</html>`;
