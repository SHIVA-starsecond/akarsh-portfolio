// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations and functionality
    initTypeWriter();
    initScrollAnimations();
    initNavbarScroll();
    initSkillsAnimation();
    initSmoothScrolling();
    initFormValidation();
  });
  
  // Navbar header text
  const headerText = "Siddhartha";
  let headerElement = document.getElementById('header');
  if (headerElement) {
    headerElement.textContent = headerText;
  }
  
  // Typewriter effect for "I'm a web developer" text
  function initTypeWriter() {
    const textElement = document.querySelector('.sliding div:last-child span');
    if (!textElement) return;
    
    const textToType = textElement.textContent;
    textElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < textToType.length) {
        textElement.textContent += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 1500);
  }
  
  // Handle scroll animations
  function initScrollAnimations() {
    // Add animation classes to elements
    const elements = document.querySelectorAll('#learn, #skill, #about1, #skill1 > div, #contact1 h1, #home1, #home2, #home3, #home4, form');
    
    elements.forEach((element, index) => {
      // Alternate between different animations
      if (index % 3 === 0) {
        element.classList.add('fade-in');
      } else if (index % 3 === 1) {
        element.classList.add('slide-in-left');
      } else {
        element.classList.add('slide-in-right');
      }
    });
    
    // Check for elements in viewport on scroll
    function checkForVisibility() {
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    }
    
    // Check on load
    checkForVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkForVisibility);
  }
  
  // Navbar scroll effect
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
      } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
      }
    });
  }
  
  // Skills progress bars animation
  function initSkillsAnimation() {
    const progressBars = document.querySelectorAll('.progress-bar');
    if (!progressBars.length) return;
    
    // Set initial width to 0
    progressBars.forEach(bar => {
      bar.style.width = '0%';
    });
    
    // Function to animate progress bars when they come into view
    function animateProgressBars() {
      progressBars.forEach(bar => {
        const elementTop = bar.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          const value = bar.style.width;
          bar.style.width = value;
        }
      });
    }
    
    // Initial check
    setTimeout(() => {
      progressBars.forEach(bar => {
        const width = bar.textContent;
        bar.style.width = width;
      });
    }, 500);
    
    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
  }
  
  // Smooth scrolling for navigation links
  function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Get the target section id from the link's text
        const targetId = this.textContent.toLowerCase().trim();
        const targetSection = document.getElementById(targetId + '1');
        
        if (targetSection) {
          e.preventDefault();
          
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Projects dropdown
  const projectDropdown = document.getElementById('navbarDropdown');
  if (projectDropdown) {
    projectDropdown.setAttribute('data-bs-toggle', 'dropdown');
  }
  
  // Form validation
  function initFormValidation() {
    const form = document.querySelector('form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('exampleInputEmail1');
      const emailInput = document.getElementById('exampleInputPassword1');
      
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.style.borderColor = 'red';
      } else {
        nameInput.style.borderColor = '';
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.borderColor = 'red';
      } else {
        emailInput.style.borderColor = '';
      }
      
      if (isValid) {
        // Show success message
        alert('Message sent successfully!');
        form.reset();
      }
    });
  }
  
  // Email validation helper
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Initialize Bootstrap tooltips and popovers if needed
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
  
  // Carousel auto-play
  const carouselElement = document.getElementById('carouselExampleAutoplaying');
  if (carouselElement && typeof bootstrap !== 'undefined') {
    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 3000,
      wrap: true
    });
  }
  
  // Enable dropdown menu via JavaScript
  document.addEventListener('DOMContentLoaded', function() {
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });
  });


  