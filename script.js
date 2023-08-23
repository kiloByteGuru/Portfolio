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