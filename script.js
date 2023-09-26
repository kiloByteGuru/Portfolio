document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".card-project");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const navLinks = document.querySelectorAll(".nav-link");
  const form = document.querySelector('.contact-form');
  const thankYouMessage = document.querySelector('.thankyou_message');
  const section = document.querySelector(".hero");
  const resumeBtn = document.getElementById("resume-link");
  const hideCv = document.getElementById("resume-close");
  const sections = document.querySelectorAll(".section-animate");

  // Function to handle the "Back to Top" button
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

  // Function to handle form submission and thank you message
  const handleSubmit = (e) => {
    e.preventDefault();
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';
  };

  // Function to reveal sections when scrolling down
  const revealSections = () => {
    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        section.classList.add("animate__fadeInLeft");
      }
    });
  };

  

  // Function to show and hide the resume section
  const toggleResumeSection = () => {
    const resumeSection = document.getElementById("resume");

    resumeBtn.addEventListener("click", () => {
      resumeSection.classList.remove("hidden");
      resumeSection.classList.add("animate__fadeInLeft");
    });

    hideCv.addEventListener("click", () => {
      resumeSection.classList.remove("animate__fadeInLeft");
      resumeSection.classList.add("animate__fadeOutRight");
      resumeSection.classList.add("hidden");
    });
  };


// Function to toggle the theme and save preference to local storage
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const isDarkTheme = body.classList.contains('dark');

  // Toggle the 'light' and 'dark' classes on the body element
  body.classList.toggle('light');
  body.classList.toggle('dark');

  // Update theme preference in local storage
  localStorage.setItem('themePreference', isDarkTheme ? 'light' : 'dark');
}

// Add an event listener to the theme toggle switch
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', toggleTheme);

// Check local storage for theme preference and apply it
const savedTheme = localStorage.getItem('themePreference');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}
  // Add event listeners
  backToTop();
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", smoothScroll);
  });
  form.addEventListener('submit', handleSubmit);
  revealHomeSection();
  toggleResumeSection();
  window.addEventListener("scroll", revealSections);
});

