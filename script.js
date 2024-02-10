const form = document.querySelector(".contact-form");
form.addEventListener("submit", handleSubmit);

const toggleResumeSection = () => {
  const resumeBtn = document.getElementById("resume-link");
  const hideCv = document.getElementById("resume-close");
  const resumeSection = document.getElementById("cv");

  const fadeInLeftClass = "animate__animated animate__fadeInLeft";

  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resumeSection.style.display = "block";
    resumeSection.classList.add(fadeInLeftClass);
  });

  hideCv.addEventListener("click", () => {
    resumeSection.style.display = "none";
    resumeSection.classList.remove(fadeInLeftClass);
  });
};

toggleResumeSection();

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
      themeToggleButton.dispatchEvent(new Event("change"));
    }
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    themeToggleButton.checked = true;
    themeToggleButton.dispatchEvent(new Event("change"));
  } else {
    themeToggleButton.checked = false;
    themeToggleButton.dispatchEvent(new Event("change"));
  }

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("theme");
  });
};

toggleTheme();
