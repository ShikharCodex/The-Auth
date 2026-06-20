export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our App</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">

  <!-- Header -->
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 25px; text-align: center;">
    <h1 style="color: white; margin: 0;">🎉 Welcome to Our App</h1>
  </div>

  <!-- Body -->
  <div style="background-color: #f9f9f9; padding: 25px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
    
    <p style="font-size: 16px;">Hello <strong>{name}</strong>,</p>

    <p>
      We're excited to have you on board! Your account has been successfully created and verified.
    </p>

    <!-- Highlight Box -->
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; padding: 15px 25px; border-radius: 8px; display: inline-block; font-size: 18px;">
        🚀 You're all set to get started!
      </div>
    </div>

    <p>Here’s what you can do next:</p>

    <ul>
      <li>✅ Explore your dashboard</li>
      <li>✅ Start using all features</li>
      <li>✅ Customize your profile</li>
    </ul>

    <!-- CTA Button -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="{dashboardURL}" 
         style="background-color: #4CAF50; color: white; padding: 14px 22px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
         Go to Dashboard
      </a>
    </div>

    <p>
      If you ever need help, feel free to reach out to our support team — we’re always here for you.
    </p>

    <p>
      Welcome aboard once again! 🎉
    </p>

    <p>
      Best regards,<br>
      <strong>Your App Team</strong>
    </p>

  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>This is an automated message, please do not reply.</p>
  </div>

</body>
</html>
`;
