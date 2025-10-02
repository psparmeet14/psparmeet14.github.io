# Parmeet Singh Bhogal - Personal Portfolio Website

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://psparmeet14.github.io)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-purple)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Personal%20IP-blue)](LICENSE)

## 🌟 Overview

This is my personal portfolio website—a digital space where I showcase my professional work, share my intellectual property, and document my journey as a software engineer and human being. This website represents more than just a resume; it's a carefully curated collection of my thoughts, experiences, and growth.

## 🎯 Purpose

- **Professional Showcase**: Display my experience, skills, and projects as a Senior Software Engineer
- **Intellectual Property**: Share my LinkedIn posts, reflections, and insights
- **Personal Brand**: Express who I am beyond the code
- **Knowledge Sharing**: Contribute to the community through documented lessons learned

## 🚀 Features

### Professional Sections
- **Home**: Introduction and overview with profile photo placeholder
- **About**: Personal story, philosophy, and what drives me
- **Experience**: Detailed professional journey with timeline view
- **Projects**: Highlighted work and technical achievements
- **Posts**: Collection of LinkedIn posts and reflections (intellectual property)
- **Interests**: Hobbies, fitness, reading, and self-growth pursuits
- **Contact**: Multiple ways to connect

### Design Features
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Responsive**: Fully mobile-friendly using Bootstrap 5.3.3
- **Smooth Animations**: Fade-in effects and hover transitions
- **Icon Integration**: Font Awesome icons throughout
- **Professional Typography**: Clear hierarchy and readability
- **Card-based Layout**: Modern card components for content organization
- **Gradient Accents**: Beautiful gradient effects for visual appeal

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **Bootstrap 5.3.3**: Responsive framework
- **Font Awesome 6.4.0**: Icon library
- **JavaScript**: Bootstrap's interactive components

## 📸 Adding Your Profile Photo

To add your profile photo to the website:

1. **Prepare your photo**:
   - Recommended size: 300x300 pixels (or any square size)
   - Format: JPG or PNG
   - Name it: `profile-photo.jpg` (or `.png`)

2. **Add the file**:
   - Place your photo in the root directory of the website
   - Or create an `images` folder and place it there

3. **Update the HTML files**:
   - In `index.html`, `about.html`, and other files with profile photo placeholders
   - Replace this:
   ```html
   <div class="profile-photo">
     <i class="fas fa-user"></i>
   </div>
   ```
   - With this:
   ```html
   <img src="profile-photo.jpg" alt="Parmeet Singh Bhogal" class="profile-photo">
   ```
   - Or if using an images folder:
   ```html
   <img src="images/profile-photo.jpg" alt="Parmeet Singh Bhogal" class="profile-photo">
   ```

## 📁 Project Structure

```
psparmeet14.github.io/
├── index.html          # Home page with introduction
├── about.html          # Personal story and philosophy
├── experience.html     # Professional journey and skills
├── projects.html       # Highlighted work and achievements
├── posts.html          # LinkedIn posts and reflections
├── interests.html      # Personal interests and hobbies
├── contact.html        # Contact information
├── style.css           # Custom styling
├── README.md           # Project documentation
└── (add your photo here)
```

## 🎨 Customization Guide

### Colors
The color scheme is defined in CSS variables in `style.css`:
- Primary: #2c3e50 (dark blue)
- Secondary: #3498db (bright blue)
- Accent: #e74c3c (red)
- Background gradient: Purple gradient (667eea to 764ba2)

To change colors, edit the `:root` section in `style.css`.

### Content Updates
All content is in plain HTML, making it easy to:
- Add new posts in `posts.html`
- Update experience in `experience.html`
- Add projects in `projects.html`
- Modify any text directly in the HTML files

### Adding New Posts
In `posts.html`, copy the card structure and add new content:
```html
<div class="col-lg-4 col-md-6">
  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">Your Post Title</h5>
      <p class="card-date">Date Posted</p>
      <p class="card-text">Your content here...</p>
      <div class="mt-3">
        <span class="skill-tag">Tag1</span>
        <span class="skill-tag">Tag2</span>
      </div>
    </div>
  </div>
</div>
```

## 🌐 Deployment

This website is designed to be hosted on GitHub Pages:

1. Repository name: `psparmeet14.github.io`
2. Push changes to the `main` branch
3. GitHub Pages will automatically deploy
4. Visit: `https://psparmeet14.github.io`

## 📝 Content Philosophy

This website embodies several principles:

- **Intellectual Property**: All posts and reflections are original content
- **Authenticity**: Genuine representation of skills and experiences
- **Continuous Growth**: Regular updates as I learn and grow
- **Value Creation**: Sharing insights that might help others
- **Professional Pride**: Taking ownership of my work and journey

## 🔄 Future Enhancements

Potential improvements to consider:
- Blog post detail pages for longer content
- Project case studies with technical deep-dives
- Dark/light mode toggle
- Contact form with backend integration
- Analytics to track visitor engagement
- RSS feed for blog posts
- Search functionality

## 📧 Contact

- **Email**: psparmeet14@gmail.com
- **LinkedIn**: [Parmeet S. Bhogal](https://linkedin.com/in/parmeet-s-bhogal-6a259715a)
- **GitHub**: [@psparmeet14](https://github.com/psparmeet14)

## 📜 License

This website and its content represent my personal intellectual property. The code structure is available for reference, but please don't copy the personal content, experiences, or reflections without permission.

---

**Built with ❤️ and dedication** | © 2025 Parmeet Singh Bhogal
