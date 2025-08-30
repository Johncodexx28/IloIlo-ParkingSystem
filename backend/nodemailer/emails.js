import {
  PARTNERSHIP_REQUEST_EMAIL_TEMPLATE,
  PARTNERSHIP_VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PARTNERSHIP_WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { sender, transporter } from "./nodemailer.config.js";

// Reusable email sender
const sendEmail = async (to, subject, html) => {
  const info = await transporter.sendMail({
    from: `"${sender.name}" <${sender.email}>`,
    to,
    subject,
    html,
  });
  return info; // Return for logging or Postman responses
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const dashboardURL =
      process.env.NODE_ENV === "production"
        ? process.env.HOMEPAGE_PROD_URL
        : process.env.HOMEPAGE_DEV_URL;

    const info = await sendEmail(
      email,
      "Welcome to P-Parking 🎉",
      WELCOME_EMAIL_TEMPLATE.replace("{userName}", name).replace(
        "{dashboardURL}",
        dashboardURL
      )
    );
    console.log(`✅ Welcome email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(`❌ Failed to send welcome email to ${email}:`, error);
    throw error;
  }
};

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const info = await sendEmail(
      email,
      "Verify your email",
      VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      )
    );
    console.log(`✅ Verification email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(`❌ Error sending verification email:`, error);
    throw error;
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const info = await sendEmail(
      email,
      "Reset your password",
      PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
    );
    console.log(`✅ Password reset email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(`❌ Error sending password reset email:`, error);
    throw error;
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const info = await sendEmail(
      email,
      "Password Reset Successful",
      PASSWORD_RESET_SUCCESS_TEMPLATE
    );
    console.log(`✅ Password reset success email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(`❌ Error sending password reset success email:`, error);
    throw error;
  }
};

export const sendPartnerShipEmail = async (email, companyName) => {
  try {
    const info = await sendEmail(
      email,
      "Welcome to P-Parking Partnership Program 🎉",
      PARTNERSHIP_REQUEST_EMAIL_TEMPLATE.replace("{companyName}", companyName)
    );
    console.log(`✅ Partnership welcome email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(
      `❌ Failed to send partnership welcome email to ${email}:`,
      error
    );
    throw error;
  }
};

export const sendApprovalEmail = async (email,companyName,verificationToken, loginLink) => {
  try {
    const info = await sendEmail(
      email,
      "Your Partnership Request Has Been Approved ✅",
      PARTNERSHIP_VERIFICATION_EMAIL_TEMPLATE.replace(
        "{companyName}",
        companyName
      )
        .replace("{verificationToken}", verificationToken)
        .replace("{loginLink}", loginLink)
    );

    console.log(`✅ Approval email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(`❌ Failed to send approval email to ${email}:`, error);
    throw error;
  }
};

export const sendPartnerShipWelcomeEmail = async (email, companyName) => {
  try {
    const info = await sendEmail(
      email,
      "Partnership Verified! Welcome to P-Parking 🎉",
      PARTNERSHIP_WELCOME_EMAIL_TEMPLATE.replace("{companyName}", companyName)
    );
    console.log(`✅ Partnership verified email sent to ${email}`, info);
    return info;
  } catch (error) {
    console.error(
      `❌ Failed to send partnership verified email to ${email}:`,
      error
    );
    throw error;
  }
};
