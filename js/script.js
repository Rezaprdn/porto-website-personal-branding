  AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        feather.replace();
        
        // Back to top button visibility
        window.addEventListener('scroll', function() {
            const backToTopButton = document.getElementById('back-to-top');
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('opacity-100');
                backToTopButton.classList.remove('opacity-0');
            } else {
                backToTopButton.classList.add('opacity-0');
                backToTopButton.classList.remove('opacity-100');
            }
        });
        
        // Animate elements on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const animateOnScroll = anime({
                targets: '.floating',
                translateY: [-15, 0],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                easing: 'easeInOutSine',
                delay: anime.stagger(100)
            });
        });