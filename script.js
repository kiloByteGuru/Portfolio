// Function to handle the "Back to Top" button
const backToTop = () => {
  const backToTopBtnContainer = document.getElementById("backToTopBtnContainer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      backToTopBtnContainer.style.display = 'block';
    } else {
      backToTopBtnContainer.style.display = 'none';
    }
  });

  const backToTopBtn = document.getElementById("backToTopBtn");
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};


backToTop();

// Function to handle smooth scrolling for navigation links
const smoothScroll = (e) => {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
};

const navLinks = () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((navLink) => {
    navLink.addEventListener("click", smoothScroll);
  });
};
navLinks();

// Function to handle form submission and thank you message
const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.querySelector(".contact-form");
  const thankYouMessage = document.querySelector(".thankyou_message");
  form.style.display = 'none';
  thankYouMessage.style.display = 'block';
};

const form = document.querySelector(".contact-form");
form.addEventListener('submit', handleSubmit);

// Function to show and hide the resume section
const toggleResumeSection = () => {
  const resumeBtn = document.getElementById("resume-link");
  const hideCv = document.getElementById("resume-close");
  const resumeSection = document.getElementById("resume");

  resumeBtn.addEventListener("click", () => {
    resumeSection.classList.remove("d-none");
    resumeSection.classList.add("d-block");
    resumeSection.classList.add("animate__fadeInLeft");
  });

  hideCv.addEventListener("click", () => {
    resumeSection.classList.remove("d-block");
    resumeSection.classList.remove("animate__fadeInLeft");
    resumeSection.classList.add("d-none");
  });
};

toggleResumeSection();

// Function to toggle the theme and save preference to local storage
const toggleTheme = () => {
  const body = document.body;
  const themeToggleButton = document.getElementById('themeToggle');
  const navbar = document.getElementById('navbar');
  const svg = document.getElementById('portfolio-bg');

  themeToggleButton.addEventListener('change', () => {
    body.classList.toggle('dark', themeToggleButton.checked);
    body.classList.toggle('light', !themeToggleButton.checked);
    localStorage.setItem('theme', themeToggleButton.checked ? 'dark' : 'light');
    
    if (themeToggleButton.checked) {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
      svg.style.filter = 'invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)';
    } else {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
      svg.style.filter = 'none'; 
    }
  });


document.addEventListener('DOMContentLoaded', () => {
  themeToggleButton.checked = false;
});
 // Check local storage for theme preference and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    themeToggleButton.checked = true;
  }
};

toggleTheme();
