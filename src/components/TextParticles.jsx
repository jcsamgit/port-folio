import React, { useEffect, useRef } from 'react';

const TextParticles = ({text}) => {
const canvasRef = useRef(null);
const effectRef = useRef(null);
const containerRef = useRef(null);

useEffect(() => {
const canvas = canvasRef.current;
const ctx = canvas.getContext('2d', {
    willReadFrequently: true,
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(effect, x, y, color) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.canvasWidth);
        this.y = Math.floor(Math.random() * this.effect.canvasHeight);
        this.color = color;
        this.originX = x;
        this.originY = y;
        this.size = 3;
        this.rad = Math.floor(Math.random() * this.effect.gap);
        this.dx = 0;
        this.dy = 0;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = 0.7;
        this.ease = 0.1;
       }
     
       draw() {
        this.effect.context.fillStyle = this.color;
     
        // circle particle
        this.effect.context.beginPath();
        this.effect.context.arc(this.x, this.y, this.rad, Math.PI * 2, false);
        this.effect.context.fill();
     
        // Uncomment for rectangle shape
        // this.effect.context.fillRect(this.x, this.y, this.size, this.size);
       }
     
       update() {
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = -this.effect.mouse.radius / this.distance;
     
        if (this.distance < this.effect.mouse.radius) {
         this.angle = Math.atan2(this.dy, this.dx);
         this.vx += this.force * Math.cos(this.angle);
         this.vy += this.force * Math.sin(this.angle);
        }
     
        this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
       }
}

class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context;
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.textX = canvas.width / 2;
      this.textY = canvas.height / 2;
  
      // Particle
      this.particles = [];
      this.gap = 4;
      this.mouse = {
        radius: 2500,
        x: 0,
        y: 0,
      };
  
      // window.addEventListener('pointermove', (e) => {
      //   this.mouse.x = e.x;
      //   this.mouse.y = e.y;
      // });

      
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });
      
    }
  
    // TEXT ****
    bigText(text) {
      const h = Math.floor(Math.random() * 359);
      const s = '100%';
      const l = '50%';
      const gradient = 'hsl(' + h + ',' + s + ',' + l + ')';
  
      this.context.fillStyle = gradient;
      this.context.strokeStyle = 'white';
      this.context.lineWidth = 2;
      this.context.font = '20vw Helvetica';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.strokeText(text, this.textX, this.textY);
      this.context.fillText(text, this.textX, this.textY);
  
      this.ParticleConv();
    }
  
    ParticleConv() {
      this.particles = [];
      const pixel = this.context.getImageData(0, 0, canvas.width, canvas.height).data;
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      for (let y = 0; y < this.canvasHeight; y += this.gap) {
        for (let x = 0; x < this.canvasWidth; x += this.gap) {
          const index = (y * this.canvasWidth + x) * 4;
          const alpha = pixel[index + 3];
          if (alpha > 0) {
            // const red = pixel[index];
            // const green = pixel[index + 1];
            const blue = pixel[index + 0];
            const color = 'hsl(' + Math.floor(Math.random() * 359) + ',' + '100%,' + '60%' + ')';
            this.particles.push(new Particle(this, x, y, "aqua"));
          }
        }
      }
    }
  
    Render() {
      this.particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    }
  
    resize(width, height) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.textX = canvas.width / 2;
      this.textY = canvas.height / 2;
    }
  }
  

// Crear una instancia de Effect
effectRef.current = new Effect(ctx, canvas.width, canvas.height);
effectRef.current.bigText(text);// texto variable
effectRef.current.Render();

// Animación
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effectRef.current.Render();
    requestAnimationFrame(animate);
};
animate();

// Manejar redimensionamiento de la ventana
const handleResize = () => {
  // usar las dimensiones del contenedor y no de la ventana
  canvas.width = containerRef.current.clientWidth;
  canvas.height = containerRef.current.clientHeight;
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    effectRef.current.resize(canvas.width, canvas.height);
    effectRef.current.bigText(text); //texto variable
};

window.addEventListener('resize', handleResize);

handleResize();

return () => {
    // Limpiar event listeners al desmontar el componente
    window.removeEventListener('resize', handleResize);
};
}, [text]);

return (
  <div className='letrasAtomicas text-particles'ref={containerRef} >
    <canvas ref={canvasRef}  />
  </div>
);
};

export default TextParticles;
