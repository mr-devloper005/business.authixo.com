// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navCenter = document.querySelector('.nav-center');

    if (mobileMenuBtn && navCenter) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navCenter.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navCenter.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !navCenter.contains(event.target)) {
            mobileMenuBtn.classList.remove('active');
            navCenter.classList.remove('active');
        }
    });
});

// Search functionality (placeholder)
document.querySelector('.search-btn').addEventListener('click', function() {
    // Placeholder for search functionality
    console.log('Search clicked');
});

// CTA button click handlers
document.querySelector('.cta-button').addEventListener('click', function() {
    // Placeholder for submit release functionality
    console.log('Submit Release clicked');
});

document.querySelector('.hero-cta').addEventListener('click', function() {
    // Placeholder for get started functionality
    console.log('Get Started clicked');
});

// Active nav link handling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});
