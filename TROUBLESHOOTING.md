# Netlify Forms Troubleshooting

If you are not receiving emails, please check the following:

## 1. Are you testing on Localhost?
**Netlify Forms DO NOT work on localhost.**
You must **deploy** your site to Netlify first. Submissions from `localhost:5173` will **not** be recorded and will **not** send emails.

## 2. Did you configure Email Notifications?
Netlify does **not** automatically send emails to the address you typed in the README. You must configure this in the Netlify Dashboard:
1.  Log in to [Netlify](https://app.netlify.com).
2.  Select your site.
3.  Go to **Site Settings** > **Forms** > **Form Notifications**.
4.  Click **Add notification** > **Email notification**.
5.  Enter `animevid157@gmail.com`.
6.  Click **Save**.

## 3. Check the "Forms" Tab
Even if you didn't get an email, Netlify might have received the submission.
1.  Go to your site dashboard on Netlify.
2.  Click on the **Forms** tab at the top.
3.  Click on the **active form** (named "order").
4.  Do you see your submission there?
    - **Yes**: The form works, but your Email Notification settings (Step 2) are wrong or the email went to Spam.
    - **No**: The form submission failed. Ensure you are testing on the **deployed URL** (e.g., `https://your-site.netlify.app`), NOT localhost.
