/**
 * Main JavaScript file for Data Science Portfolio
 * This adds interactivity and animations to the portfolio website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    animateOnScroll();
    
    // Initialize image lightbox for visualizations
    initLightbox();
    
    // Add smooth scrolling for anchor links
    initSmoothScroll();
    
    // Initialize tooltips and popovers if Bootstrap is available
    initBootstrapComponents();
});

/**
 * Add animation classes to elements when they scroll into view
 */
function animateOnScroll() {
    // Get all elements that should be animated
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    if (animatedElements.length === 0) return;
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add the visible class
                entry.target.classList.add('visible');
                // Unobserve the element
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the element must be visible
        rootMargin: '0px 0px -50px 0px' // trigger slightly before the element is in view
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Initialize simple lightbox for visualization images
 */
function initLightbox() {
    // Get all visualization images
    const visualizationImages = document.querySelectorAll('.viz-img');
    
    if (visualizationImages.length === 0) return;
    
    visualizationImages.forEach(img => {
        // Make the image clickable
        img.style.cursor = 'pointer';
        
        // Add click event
        img.addEventListener('click', function() {
            // Create lightbox elements
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            // Create lightbox image
            const lightboxImg = document.createElement('img');
            lightboxImg.src = this.src;
            lightboxImg.className = 'lightbox-img';
            
            // Create caption
            const figcaption = this.nextElementSibling;
            let caption = '';
            if (figcaption && figcaption.tagName === 'FIGCAPTION') {
                caption = figcaption.textContent;
            }
            
            // Create caption element
            const lightboxCaption = document.createElement('div');
            lightboxCaption.className = 'lightbox-caption';
            lightboxCaption.textContent = caption;
            
            // Create close button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'lightbox-close';
            closeBtn.innerHTML = '&times;';
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
            
            // Append elements to lightbox
            lightbox.appendChild(closeBtn);
            lightbox.appendChild(lightboxImg);
            lightbox.appendChild(lightboxCaption);
            
            // Append lightbox to body
            document.body.appendChild(lightbox);
            
            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    document.body.removeChild(lightbox);
                }
            });
        });
    });
    
    // Add lightbox styles if not already in CSS
    if (!document.getElementById('lightbox-styles')) {
        const style = document.createElement('style');
        style.id = 'lightbox-styles';
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                z-index: 9999;
            }
            .lightbox-img {
                max-width: 90%;
                max-height: 80%;
                object-fit: contain;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            .lightbox-caption {
                color: white;
                margin-top: 15px;
                font-size: 16px;
                text-align: center;
                max-width: 80%;
            }
            .lightbox-close {
                position: absolute;
                top: 20px;
                right: 20px;
                background: transparent;
                border: none;
                color: white;
                font-size: 30px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Add smooth scrolling behavior for anchor links
 */
function initSmoothScroll() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target element
            const targetId = this.getAttribute('href');
            
            // Skip if the target is just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            // If the target exists
            if (targetElement) {
                e.preventDefault();
                
                // Scroll to the target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize Bootstrap components if available
 */
function initBootstrapComponents() {
    // Check if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        
        tooltipTriggerList.map(function(tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Initialize popovers
        const popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        
        popoverTriggerList.map(function(popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });
    }
}

/**
 * Add animation to skill badges when they come into view
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get all skill badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    if (skillBadges.length === 0) return;
    
    // Add animation classes with increasing delays
    skillBadges.forEach((badge, index) => {
        const delay = (index % 10) * 100; // Cycle through 10 delay levels
        badge.classList.add('fade-in');
        badge.style.animationDelay = `${delay}ms`;
    });
});

/**
 * Handle project card hover effect
 */
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-img-top')?.classList.add('zoom-effect');
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-img-top')?.classList.remove('zoom-effect');
        });
    });
});

/**
 * Add active class to current page in navigation
 */
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
