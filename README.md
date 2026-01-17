# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as a web developer.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with animated elements
- **Project Showcase**: Gallery of featured projects with detailed descriptions and tech stacks
- **About Section**: Personal background and professional journey
- **Skills Display**: Visual representation of technical proficiencies
- **Contact Form**: Easy way for visitors to get in touch
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with Motion library
- **Tech Stack Icons**: Dynamic display of technologies using Simple Icons

## 🛠️ Built With

- **React 19.1.1** - Modern UI library
- **Vite 7.1.7** - Next-generation frontend tooling
- **Motion 12** - Animation library for smooth transitions
- **Simple Icons** - Comprehensive icon library for tech stack visualization
- **ESLint** - Code quality and consistency

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About me section
│   │   ├── Projects.jsx        # Projects gallery
│   │   ├── ProjectCard.jsx     # Individual project cards
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer section
│   │   ├── CallToAction.jsx    # CTA component
│   │   ├── Resume.jsx          # Resume section
│   │   ├── TechUsed.jsx        # Tech stack display
│   │   ├── LogoLoop.js         # Logo animation
│   │   ├── Shortcut.jsx        # Quick navigation
│   │   └── data.json           # Project and content data
│   ├── data/                   # Additional data files
│   ├── assets/                 # Images and static assets
│   │   └── projectThumbs/      # Project thumbnails
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Application entry point
│   └── styles.css             # Global styles
├── public/                     # Public static assets
│   └── projectThumbs/         # Public project images
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Adding New Projects

Edit `src/components/data.json` to add or modify projects:

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "thumbnail": "image.png",
      "techStack": ["react", "css3", "javascript"],
      "id": "unique-id"
    }
  ]
}
```

### Styling

Global styles are in `src/styles.css`. Component-specific styles can be added inline or in separate CSS modules.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project includes a deployment script for GitHub Pages:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Feel free to reach out through the contact form on the website or connect with me on social media.

---

Built with ❤️ using React and Vite
