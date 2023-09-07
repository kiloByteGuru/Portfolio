
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
    window.scrollTop = 0;
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

// home section load with delay 

const section = document.querySelector(".hero");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    section.classList.remove("hidden");
    section.classList.add("animate__fadeInLeft");
  }, 500);

});

// show resume section on click

const resumeBtn = document.querySelector("#resume-link");
const hideCv = document.querySelector("#resume-close");

resumeBtn.addEventListener("click", () => {
  const resumeSection = document.querySelector("#resume");
  resumeSection.classList.remove("hidden");
  resumeSection.classList.add("animate__fadeInLeft");
});

hideCv.addEventListener("click", () => {
  const resumeSection = document.querySelector("#resume");
  resumeSection.classList.remove("animate__fadeInLeft");
  resumeSection.classList.add("animate__fadeOutRight");
  resumeSection.classList.add("hidden");
});

// sections reveal when scrolling down

const sections = document.querySelectorAll(".section-animate");
