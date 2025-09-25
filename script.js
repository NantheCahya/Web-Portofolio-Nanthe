// Smooth Scroll untuk menu
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
});

// Efek animasi saat scroll
const sections = document.querySelectorAll("section");
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Animasi muncul saat scroll
function revealSections() {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      sec.classList.add("visible");
    }
  });
}

// Jalankan saat load & scroll
window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

