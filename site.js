function buildStars() {
  const canvas = document.querySelector(".stars");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
  };

  const stars = Array.from({ length: 130 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.6 + 0.25,
    a: Math.random() * 0.8 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(191, 219, 254, ${star.a})`;
      ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  window.addEventListener("resize", resize);
  resize();
}

function launchProductExperience(event) {
  if (event) event.preventDefault();
  window.open("https://github.com/Nolan-McKenna/ephemeris", "_blank", "noopener,noreferrer");
  window.open("https://github.com/anirvanbordoloi07/ephemeris", "_blank", "noopener,noreferrer");
  window.location.href = "/product";
}

document.addEventListener("DOMContentLoaded", () => {
  buildStars();

  document.querySelectorAll("[data-launch-product]").forEach((node) => {
    node.addEventListener("click", launchProductExperience);
  });
});
