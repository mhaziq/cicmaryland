# Quick Setup Guide for GitHub Pages

## Prerequisites
- Git installed on your computer
- A GitHub account
- The repository already cloned (which you have!)

## Step-by-Step Deployment

### 1. Check your current status
```bash
cd cicmaryland
git status
```

### 2. Add all files to git
```bash
git add .
```

### 3. Commit your changes
```bash
git commit -m "Add Clarksburg Islamic Center website"
```

### 4. Push to GitHub
```bash
git push origin main
```
(If your default branch is `master`, use `git push origin master`)

### 5. Enable GitHub Pages
1. Go to https://github.com/[your-username]/cicmaryland
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**:
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
5. Click **Save**

### 6. Wait for deployment
- GitHub will show a message: "Your site is ready to be published"
- After 1-2 minutes, refresh the page
- You'll see: "Your site is published at https://[your-username].github.io/cicmaryland/"

### 7. Visit your website!
Click the link or go to: `https://[your-username].github.io/cicmaryland/`

## Troubleshooting

### Issue: 404 Page Not Found
- Make sure `index.html` is in the root of the repository
- Check that GitHub Pages is enabled in Settings
- Wait a few more minutes for deployment

### Issue: Images not showing
- Images are referenced from `../images/` folder
- Make sure the images folder is at the same level as cicmaryland folder
- Or move images into cicmaryland folder and update paths in index.html

### Issue: Changes not appearing
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub to rebuild the site
- Check that you pushed your changes: `git push origin main`

## Making Updates

After making changes to your website:

```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

GitHub Pages will automatically rebuild your site in 1-2 minutes.

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Check repository settings to ensure Pages is enabled
- Verify your repository is public (or you have GitHub Pro for private repos)
