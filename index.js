document.addEventListener("DOMContentLoaded", function () {

  const iconsBtn = document.querySelector(".icons_button");
  const hamburgerIcon = document.querySelector(".hamburger_icon");
  const closeIcon = document.querySelector(".close_icon");

  //Navlinks
  /*const navLinks = document.querySelector(".nav_links");*/
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;
  const navItems = document.querySelectorAll('.nav_item');
  const logo = document.querySelector(".logo");
  const navOverlay = document.querySelector(".nav_overlay");

  ///Menu 
  function openMenu() {
    mobileNav.classList.add("active");
    navOverlay.classList.add("active");

    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    logo.style.display = "none";
    body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileNav.classList.remove("active");
    navOverlay.classList.remove("active");

    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    logo.style.display = "block";
    body.style.overflow = "auto";
  }

  if (iconsBtn) {
    // When user clicks 
    iconsBtn.addEventListener("click", function () {
      if (!mobileNav.classList.contains("active")) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    //Close when user click on overlay
    navOverlay.addEventListener('click', closeMenu);

    // Close when clicking nav items
    navItems.forEach(item => {
      item.addEventListener('click', closeMenu);
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains("active")) {
        closeMenu();
      }
    });
  }


  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Optional: autoplay
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


});