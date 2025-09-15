  AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
        });
        
        feather.replace();
        
        
        // Mobile menu toggle
      document.addEventListener("DOMContentLoaded", () => {
//   feather.replace();

  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuIcon = btn.querySelector(".menu-icon");
  const closeIcon = btn.querySelector(".close-icon");

  btn.addEventListener("click", () => {
    // toggle menu overlay
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("pointer-events-none");

    // toggle ikon menu ↔ X
    menuIcon.classList.toggle("opacity-0");
    menuIcon.classList.toggle("scale-50");
    menuIcon.classList.toggle("pointer-events-none");

    closeIcon.classList.toggle("opacity-0");
    closeIcon.classList.toggle("scale-50");
    closeIcon.classList.toggle("pointer-events-none");
  });

  // auto close pas klik link
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("opacity-0", "pointer-events-none");
      menuIcon.classList.remove("opacity-0", "scale-50", "pointer-events-none");
      closeIcon.classList.add("opacity-0", "scale-50", "pointer-events-none");
    });
  });
});


          window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-opacity-95');
            } else {
                nav.classList.remove('bg-opacity-95');
            }
        });
        
        // Back to top button visibility
        // window.addEventListener('scroll', function() {
        //     const backToTopButton = document.getElementById('back-to-top');
        //     if (window.pageYOffset > 300) {
        //         backToTopButton.classList.add('opacity-100');
        //         backToTopButton.classList.remove('opacity-0');
        //     } else {
        //         backToTopButton.classList.add('opacity-0');
        //         backToTopButton.classList.remove('opacity-100');
        //     }
        // });
        
        // Animate elements on scroll
        // document.addEventListener('DOMContentLoaded', function() {
        //     const animateOnScroll = anime({
        //         targets: '.floating',
        //         translateY: [-15, 0],
        //         duration: 3000,
        //         direction: 'alternate',
        //         loop: true,
        //         easing: 'easeInOutSine',
        //         delay: anime.stagger(100)
        //     });
        // });


// document.getElementById("myForm").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const obj = Object.fromEntries(formData.entries());

//   const res = await fetch("/api/v1/projects", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(obj)
//   });

//   const data = await res.json();
//   console.log(data);
// });
