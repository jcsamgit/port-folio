import React, { useEffect } from 'react';

const StarsAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const contextParticles = canvas.getContext("2d");
    const particles = [];

    const minParticleSize = 8;
    const maxParticleSize = 17;

    const minOpacity = 0.1;
    const maxOpacity = 1;
    const opacityChangeSpeed = 0.009;

    const minSpeed = -1;
    const maxSpeed = 2;

    function createParticle(x, y) {
      for (let i = 0; i < 1; i++) {
        const randomX = x + (Math.random() * 80 - 20);
        const randomY = y + (Math.random() * 80 - 20);
        const randomSize = minParticleSize + Math.random() * (maxParticleSize - minParticleSize);
        const randomColor = getRandomColor();
        const randomOpacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
        const randomSpeedX = minSpeed + Math.random() * (maxSpeed - minSpeed);
        const randomSpeedY = minSpeed + Math.random() * (maxSpeed - minSpeed);

        particles.push({
          x: randomX,
          y: randomY,
          size: randomSize,
          color: randomColor,
          opacity: randomOpacity,
          speedX: randomSpeedX,
          speedY: randomSpeedY,
        });
      }
    }

    function updateParticles() {
      contextParticles.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        contextParticles.save();

        createPolygonClip(contextParticles, particle.x, particle.y, particle.size);

        contextParticles.globalAlpha = particle.opacity;
        contextParticles.filter = 'blur(1px)';
        contextParticles.fillStyle = particle.color;
        contextParticles.beginPath();
        contextParticles.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        contextParticles.fill();
        contextParticles.restore();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.opacity -= opacityChangeSpeed;

        if (particle.opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(updateParticles);
    }

    updateParticles();

    function getRandomColor() {
      const alpha = 0.6 + Math.random() * 0.4;
      const color = `rgba(255, 255, 255, ${alpha})`;
      return color;
    }

    canvas.addEventListener("mousemove", (event) => {
      createParticle(event.clientX, event.clientY);
    });

    canvas.addEventListener("touchmove", (event) => {
      const touch = event.touches[0];
      createParticle(touch.clientX, touch.clientY);
    });

    function createPolygonClip(ctx, x, y, size) {
      ctx.beginPath();
      ctx.moveTo(x + size * 0.38, y + size * 0.35);
      ctx.lineTo(x + size * 0.51, y + size * 0);
      ctx.lineTo(x + size * 0.62, y + size * 0.36);
      ctx.lineTo(x + size * 1, y + size * 0.48);
      ctx.lineTo(x + size * 0.61, y + size * 0.60);
      ctx.lineTo(x + size * 0.48, y + size * 1);
      ctx.lineTo(x + size * 0.37, y + size * 0.59);
      ctx.lineTo(x + size * 0, y + size * 0.47);
      ctx.closePath();
      ctx.clip();
    }
  }, []);

  return (
    <div>
      <canvas id="canvas" style={{ position: "absolute", top: 0, left: 0, backgroundColor: "#000" }} />
    </div>
  );
};

export default StarsAnimation;
