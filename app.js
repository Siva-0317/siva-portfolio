// ============================================
// PLACEHOLDER DATA - REPLACE WITH YOUR OWN
// ============================================

const portfolioData = {
  bio: {
    name: "Sivakumar Balaji",
    title: "AIML Developer & Computer Vision Engineer",
    tagline: "Crafting in the Void",
    description: "Passionate about AI-driven solutions, computer vision, and web systems. Building with Python, developing LLMs & Computer vision algorithms, and hardware at the edge.",
    email: "sivabalaji2717@outlook.com",
    github: "https://github.com/Siva-0317",
    linkedin: "https://linkedin.com/in/sivakumarbalaji",
    resume: "https://drive.google.com/file/d/1qcRSr0xuBrqZY1DNvu6js2BALKnSDkTO/view?usp=sharing"
  },
  
  projects: [
    {
      id: 1,
      title: "JUNE - Journey to Understand, Navigate, and Explore",
      tags: ["Whisper", "LLM", "MySQL"],
      description: "A desktop chatbot for Easwari Engineering College Central Library, featuring voice recognition (Whisper), text-to-speech, LLM-powered general chat, and book search via MySQL.",
      image: "/projects/June.jpg",
      link: "https://june-eec.vercel.app/",
      repo: "https://github.com/Siva-0317/Lib-Chatbot",
      details: " Developed a desktop library chatbot with voice input (Whisper), text‑to‑speech, local GGUF LLMs and MySQL‑backed book search and conversational model, with offline‑capable Python GUI."
    },
    {
      id: 2,
      title: "AI-Powered Farming System with Disease Detection and Fertilizer Optimization",
      tags: ["Transformers, Computer Vision, RAG"],
      description: "Developed an IoT + AI system for automated irrigation, crop disease detection (ResNet-50 - fine-tuned), and fertilizer recommendation (BERT & BART fine-tuned models).",
      repo: "https://github.com/Siva-0327/AI-Powered-Farming-System-with-Disease-Detection-and-Fertilizer-Optimization",
      details: "This project integrates IoT and AI to modernize traditional farming practices. It features a smart irrigation control mechanism, \
      crop disease detection using image processing, and a fertilizer recommendation system — all designed to improve agricultural efficiency and sustainability.\
      Crop Disease Detection (ResNet-50) A fine-tuned ResNet-50 CNN model classifies crop diseases using leaf images. Real-time image capture from USB Camera or Raspberry Pi.\
      Deployed on Django backend with REST API for prediction.\
      Fertilizer Recommendation (NLP + Tabular) XGBoost model predicts required fertilizer quantity based on crop, soil, and weather."
    },
    {
      id: 3,
      title: "Smart ML-IoT Based Irrigation Control System",
      tags: ["Machine Learning, Regression Analysis, IoT, MongoDB, Django"],
      description: "Built an ML + IoT-based (Feed-Forward Neural Network & XGBoost) smart irrigation solution to optimize water usage using real-time soil and weather data.",
      repo: "https://github.com/Siva-0327/Smart-ML-IoT-Based-Irrigation-Control-System",
      details: "This project presents a smart irrigation solution that integrates IoT sensors, Machine Learning models, and real-time weather forecasting to intelligently control irrigation for agricultural fields. The system ensures optimal water usage, reducing waste and increasing crop productivity."
    },
    {
      id: 4,
      title: "Local LLM Workbench",
      tags: ["LLMs", "PySide6", "llama-cpp-python"],
      description: "A lightweight Python desktop application for evaluating and comparing local LLM models based on specific tasks.",
      repo: "https://github.com/Siva-0327/llm-evaluator",
      details: "This project presents the development of a Purpose-Driven Local LLM Evaluator, a desktop application designed to systematically assess and compare Large Language Models (LLMs)\
      running locally on consumer hardware."
    }
  ],
  
  experience: [
    {
      id: 1,
      role: "Vice President - Association of Computer Engineers",
      company: "Easwari Engineering College",
      period: "2025 - Present",
      description: "Spearheaded the organization of the first-ever hackathon for the Computer Science department, setting a precedent for future innovation-driven events. Successfully led the planning and execution of a 24-hour hackathon and an industry summit that brought together students, professionals, and thought leaders. Oversaw end-to-end logistics, curated problem statements, coordinated with sponsors and speakers, and ensured seamless event delivery. Played a key role in fostering a vibrant tech community through symposiums, workshops, and networking initiatives that bridged academia and industry.",
    },
    {
      id: 2,
      role: "AIML Intern",
      company: "InternPro",
      period: "June 2025 - July 2025",
      description: "Solved real world problems using AIML Techniques and developed an AI powered model for predictive lead scoring for Customer Relationship Management.",
      link: "https://www.linkedin.com/in/sivakumarbalaji/overlay/1754317231078/single-media-viewer/?profileId=ACoAAEbZHfQBtgOaFyTx5Z6PAtbBmwowa2sZp8E"
    }
  ],
  
  skills: [
    {
      category: "Machine Learning & Deep Learning",
      items: [
        { name: "PyTorch", level: 90 },
        { name: "Computer Vision (ONNX)", level: 85 },
        { name: "Model Optimization", level: 80 },
        { name: "Regression Analysis", level: 75 },
        { name: "Transformers & RAG", level: 80 }
      ]
    },
    {
      category: "Backend & APIs",
      items: [
        { name: "Python", level: 95 },
        { name: "MQTT & IoT", level: 80 },
        { name: "MySQL", level: 95 },
        { name: "Django", level: 85 },
        { name: "Open AI Wrappers", level: 85 }
      ]
    },
    {
      category: "Frontend & Web",
      items: [
        { name: "React & Next.js", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML CSS", level: 85 }
      ]
    },
    {
      category: "Hardware & Systems",
      items: [
        { name: "Raspberry Pi", level: 85 },
        { name: "Arduino & Microcontrollers", level: 80 },
        { name: "3D Modeling", level: 75 },
      ]
    }
  ],
  
  contact: {
    email: "sivabalaji2717@outlook.com",
    github: "https://github.com/Siva-0317",
    linkedin: "https://linkedin.com/in/sivakumarbalaji",
    messagePlaceholder: "Hi Siva, I'd love to discuss..."
  }
};

// ============================================
// STARFIELD ANIMATION
// ============================================

class Starfield {
  constructor() {
    this.canvas = document.getElementById('starfield');
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.numStars = 200;
    this.mouse = { x: 0, y: 0 };
    
    this.resize();
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = document.documentElement.scrollHeight;
  }
  
  init() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      this.stars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        parallax: Math.random() * 0.5 + 0.5
      });
    }
  }
  
  createShootingStar() {
    if (Math.random() < 0.003) {
      this.shootingStars.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height * 0.5,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 10 + 10,
        opacity: 1
      });
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw stars
    this.stars.forEach(star => {
      star.opacity += star.twinkleSpeed;
      if (star.opacity >= 1 || star.opacity <= 0) {
        star.twinkleSpeed *= -1;
      }
      
      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(230, 237, 243, ${star.opacity})`;
      this.ctx.fill();
      
      // Add glow for larger stars
      if (star.radius > 1) {
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = '#6ae2ff';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      }
    });
    
    // Create and draw shooting stars
    this.createShootingStar();
    this.shootingStars = this.shootingStars.filter(star => {
      star.x += star.speed;
      star.y += star.speed * 0.5;
      star.opacity -= 0.02;
      
      if (star.opacity > 0) {
        const gradient = this.ctx.createLinearGradient(
          star.x, star.y,
          star.x - star.length, star.y - star.length * 0.5
        );
        gradient.addColorStop(0, `rgba(179, 136, 255, ${star.opacity})`);
        gradient.addColorStop(1, 'rgba(179, 136, 255, 0)');
        
        this.ctx.beginPath();
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(star.x, star.y);
        this.ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
        this.ctx.stroke();
        return true;
      }
      return false;
    });
    
    requestAnimationFrame(() => this.animate());
  }
}

// ============================================
// RENDER FUNCTIONS
// ============================================

// Update the renderProjects function

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = portfolioData.projects.map(project => `
    <div class="project-card" data-project-id="${project.id}">
      ${project.image ? 
        `<img src="${project.image}" alt="${project.title}" class="project-image">` : 
        `<div class="project-image-placeholder">${project.title}</div>`
      }
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-links">
        ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">Live Demo →</a>` : ''}
        <a href="${project.repo}" target="_blank" class="project-link">GitHub →</a>
      </div>
    </div>
  `).join('');
  
  observeElements('.project-card');
}

function renderExperience() {
  const timeline = document.getElementById('experienceTimeline');
  timeline.innerHTML = portfolioData.experience.map(exp => `
    <div class="experience-item">
      <div class="experience-period">${exp.period}</div>
      <h3 class="experience-role">${exp.role}</h3>
      <a href="${exp.link}" target="_blank" class="experience-company">${exp.company}</a>
      <p class="experience-description">${exp.description}</p>
    </div>
  `).join('');
  
  observeElements('.experience-item');
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = portfolioData.skills.map(category => `
    <div class="skill-category">
      <h3 class="skill-category-title">${category.category}</h3>
      ${category.items.map(skill => `
        <div class="skill-item">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-level">${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width: 0%" data-level="${skill.level}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
  
  observeElements('.skill-category');
}

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

function observeElements(selector) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Animate skill bars
        if (entry.target.classList.contains('skill-category')) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach(bar => {
            setTimeout(() => {
              bar.style.width = bar.dataset.level + '%';
            }, 200);
          });
        }
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll(selector).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Close mobile menu
        document.getElementById('mobileMenu').classList.remove('active');
      }
    });
  });
  
  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && !e.target.closest('.mobile-menu')) {
      mobileMenu.classList.remove('active');
    }
  });
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // PLACEHOLDER: Replace this with your actual form handling
    // You can use services like Formspree, EmailJS, or your own backend
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! This is a placeholder. Please integrate with a form service like Formspree or EmailJS.');
    
    form.reset();
  });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize starfield
  new Starfield();
  
  // Render content
  renderProjects();
  renderExperience();
  renderSkills();
  
  // Initialize features
  initNavigation();
  initContactForm();
  
  console.log('%c🌌 Portfolio loaded successfully! 🌌', 'color: #6ae2ff; font-size: 16px; font-weight: bold;');
  console.log('%c📝 Remember to replace all PLACEHOLDER content with your own!', 'color: #b388ff; font-size: 14px;');
});