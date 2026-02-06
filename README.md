# Clarksburg Islamic Center Website

Official website for the Clarksburg Islamic Center in Maryland.

## 🌐 Live Website

The website is hosted on GitHub Pages at: `https://[your-username].github.io/cicmaryland/`

## 📁 Project Structure

```
cicmaryland/
├── index.html      # Main homepage
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🚀 Deploying to GitHub Pages

### Step 1: Push your code to GitHub

```bash
cd cicmaryland
git add .
git commit -m "Initial website setup"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be live at: `https://[your-username].github.io/cicmaryland/`

## 🎨 Customization

### Update Prayer Times
Edit the prayer times in `index.html` (lines with class `prayer-time`)

### Update Images
Replace images in the `../images/` folder with your own:
- `LogoCiC.jpeg` - Your center's logo
- `FilteredDesign.png` - Greeting image
- `RamadanFlyer.png` - Ramadan event image
- `FridayPrayers_Park.png` - Friday prayers image
- `Event.jpeg` - Community event image

### Update Contact Information
Edit the contact section in `index.html` with your actual:
- Address
- Email
- Phone number

### Change Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97c93d;
    /* ... other colors */
}
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Prayer times display
- ✅ Jummah schedule
- ✅ Events and programs section
- ✅ About section
- ✅ Contact information
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly menu

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts (Merriweather, PT Sans)

## 📝 License

© 2026 Clarksburg Islamic Center. All rights reserved.
