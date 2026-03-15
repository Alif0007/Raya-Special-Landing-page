# Raaya Social - Landing Page Template

A modern, responsive landing page template for a short-form video content creation agency. Built with clean HTML5, CSS3, and vanilla JavaScript.

## 📋 Project Overview

Raaya Social is a professional landing page designed for a video content agency specializing in short-form videos for social media platforms. The page showcases services, pricing, portfolio, client testimonials, and provides contact functionality.

### Key Features

- **Modern Responsive Design** - Mobile-first approach with breakpoints for tablet (768px), desktop (1024px), and large screens (1200px)
- **Hero Section** - Eye-catching headline with call-to-action buttons and social media integration
- **Client Showcase** - Animated marquee displaying 50+ featured clients
- **Services & Pricing** - Clear presentation of creative services with tiered pricing cards
- **Video Carousels** - Interactive carousels for business and personal brand video portfolios
- **Testimonials** - Client success stories and detailed testimonial cards with ratings
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Form** - Integrated lead generation form in footer
- **Mobile Navigation** - Hamburger menu for mobile devices

##  Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with CSS variables, flexbox, grid layouts
- **Vanilla JavaScript** - Interactive elements without framework dependencies
- **Font Awesome** - Icon library for social media and UI icons
- **Google Fonts** - Poppins font family for typography

##  Design System

### Colors

```css
--purple-main: #A554E6      /* Primary brand color */
--purple-dark: #6A2F9B       /* Dark purple for accents */
--purple-light: #a29bfe      /* Light purple for highlights */
--red-accent: #e74c3c        /* Accent color for emphasis */
--dark-text: #2d3436         /* Primary text color */
--gray-text: #636e72         /* Secondary text color */
--light-bg: #f8f9fa          /* Light background */
--white: #ffffff             /* White */
--star-yellow: #f1c40f       /* Star ratings */
```

### Typography

- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900
- **Base Size**: 16px
- **Scale**: 14px, 16px, 20px, 24px, 32px, 40px

### Spacing System

Based on 8px grid:
- `--space-xs: 4px`
- `--space-sm: 8px`
- `--space-md: 16px`
- `--space-lg: 24px`
- `--space-xl: 32px`
- `--space-2xl: 48px`
- `--space-3xl: 64px`

##  Project Structure

```
Raya-Special-Template/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and responsive rules
├── js/
│   └── script.js          # Interactive functionality
├── images/
│   ├── logo.png           # Company logo
│   └── whyPopu.jpg        # Why popular section image
└── README.md              # Project documentation
```

##  Installation & Setup

1. **Clone or download** this repository
2. **Open** `index.html` in a web browser
3. **No build process required** - works directly


```

##  Key Sections

### 1. Hero Section
- Compelling headline with gradient text effect
- Call-to-action buttons
- Social media channel icons
- Video poster mockups (desktop only)

### 2. Clients Section
- Animated logo marquee
- Showcases 50+ featured clients
- Hover effects on pause

### 3. Services & Pricing
- Three-column benefit list
- Pricing cards with popular badge
- Checkmark/x-mark indicators

### 4. Raw Video Process
- Three-step process cards
- Icon-based visual hierarchy
- Image placeholders

### 5. Platform Cards
- Grid layout showing supported platforms
- Instagram Reels, TikTok, YouTube Shorts, etc.

### 6. Video Carousels
- Business category carousel
- Personal brands carousel
- Arrow navigation
- Video playback on click

### 7. Testimonials
- Client success stories
- Star ratings
- Professional headshots
- Quote formatting

### 8. FAQ
- Accordion-style dropdowns
- One question open at a time
- Smooth transitions

### 9. Footer
- Company information
- Quick links navigation
- Services list
- Contact form with validation

##  JavaScript Features

- **Mobile Menu Toggle** - Hamburger menu with body scroll prevention
- **Video Playback** - In-place video play/pause with icon toggle
- **Carousel Navigation** - Smooth scroll with arrow buttons
- **FAQ Accordion** - Single-open accordion behavior
- **Form Handling** - Submission prevention with demo alert
- **Smooth Scroll** - Native smooth scrolling for anchor links

##  Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 768px | Single column, hamburger menu, hidden hero visuals |
| Tablet | 768px - 1023px | Two columns, visible navigation |
| Desktop | 1024px - 1199px | Three columns, full features |
| Large | ≥ 1200px | Maximum widths optimized |

## Customization Guide

### Changing Colors

Edit CSS variables in `style.css`:

```css
:root {
    --purple-main: #YOUR_COLOR;
    --purple-dark: #YOUR_COLOR;
    /* ... other colors */
}
```


### Clean Code Practices Implemented

- ✅ Semantic HTML5 elements
- ✅ BEM-like CSS naming conventions
- ✅ Organized CSS with section comments
- ✅ Minimal, efficient JavaScript
- ✅ No unused CSS classes
- ✅ Accessible ARIA labels
- ✅ Mobile-first responsive design




