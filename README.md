# 🔥 [atick.dev](https://atick.dev) - Personal Portfolio

A modern, performant portfolio website built with Astro, showcasing my work in machine learning, Android development, and embedded systems. Featuring a clean design with dark mode support, type-safe components, and optimized for speed.

<p align="center">
    <a href="https://github.com/atick-faisal/atick-faisal.github.io/issues"><img src="https://img.shields.io/github/issues/atick-faisal/atick-faisal.github.io?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/atick-faisal/atick-faisal.github.io/contributors"><img src="https://img.shields.io/github/contributors/atick-faisal/atick-faisal.github.io?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
    <a href="https://atick.dev"><img src="https://img.shields.io/badge/Live-atick.dev-blue?colorA=363a4f&colorB=89dceb&style=for-the-badge"></a>
    <img src="https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white&labelColor=363a4f" alt="Astro">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=363a4f" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=363a4f" alt="TypeScript">
    <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white&labelColor=363a4f" alt="Bun">
    <img src="https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white&labelColor=363a4f" alt="Biome">
</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## ✨ Features

- **Lightning Fast**: Built with Astro for optimal performance and minimal JavaScript
- **Accessible Design**: WCAG compliant with skip links, semantic HTML, and proper ARIA labels
- **Dark Mode**: Beautiful dark/light theme with system preference detection
- **Responsive Layout**: Fully responsive design that looks great on all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better discoverability
- **Modern Stack**: Astro 5, Tailwind CSS 3, TypeScript, and Lucide icons
- **Code Quality**: Biome for linting and formatting with strict standards

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 📂 Technical Stack

### 💾 Core Technologies

- **Framework**: [Astro 5](https://astro.build/) - Static site generator with zero JS by default
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide Astro](https://lucide.dev/) - Beautiful, consistent icon set
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/) - Full type checking support
- **Code Quality**: [Biome](https://biomejs.dev/) - Fast linter and formatter

### 🏗️ Build & Tools

- **Package Manager**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Free static site hosting
- **Version Control**: Git with semantic commit messages

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- Git for version control
- A modern web browser

### Installation

```bash
# Clone the repository
git clone git@github.com:atick-faisal/atick-faisal.github.io.git

# Navigate to project directory
cd atick-faisal.github.io

# Install dependencies
bun install
```

### Development

```bash
# Start development server (default: http://localhost:4321)
bun run dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Lint code
bun run lint

# Auto-fix lint issues
bun run lint:fix

# Format code
bun run format
```

### Deployment

The site is automatically deployed to GitHub Pages. To deploy manually:

```bash
# Build the project
bun run build

# Deploy to GitHub Pages
git subtree push --prefix dist origin deployment
```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 📁 Project Structure

```
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── BackToTop.astro     # Floating back-to-top button
│   │   ├── Bio.astro           # Biography section
│   │   ├── Butterfly.astro     # Animated background element
│   │   ├── Card.astro          # Reusable card component
│   │   ├── Footer.astro        # Site footer
│   │   ├── Hero.astro          # Hero/landing section
│   │   ├── Navbar.astro        # Navigation bar
│   │   ├── Projects.astro      # Projects showcase
│   │   ├── Publications.astro  # Research publications
│   │   ├── Selector.astro      # Theme selector
│   │   └── SkipToContent.astro # Accessibility skip link
│   ├── layouts/
│   │   └── Layout.astro        # Base page layout with theme support
│   └── pages/
│       └── index.astro         # Main landing page
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── biome.json             # Biome linting/formatting rules
├── tsconfig.json          # TypeScript configuration
├── CLAUDE.md              # Development guidelines for Claude Code
└── package.json           # Dependencies and scripts
```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🎨 Customization

### Theme Configuration

The site uses a custom theme system with support for light and dark modes. Theme preferences are stored in `localStorage` and respect system preferences.

### Styling

Tailwind CSS is configured with custom colors and utilities. Modify `tailwind.config.mjs` to customize the design system.

### Content

- **Hero Section**: Edit `src/components/Hero.astro`
- **Biography**: Update `src/components/Bio.astro`
- **Projects**: Modify `src/components/Projects.astro`
- **Publications**: Edit `src/components/Publications.astro`

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 📖 Documentation

### Development Guidelines

- [Development Guidelines](CLAUDE.md) - Instructions for Claude Code and developers

### Code Quality

This project uses [Biome](https://biomejs.dev/) for:
- **Linting**: Enforcing code quality and best practices
- **Formatting**: Consistent code style across the project

Run `bun run lint` to check for issues and `bun run lint:fix` to automatically fix them.

### Accessibility

The site follows WCAG 2.1 Level AA guidelines:
- Semantic HTML structure
- Proper heading hierarchy
- Skip-to-content links
- ARIA labels where needed
- Keyboard navigation support
- Color contrast ratios

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🌟 Highlights

### Performance

- **Lighthouse Score**: 100/100/100/100 (Performance/Accessibility/Best Practices/SEO)
- **Zero Runtime JS**: Static HTML with progressive enhancement
- **Optimized Assets**: Automatic image optimization and minification

### Design Philosophy

- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Progressive Enhancement**: Works without JavaScript, better with it
- **Minimal Dependencies**: Only essential libraries included
- **Clean Code**: Well-documented, maintainable codebase

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/atick-faisal/atick-faisal.github.io/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" /></p>
<p align="center"><a href="https://sites.google.com/view/mchowdhury" target="_blank">Qatar University Machine Learning Group</a>
<p align="center"><a href="https://github.com/atick-faisal/atick-faisal.github.io/blob/main/LICENSE"><img src="https://img.shields.io/github/license/atick-faisal/atick-faisal.github.io?style=for-the-badge&colorA=363a4f&colorB=b7bdf8"/></a></p>
