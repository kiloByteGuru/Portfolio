
document.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".card.project");
  projects.forEach((project) => {
    const projectPosition = project.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (projectPosition < screenPosition) {
      project.classList.add("animate__fadeInUp");
    }
  });
});
//back to top btn
const backToTopBtn = document.querySelector("#backToTopBtn");

const backToTop = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      backToTopBtn.classList.remove('d-none');
      backToTopBtn.classList.add('d-block');
    } else {
      backToTopBtn.classList.remove('d-block');
      backToTopBtn.classList.add('d-none');
    }
  });

  backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
};

// Poziv funkcije za "Back to Top" dugme
backToTop();
//smooth scrolling

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const form = document.querySelector('.contact-form');
const thankYouMessage = document.querySelector('.thankyou_message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  thankYouMessage.style.display = 'block';
});
;
// Scroll reveal animations

// Function to handle fade-in and fade-out animations
function handleSectionVisibility(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInLeft');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('animate__fadeInLeft');
      entry.target.classList.add('animate__fadeOutRight');
      observer.unobserve(entry.target);

    }

  });

}

const fadeElements = document.querySelectorAll('.animated');
const fadeObserver = new IntersectionObserver(animateOnScroll, {
  threshold: 0.5
});

fadeElements.forEach(element => {
  fadeObserver.observe(element);
});

// Observe sections for fade-in and fade-out animations
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver(handleSectionVisibility, {
  threshold: 0.5
});

sections.forEach(section => {
  sectionObserver.observe(section);
});

const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    // Aktiviraj tamnu temu
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    // Aktiviraj svjetlu temu
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});