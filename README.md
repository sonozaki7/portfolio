<!-- PROJECT LOGO -->

<br />
<p align="center">
  <h1 align="center">So's Portfolio ✨</h1>

  <p align="center">
    👋 Hi, I’m So <br />
    👀 I’m interested in Software development. <br />
    🌱 I’m currently learning Computer Engineering at UBC. <br />
    💞️ I’m looking to collaborate on web application project. <br />
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects.  <br />
    Live Demo website : 
    <a href="https://sonozaki7.github.io/portfolio">sonozaki7.github.io/portfolio</a>
    <br />
    <br />
    <a href="https://sonozaki7.github.io/portfolio">About Me</a>
    ·
    <a href="https://github.com/sonozaki7/portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/sonozaki7/portfolio/issues">Request Feature</a>
  </p>
</p>

[![GitHub forks](https://img.shields.io/github/forks/sonozaki7/portfolio?style=for-the-badge)](https://github.com/sonozaki7/portfolio/network)
[![GitHub license](https://img.shields.io/github/license/sonozaki7/portfolio?style=for-the-badge)](https://github.com/sonozaki7/portfolio/blob/main/LICENSE)
[![Deploy Status](https://github.com/sonozaki7/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/sonozaki7/portfolio/actions/workflows/deploy.yml)
[![Node Version](https://img.shields.io/static/v1?label=Node&message=18.x&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=latest&color=cb0000&style=for-the-badge)](https://nodejs.org)


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

[![Product Name Screen Shot](https://api.apify.com/v2/key-value-stores/TbuucvYb4FyD8tZeD/records/sonozaki7.github.io-scroll_original)](https://example.com)

There are many portfolio website templates available on Github, however, I didn't find one that really suit my needs so I created this one. A simple, easy to configure, lightweight, and responsive static portfolio website.

I know one template doesn't fulfill everyone's needs. So I'll try adding more features in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue.

**Features**

- [x] Easy to configure
- [x] SEO friendly
- [x] Responsive
- [x] Lightweight
- [x] Linktree Page

**Built with** [Nextjs](https://nextjs.org/) & [Bootstrap5](https://getbootstrap.com).



<!-- GETTING STARTED -->
# Getting Started

Building your own personal website from this project can take as little as 30 minutes. Follow the setup instructions below. Please feel free to reach out to me by filing an [issue](https://github.com/hashirshoaeb/portfolio/issues) or emailing me at hashirshoaeb@gmail.com for help configuring your project.

## Prerequisites

You should have [Nodejs](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads) installed on your PC. You should also own a GitHub account.

## Setup

1. Fork this repoistory and clone it to your local machine.
    ```sh
      git clone https://github.com/<your-username>/portfolio.git
    ``` 

2. Edit the [config/config.js](https://github.com/hashirshoaeb/portfolio/blob/main/config/config.js) file. Replace [config/profile.png](https://github.com/hashirshoaeb/portfolio/blob/main/config/profile.png) with your image. 
    >Note: You need to rename your image file as `profile.png`.

3. Run following scripts in terminal/command prompt to install dependencies.
    ```sh
      npm install
      npm run build
    ```
## Testing

1. To test on your local server, run the following command:
    ```sh
      npm run dev
    ```

2. Open the browser to http://localhost:3000/

## 🚀 Deployment

This project uses **automated GitHub Actions** for deployment to GitHub Pages. The deployment process is fully automated and optimized for performance.

### ✅ Automated Deployment (Recommended)

The portfolio is automatically deployed using GitHub Actions whenever you push changes to the `main` branch.

**Features:**
- ✅ **Automatic deployment** on every push to main
- ✅ **Pull request previews** for testing changes
- ✅ **Optimized caching** for faster builds
- ✅ **Custom domain support** via repository secrets
- ✅ **Deployment status badges** and notifications

**Setup:**
1. Go to your repository **Settings** → **Pages**
2. Set source to **"GitHub Actions"**
3. (Optional) Add a `CUSTOM_DOMAIN` repository secret for custom domains
4. Push changes to `main` branch - deployment happens automatically!

Your site will be available at `https://<your-username>.github.io/portfolio`

### 🔧 Manual Deployment (Fallback)

If you need to deploy manually, you can still use the legacy method:

```sh
npm run deploy:manual
```

### 📊 Deployment Status

Check the deployment status in the [Actions tab](https://github.com/sonozaki7/portfolio/actions) or view the status badge in the README above.



<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contribution you make would be **appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
# License

Distributed under the `MIT` License. See [LICENSE](https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE) for more information.
