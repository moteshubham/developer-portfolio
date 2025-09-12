# Shubham Mote - Portfolio

A responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Modern dark theme with accent highlights
- **Smooth Navigation**: Auto-scroll between sections
- **Animations**: Framer Motion animations throughout
- **Modular Structure**: Clean, maintainable code organization

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # Page sections
│   ├── Sidebar.jsx     # Fixed navigation sidebar
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About & experience
│   ├── Skills.jsx      # Skills grid
│   ├── Projects.jsx    # Projects showcase
│   └── Contact.jsx     # Contact links
├── layouts/
│   └── MainLayout.jsx  # Sidebar + content wrapper
├── data/               # Resume-driven data
│   ├── experience.js   # Personal info & work history
│   ├── skills.js       # Skills by category
│   └── projects.js     # Project details
└── styles/
    └── globals.css     # Tailwind + custom styles
```

## Customization

1. **Update Personal Info**: Edit `src/data/experience.js`
2. **Add Projects**: Update `src/data/projects.js`
3. **Modify Skills**: Edit `src/data/skills.js`
4. **Replace Assets**:
   - `public/profile.jpg` - Your profile photo
   - `public/resume.pdf` - Your resume
   - `public/favicon.ico` - Site favicon

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **PostCSS** - CSS processing

## Development

The app runs on `http://localhost:5173` by default. All sections are responsive and include smooth scroll navigation via the fixed sidebar.
