# Camille & William Wedding Website

A beautiful, responsive wedding website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, elegant design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile-friendly menu
- **RSVP Form**: Functional form for guest responses
- **Gallery Section**: Ready for wedding photos
- **Wedding Details**: All important information in one place
- **Our Story**: Personal touch with couple's story

## Getting Started

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

## Customization

### Personal Information
Edit the following in `index.html`:
- Names: "Camille & William" (replace with actual names)
- Wedding date: "June 15, 2024"
- Venue information in the details section
- Story content in the "Our Story" section

### Styling
- Colors can be customized in `styles.css`
- Fonts are loaded from Google Fonts (Playfair Display & Open Sans)
- All styling is responsive and mobile-friendly

### Images
Replace the placeholder image areas with actual photos:
- Hero section main photo
- Our Story photo
- Gallery photos (6 placeholder spots)

### RSVP Form
The RSVP form is currently set up for demonstration. To make it functional:
1. Set up a backend service to handle form submissions
2. Update the form action in `script.js`
3. Configure email notifications or database storage

## File Structure

```
camilleandwilliam/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md           # This file
```

## Deployment Options

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Included

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- Active link highlighting

### Sections
- **Hero**: Eye-catching landing section with call-to-action buttons
- **Our Story**: Personal story section with photo placeholder
- **Wedding Details**: Important information (date, time, location, dress code)
- **Gallery**: Photo gallery with hover effects
- **RSVP**: Functional RSVP form with validation

### Interactive Elements
- Smooth scrolling navigation
- Form validation
- Mobile-responsive design
- Hover effects and animations
- Loading states for form submission

## Customization Tips

1. **Colors**: Update the CSS custom properties for consistent theming
2. **Fonts**: Change Google Fonts imports for different typography
3. **Layout**: Modify grid layouts in CSS for different arrangements
4. **Content**: Update all text content to match your wedding details
5. **Images**: Replace all placeholder images with actual photos

## Support

For questions or customization help, refer to the code comments or create an issue in the repository.

## License

MIT License - feel free to use this template for your own wedding website!
