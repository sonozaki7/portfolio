# 🚀 GitHub Actions Workflows

This directory contains automated GitHub Actions workflows for building and deploying the portfolio website.

## 📋 Available Workflows

### 1. 🚀 Deploy to GitHub Pages (`deploy.yml`)
**Triggers:**
- Push to `main` or `master` branch
- Manual workflow dispatch

**Features:**
- ✅ Automated building and deployment
- ✅ Node.js caching for faster builds
- ✅ Custom domain support via secrets
- ✅ Static site generation with Next.js
- ✅ Automatic `.nojekyll` file creation
- ✅ Deployment status notifications

### 2. 🔍 Preview Deployment (`preview.yml`)
**Triggers:**
- Pull requests to `main` or `master` branch

**Features:**
- ✅ Preview deployments for PRs
- ✅ Automatic PR comments with preview links
- ✅ Same build process as production

## ⚙️ Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"

### 2. Configure Secrets (Optional)
If you want to use a custom domain, add a repository secret:
- **Name:** `CUSTOM_DOMAIN`
- **Value:** Your custom domain (e.g., `yourdomain.com`)

### 3. Environment Variables
The workflow automatically sets:
- `NODE_ENV=production`
- `BASE_PATH=/portfolio` (for GitHub Pages subdirectory)

## 🔧 Manual Deployment (Fallback)

If you need to deploy manually, you can still use:
```bash
npm run deploy:manual
```

## 📊 Workflow Status

![Deploy Status](https://github.com/sonozaki7/portfolio/workflows/🚀%20Deploy%20Portfolio%20to%20GitHub%20Pages/badge.svg)

## 🎯 Benefits of This Setup

1. **Automated Deployments**: No more manual deployment steps
2. **PR Previews**: See changes before merging
3. **Faster Builds**: Optimized caching strategies
4. **Reliable**: Consistent deployment process
5. **Scalable**: Easy to extend with additional features

## 🔍 Troubleshooting

### Common Issues:
1. **Build Failures**: Check Node.js version compatibility
2. **Deployment Errors**: Verify GitHub Pages settings
3. **Custom Domain Issues**: Check CNAME configuration
4. **Cache Issues**: Clear npm cache in workflow if needed

### Debug Steps:
1. Check workflow logs in Actions tab
2. Verify all dependencies are installed
3. Ensure `out/` directory is generated correctly
4. Check GitHub Pages deployment logs
