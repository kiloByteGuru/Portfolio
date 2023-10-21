// Function to handle the "Back to Top" button
const backToTop = () => {
  const backToTopBtn = document.getElementById("backToTopBtn");

  if (backToTopBtn) {
    // Check if the element exists before adding an event listener
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
        backToTopBtn.style.position = "fixed";
        backToTopBtn.style.bottom = "20px";
      } else {
        backToTopBtn.style.display = "none";
        backToTopBtn.style.position = "initial";
        backToTopBtn.style.bottom = "initial";
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

backToTop();

// Function to handle smooth scrolling for navigation links
const smoothScroll = (e) => {
  e.preventDefault();
  const targetId = e.target.getAttribute("href").substring(1); // Remove the "#" from the href
  const targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({
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
  form.style.display = "none";
  thankYouMessage.style.display = "block";
};

const form = document.querySelector(".contact-form");
form.addEventListener("submit", handleSubmit);

// Function to show and hide the resume section
const toggleResumeSection = () => {
  const resumeBtn = document.getElementById("resume-link");
  const hideCv = document.getElementById("resume-close");
  const resumeSection = document.getElementById("cv");

  const fadeInLeftClass = "animate__animated animate__fadeInLeft"; // Fixed the class name

  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default link behavior
    resumeSection.style.display = "block"; // Set the display property
    resumeSection.classList.add(fadeInLeftClass);
  });

  hideCv.addEventListener("click", () => {
    resumeSection.style.display = "none"; // Set the display property
    resumeSection.classList.remove(fadeInLeftClass);
  });
};

toggleResumeSection();

// Function to toggle the theme and save the preference to local storage
const toggleTheme = () => {
  const body = document.body;
  const themeToggleButton = document.getElementById("themeToggle");
  const navbar = document.getElementById("navbar");
  const svg = document.getElementById("portfolio-bg");

  themeToggleButton.addEventListener("change", () => {
    const isDarkTheme = themeToggleButton.checked;
    body.classList.toggle("dark", isDarkTheme);
    body.classList.toggle("light", !isDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

    navbar.classList.remove(isDarkTheme ? "navbar-light" : "navbar-dark");
    navbar.classList.add(isDarkTheme ? "navbar-dark" : "navbar-light");
    svg.style.filter = isDarkTheme
      ? "invert(100%) sepia(100%) saturate(10000%) hue-rotate(180deg)"
      : "none";
  });

  document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      themeToggleButton.checked = true;
      themeToggleButton.dispatchEvent(new Event("change")); // Trigger change event to apply the saved theme
    }
  });

  // Check local storage for the theme preference and apply it
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    themeToggleButton.checked = true;
    themeToggleButton.dispatchEvent(new Event("change")); // Trigger change event to apply the saved theme
  } else {
    themeToggleButton.checked = false;
    themeToggleButton.dispatchEvent(new Event("change")); // Trigger change event to apply the default light theme
  }

  // Delete saved theme from local storage on page close
  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("theme");
  });
};

toggleTheme();
