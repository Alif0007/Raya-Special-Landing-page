// Raaya Social Landing Page - Minimal JavaScript

document.addEventListener('DOMContentLoaded', () => {

    // ===== Mobile Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on nav links (but not dropdowns)
        const navLinks = mainNav.querySelectorAll('.nav-link:not(.dropdown), .login-link, .btn');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== Mobile Dropdown Toggle =====
    const navDropdowns = document.querySelectorAll('.nav-dropdown > .dropdown');

    navDropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            // Only handle on mobile
            if (window.innerWidth < 768) {
                e.preventDefault();
                e.stopPropagation();
                const parentLi = dropdown.closest('.nav-dropdown');
                parentLi.classList.toggle('active');
            }
        });
    });

    // ===== Video Modal =====
    const videoModal = document.getElementById('videoModal');
    const modalClose = document.getElementById('modalClose');
    const playButtons = document.querySelectorAll('[data-video-modal]');

    // Open modal
    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (videoModal) {
                videoModal.classList.add('active');
            }
        });
    });

    // Close modal
    if (modalClose && videoModal) {
        modalClose.addEventListener('click', () => {
            videoModal.classList.remove('active');
        });
    }

    // Close modal when clicking overlay
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
        }
    });

    // ===== In-Place Video Playback =====
    const playVideoButtons = document.querySelectorAll('[data-play-video]');

    playVideoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = button.closest('.business-card, .story-card, .poster-content, .business-image, .story-image');
            if (card) {
                const video = card.querySelector('video');
                if (video) {
                    if (video.paused) {
                        // Pause all other videos
                        document.querySelectorAll('video').forEach(v => {
                            if (v !== video) {
                                v.pause();
                            }
                        });

                        // Reset all other play buttons to play icon
                        document.querySelectorAll('[data-play-video]').forEach(btn => {
                            if (btn !== button) {
                                btn.innerHTML = '<i class="fas fa-play"></i>';
                            }
                        });

                        // Play this video
                        video.play().catch(e => console.log('Play failed:', e));
                        button.innerHTML = '<i class="fas fa-pause"></i>';
                    } else {
                        video.pause();
                        button.innerHTML = '<i class="fas fa-play"></i>';
                    }
                }
            }
        });
    });

    // Optional: Pause video when it ends
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('ended', () => {
            const button = video.closest('.business-card, .story-card, .poster-content, .business-image, .story-image')
                ?.querySelector('[data-play-video]');
            if (button) {
                button.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });




    // ===== Form Submission Prevention (Demo) =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your time , We will get back to you soon');
            contactForm.reset();
        });
    }

    // ===== Business Videos Carousel =====
    const businessCarousel = document.getElementById('businessCarousel');
    const businessPrev = document.getElementById('businessPrev');
    const businessNext = document.getElementById('businessNext');

    if (businessCarousel && businessPrev && businessNext) {
        const scrollAmount = 300;

        businessPrev.addEventListener('click', () => {
            businessCarousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        businessNext.addEventListener('click', () => {
            businessCarousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update arrow states based on scroll position
        businessCarousel.addEventListener('scroll', () => {
            businessPrev.disabled = businessCarousel.scrollLeft <= 0;
            businessNext.disabled = businessCarousel.scrollLeft + businessCarousel.clientWidth >= businessCarousel.scrollWidth - 10;
        });

        // Initial check
        businessPrev.disabled = businessCarousel.scrollLeft <= 0;
    }

    // ===== FAQ Accordion - Only One Open at a Time =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.hasAttribute('open')) {
                    otherItem.removeAttribute('open');
                    const icon = otherItem.querySelector('.faq-icon');
                    if (icon) {
                        icon.textContent = '+';
                    }
                }
            });

            // Toggle current item's icon with delay for smooth transition
            const icon = this.querySelector('.faq-icon');
            if (icon) {
                setTimeout(() => {
                    icon.textContent = this.hasAttribute('open') ? '-' : '+';
                }, 150);
            }
        });
    });
});
