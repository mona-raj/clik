![alt text](images/preview.jpg)
# <center>CLIK Photography</center>

A modern, interactive photography showcase website that displays curated collections of photographs across multiple categories including architecture, nature, wildlife, travel, people, and abstract art.

## Live Demo

[Visit CLIK Photography](https://monaraj.com/clik)

## Features

- **Interactive Gallery** - Browse photographs organized by categories (Architecture, Nature, Wildlife, Travel, People, Abstract)
- **Image Popups** - View detailed information about each photograph with tags and descriptions
- **Like System** - Save your favorite images with a heart button and like counter
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Navigation** - Easy navigation between different sections (Home, About, Gallery, Contact)
- **Modern UI** - Clean, minimalist design with smooth animations and transitions

## Project Structure

```
clik/
├── index.html              # Homepage
├── styles.css              # Styling
├── script.js               # Main functionality
├── data/
│   ├── gallery.js          # Gallery data and image collections
│   └── collections.js      # Collections data
├── pages/
│   ├── about.html          # About page
│   ├── gallery.html        # Gallery page
│   ├── collections.html    # Collections page
│   └── contact.html        # Contact page
├── images/                 # Image assets
│   ├── about/              # About section images
│   ├── abstract/           # Abstract photography
│   ├── architecture/       # Architecture photography
│   ├── hero/               # Hero section images
│   ├── logo/               # Logo files
│   ├── nature/             # Nature photography
│   ├── people/             # People photography
│   ├── travel/             # Travel photography
│   └── wildlife/           # Wildlife photography
├── fonts/                  # Custom fonts
├── icons/                  # SVG icons and graphics
└── README.md               # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - works with static files

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive features and DOM manipulation
- **AVIF Format** - Modern image format for optimal performance

## Features in Detail

### Gallery System

The gallery is dynamically rendered from data stored in `data/gallery.js`. Each category contains:

- Image filename and path
- Title and description
- Tags for categorization
- Like counter

### Image Popup Modal

Click on any image to view:

- Full-size image preview
- Image title and detailed description
- Associated tags
- Like button with counter

### Responsive Design

- Optimized for mobile, tablet, and desktop screens
- Adaptive image sizing
- Touch-friendly interface

## Browser Support

- Chrome 93+
- Firefox 90+
- Safari 15+
- Edge 93+

## Navigation

- **Home** - Landing page with intro
- **About** - Information about the photographer
- **Gallery** - Full interactive photo gallery by category
- **Contact** - Contact information and form


