# PortraitArt Website

A premium, futuristic portrait printing website built with React and Vite.

## Features

- **Apple-inspired Design**: Clean, glassmorphism UI with smooth animations.
- **Dynamic Gallery**: Easily update portraits by editing `src/data/portraits.js`.
- **Netlify Forms**: Order form is pre-configured to work with Netlify Forms (no backend required).
- **Responsive**: Fully optimized for mobile, tablet, and desktop.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Locally**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## Customization

### Adding/Removing Portraits
Edit `src/data/portraits.js`. Add new objects to the array:

```javascript
{
  id: 7,
  title: "New Portrait",
  category: "Color",
  image: "URL_TO_IMAGE",
  description: "Description here"
}
```

### Editing Text
- **Home Page**: `src/pages/Home.jsx`
- **Order Form**: `src/pages/Order.jsx`

## Email Notifications

To receive order submissions at your email (e.g., `suryavc157@gmail.com`):

1.  Deploy the site to Netlify.
2.  Go to your **Netlify Site Dashboard**.
3.  Navigate to **Site Settings > Forms > Form Notifications**.
4.  Click **Add notification**.
5.  Select **Email notification**.
6.  Enter your email address (`suryavc157@gmail.com`).
7.  Save.

Netlify will now send an email for every new submission.

## Deployment

This project is ready for Netlify.
1.  Push to GitHub.
2.  Connect repository to Netlify.
3.  Netlify will automatically detect the build settings (`npm run build`, `dist`).
4.  The Order form will automatically start collecting submissions in the Netlify dashboard.
