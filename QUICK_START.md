# Quick Start Guide

## Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The terminal will show a URL (usually `http://localhost:5173`)
   - Open that URL in your browser

## Project Structure

```
infokids2/
├── src/
│   ├── components/          # All React components
│   │   ├── Header/         # Top navigation
│   │   ├── Hero/           # Welcome section
│   │   ├── Benefits/       # 5-item timeline
│   │   ├── About/          # About section
│   │   ├── AgeGroups/      # Age group cards
│   │   └── Footer/         # Footer with contact info
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── index.html              # HTML template
└── package.json            # Dependencies
```

## Adding Your Images

1. Create a `public` folder in the root directory
2. Add your images there (e.g., `public/hero-children.jpg`)
3. Update components to use your images:
   ```jsx
   <img src="/hero-children.jpg" alt="Children" />
   ```

## Customizing Content

All text content is in the component files:
- Edit `src/components/Hero/Hero.jsx` for hero section text
- Edit `src/components/Benefits/Benefits.jsx` for benefits
- Edit `src/components/About/About.jsx` for about section
- Edit `src/components/AgeGroups/AgeGroups.jsx` for age groups

## Customizing Colors

Edit `tailwind.config.js` to change the color scheme.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy!





