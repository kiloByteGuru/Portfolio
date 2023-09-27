// Function to handle the "Back to Top" button
const backToTop = () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

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
  const form = document.querySelector(".contact-form");
  const thankYouMessage = document.querySelector(".thankyou_message");
  e.preventDefault();
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
  const navLinks = document.getElementsByClassName('nav-link');
  themeToggleButton.addEventListener('change', () => {
    body.classList.toggle('dark', themeToggleButton.checked);

    body.classList.toggle('light', !themeToggleButton.checked);
    localStorage.setItem('theme', themeToggleButton.checked ? 'dark' : 'light');
    if (themeToggleButton.checked && body.classList.contains('dark')) {
      navbar.classList.add('navbar-dark');
      navbar.classList.remove('navbar-light');
      navLinks.style.color = '#ff1493';
    } else {

      navbar.classList.add('navbar-light', 'bg-dark');
      navbar.classList.remove('navbar-dark', 'bg-light');
      navLinks.style.color = themeToggleButton.checked ?
        '#00ff00' : '#ff1493';
    }

  });

  // Check local storage for theme preference and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    themeToggleButton.checked = true;
  }
};

toggleTheme();
