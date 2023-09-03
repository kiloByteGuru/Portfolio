window.addEventListener("scroll", () => {
  const projects = document.querySelectorAll(".card.project");
  projects.forEach((project) => {
    const projectPosition = project.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (projectPosition < screenPosition) {
      project.classList.add("animate__fadeInUp");
    }
  });
});

const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
const scroll = new ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scroll.reveal('.feature', {
  delay: 200
});

// Fade in hero text on load
const myName = document.querySelector('#name-heading');

myName.addEventListener('DOMContentLoaded', () => {
  myName.classList.remove('className', 'hero-text');
  myName.classList.add('className', 'loaded');
});

// Function to add fade-in animation when element is in view
function animateOnScroll(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    }
  });
}

// Function to handle fade-in and fade-out animations
function handleSectionVisibility(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-active');
    }
  });
}

// Observe elements with class 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');
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
