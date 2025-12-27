/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
  ".hero-text, .hero-image, .about-grid, .skill-group, .service-card, .project-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ==========================
   ACTIVE NAV LINK ON SCROLL
========================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach( navi => {
  navi.addEventListener('click', () => {
    // navi.classList.remove("visited-link");
    // navi.classList.add("visited-nav");
    // navLinks.style.color = null;
    // navi.style.color = 'var(--accent)';
    // console.log("visited");
    
  });
});

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);

/* ==========================
   STICKY HEADER EFFECT
========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

/* ==========================
   SMOOTH SCROLL OFFSET FIX
========================== */

const navAnchors = document.querySelectorAll('a[href^="#"]');

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();

      const offset = 80;
      const position =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  });
});

let hamburger = document.querySelector('.hamburger-container');
hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('rotate');
  document.querySelector('.nav').classList.toggle('mobile-nav');
});






const menuBtn = document.querySelector('.hamburger-container');
const nav = document.querySelector('.nav');

// if (menuBtn && nav) {
//   menuBtn.addEventListener('click', () => {
//     const isOpen = nav.classList.toggle('open');
//     menuBtn.classList.toggle('rotate', isOpen);
//     menuBtn.setAttribute('aria-expanded', String(isOpen));
//     // document.body.style.overflow = isOpen ? 'hidden' : '';
//   });
// }

document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);

  const isHamburger = menuBtn.contains(event.target);
  if (!isClickInsideNav && !isHamburger) {
    nav.classList.remove('mobile-nav');
    menuBtn.classList.remove('rotate');
  }
});

// const navLinks = document.querySelectorAll('nav');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-nav');
    menuBtn.classList.remove('rotate');
    menuBtn.setAttribute('aria-expanded', 'false');
});
});


function revealOnScroll () {
    const reveal = document.querySelectorAll('.anim');
    reveal.forEach(section  => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('animation');
        } else {
            section.classList.remove('animation');
        }
    })
}


window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);