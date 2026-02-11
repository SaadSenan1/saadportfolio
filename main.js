function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let starsArray = [];
const numberOfStars = 200;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  starsArray = [];
  for (let i = 0; i < numberOfStars; i++) {
    starsArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  starsArray.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(0,255,150,0.9)'; // اللون الأخضر
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}

// تهيئة
window.addEventListener('resize', () => {
  resizeCanvas();
  initStars();
});

resizeCanvas();
initStars();
animateStars();
