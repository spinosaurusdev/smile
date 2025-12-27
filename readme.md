# Smile Photo

Welcome to the **Smile Photo** project repository. This is a professional photography portfolio website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Multilingual Support**: content available in:
  - Spanish (Default/Root)
  - English (`/en`)
  - French (`/fr`)
- **Dark/Light Theme**: Automatic theme adjustment based on CSS variables and system preferences (configurable).
- **Interactive UI**:
  - Custom image carousel with auto-play and manual controls.
  - Sidebar navigation menu with overlay.
  - Active language highlighting.

## Project Structure

```text
.
├── index.html        # Main entry point (Spanish landing page)
├── app.js            # Core logic (Carousel, Menu, Language toggle)
├── styles.css        # Main stylesheet (Themes, Layout, Responsive)
├── public/           # Assets (Images, Icons)
├── en/               # English localized pages
├── fr/               # French localized pages
└── es/               # Spanish pages (sub-pages like gallery, contact)
```

## Setup & Usage

Since this is a static site, no build process is required.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/spinosaurusdev/smile.git
   ```
2. **Open `index.html`** in your preferred web browser.
   - Or use a local development server (e.g., Live Server in VS Code) for the best experience.

## Technologies

- **HTML5**: Semantic structure.
- **CSS3**: Variables, Flexbox, Media Queries.
- **JavaScript (ES6+)**: DOM manipulation, Event handling.

## License

&copy; 2025 spinosaurus.dev
