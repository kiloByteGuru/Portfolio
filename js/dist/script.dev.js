"use strict";

window.addEventListener("scroll", function () {
  var projects = document.querySelectorAll(".card.project");
  projects.forEach(function (project) {
    var projectPosition = project.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (projectPosition < screenPosition) {
      project.classList.add("animate__fadeInUp");
    }
  });
});
var backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
var form = document.querySelector('.contact-form');
var thankYouMessage = document.querySelector('.thankyou_message');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.style.display = 'none';
  thankYouMessage.style.display = 'block';
});
; // Scroll reveal animations

var scroll = new ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});
scroll.reveal('.feature', {
  delay: 200
}); // Fade in hero text on load

var myName = document.querySelector('#name-heading');
myName.addEventListener('DOMContentLoaded', function () {
  myName.classList.remove('className', 'hero-text');
  myName.classList.add('className', 'loaded');
}); // Function to add fade-in animation when element is in view

function animateOnScroll(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    }
  });
} // Function to handle fade-in and fade-out animations


function handleSectionVisibility(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-active');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in-active');
    }
  });
} // Observe elements with class 'fade-in'


var fadeElements = document.querySelectorAll('.fade-in');
var fadeObserver = new IntersectionObserver(animateOnScroll, {
  threshold: 0.5
});
fadeElements.forEach(function (element) {
  fadeObserver.observe(element);
}); // Observe sections for fade-in and fade-out animations

var sections = document.querySelectorAll('section');
var sectionObserver = new IntersectionObserver(handleSectionVisibility, {
  threshold: 0.5
});
sections.forEach(function (section) {
  sectionObserver.observe(section);
});
var themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", function () {
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