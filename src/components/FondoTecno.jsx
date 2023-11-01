import React, { useEffect, useRef } from 'react';

const FondoTecno = () => {
  const canvasRef = useRef(null);
  const p = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.background = '#282c34';
    //  #282c34 = rgba(40,44,52)

    function Clear() {
      if (ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0.07)';
        // ctx.fillStyle = 'rgba(40,44,52,0.07)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    function Particle(x, y, speed, c) {
      this.x = x;
      this.y = y;
      this.speed = speed;

      this.upd = function () {
        if (ctx) {
          ctx.strokeStyle = c;
          ctx.lineWidth = 1;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          this.x += this.speed.x;
          this.y += this.speed.y;
          ctx.lineTo(this.x, this.y);
          ctx.stroke();

          this.ang = Math.atan2(this.speed.y, this.speed.x);
          this.mag = Math.sqrt(this.speed.x ** 2 + this.speed.y ** 2);
          const op = [this.ang + Math.PI / 4, this.ang - Math.PI / 4];
          const ch = Math.floor(Math.random() * op.length);

          if (Math.random() < 0.05) {
            this.speed.x = Math.cos(op[ch]) * this.mag;
            this.speed.y = Math.sin(op[ch]) * this.mag;
          }
        }
      };
    }

    const speed = 5;
    const period = 1000;

    function pulse() {
      setTimeout(pulse, period);
      const h = Math.random() * (210 - 150) + 150;
      for (let i = 0; i < 56; i++) {
        p.push(
          new Particle(
            canvas.width / 2,
            canvas.height / 2,
            {
              x: Math.cos((i / 8) * 2 * Math.PI) * speed,
              y: Math.sin((i / 8) * 2 * Math.PI) * speed,
            },
            `hsl(${h},100%,50%)`
          )
        );
      }
    }

    function gameMove() {
      requestAnimationFrame(gameMove);
      Clear();
      for (let i = 0; i < p.length; i++) {
        p[i].upd();
        if (p[i].x < 0 || p[i].x > canvas.width || p[i].y < 0 || p[i].y > canvas.height) {
          p.splice(i, 1);
        }
      }
    }

    pulse();
    gameMove();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FondoTecno;
