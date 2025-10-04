# Camille & William Wedding Website

A beautiful, responsive wedding website built with HTML, CSS, and JavaScript. Features a romantic design with decorative floral arches and elegant typography.

## 🌸 Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **French Language**: Complete website in French for French-speaking guests
- **Decorative Arches**: Beautiful floral arch decorations on each section
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **RSVP Form**: Functional form with address field for physical invites
- **Wedding Sections**: Ceremony, Reception, Dress Code, Travel & Stay, Registry
- **Modern UI**: Clean, elegant design with custom color palette

## 🎨 Design Features

- **Custom Color Palette**: Soft pink (#fcb7d7) and cream (#fff2cc) theme
- **Typography**: Playfair Display (serif) and Open Sans (sans-serif)
- **Decorative Elements**: Floral arch decorations on section sides
- **Sharp Design**: Clean, modern look with no rounded corners
- **Professional Layout**: Grid-based responsive design

## 📱 Sections

- **Hero**: Beautiful background image with couple's names and date
- **Ceremony**: Wedding ceremony details with photo
- **Reception**: Cocktail and reception information with navigation buttons
- **Dress Code**: Formal attire guidelines with inspiration photo
- **Travel & Stay**: Hotel recommendations and travel information
- **Registry**: Gift registry links
- **RSVP**: Comprehensive form with dietary restrictions and address

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Python 3 (for local development server)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js (if you have it installed)
npx http-server
```

4. Open your browser and go to `http://localhost:8000`

## 🎯 Customization

### Personal Information
Edit the following in `index.html`:
- Names: "Camille & William" 
- Wedding date: "20 juin 2025"
- Venue information: "200 Rue de l'Hermitage, Magog, QC J0B"
- All text content is in French

### Styling
- Colors can be customized in `styles.css` using CSS custom properties
- Fonts are loaded from Google Fonts (Playfair Display & Open Sans)
- All styling is responsive and mobile-friendly
- Decorative arches use `arch-transparent_background.png`

### Images
The website uses local images from the `Pictures/` directory:
- Hero background: `black&white.jpeg`
- Ceremony photo: `kiss.JPG`
- Reception photo: `hermitage.png`
- Dress code photo: `smoking.JPEG`
- Decorative arches: `arch-transparent_background.png`

**Note**: Images are excluded from git via `.gitignore` for privacy.

## 📁 File Structure

```
camilleandwilliam/
├── index.html          # Main HTML file (French content)
├── styles.css          # All CSS styling with custom properties
├── script.js           # JavaScript functionality
├── package.json       # Project configuration
├── .gitignore         # Excludes Pictures directory
└── README.md          # This file
```

## 🌐 Deployment Options

### Static Hosting Services
This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload files to an S3 bucket with static website hosting

### Domain Setup
1. Purchase a domain name
2. Configure DNS settings to point to your hosting service
3. Update any hardcoded URLs in the code

## 🎨 Color Palette

```css
:root {
    --primary-color: #fcb7d7;        /* Soft pink */
    --primary-color-hover: #f39ac3; /* Darker pink for hover */
    --secondary-color: #fff2cc;       /* Warm cream */
    --background-color: #ffffff;      /* White */
    --text-color: #4a4a4a;           /* Soft grey */
    --border-color: #f0f0f0;          /* Light grey */
    --shadow-color: rgba(0, 0, 0, 0.05); /* Subtle shadows */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Features

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- French language navigation items
- Active link highlighting

### Interactive Elements
- Smooth scrolling navigation
- Form validation
- Mobile-responsive design
- Hover effects and animations
- Decorative arch positioning

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly navigation

## 🎯 Customization Tips

1. **Colors**: Update the CSS custom properties in `:root` for consistent theming
2. **Fonts**: Change Google Fonts imports for different typography
3. **Layout**: Modify grid layouts in CSS for different arrangements
4. **Content**: Update all French text content to match your wedding details
5. **Images**: Replace images in the `Pictures/` directory with your own photos
6. **Arches**: Adjust arch positioning and opacity in CSS

## 📸 Image Requirements

- **Hero Background**: Landscape orientation, high resolution
- **Ceremony Photo**: Portrait orientation, 400px height
- **Reception Photo**: Landscape orientation, 350px height
- **Dress Code Photo**: Portrait orientation, 500px height
- **Arch Decorations**: Transparent PNG, 300px width, 500px height

## 🚀 Quick Start

1. **Clone the repository**
2. **Add your images** to the `Pictures/` directory
3. **Update content** in `index.html` with your wedding details
4. **Customize colors** in `styles.css` if desired
5. **Test locally** with `python3 -m http.server 8000`
6. **Deploy** to your preferred hosting service

## 📄 License

MIT License - feel free to use this template for your own wedding website!

## 💝 Special Thanks

Built with love for Camille & William's special day. May your wedding be as beautiful as this website! 💕