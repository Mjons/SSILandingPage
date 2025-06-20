import { useEffect, useRef } from 'react';

const StarfieldBackground = ({ isWarpActive, onWarpComplete }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const starsRef = useRef([]);
    const speedRef = useRef({ current: 2, base: 2, warp: 20 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const starCount = 500;

        // Resize canvas to fill container
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            initStars();
        };

        // Initialize starfield with random positions
        const initStars = () => {
            starsRef.current = [];
            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * canvas.width,
                });
            }
        };

        // Update star positions based on current speed
        const updateStars = () => {
            for (let star of starsRef.current) {
                star.z -= speedRef.current.current;
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                }
            }
        };

        // Draw stars with perspective projection effect
        const drawStars = () => {
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            for (let star of starsRef.current) {
                let k = 128 / star.z;
                let x = star.x * k + centerX;
                let y = star.y * k + centerY;
                let size = (1 - star.z / canvas.width) * 3;

                // Add color variation based on speed for warp effect
                const intensity = Math.min(speedRef.current.current / speedRef.current.warp, 1);
                const red = Math.floor(255 * intensity);
                const blue = Math.floor(255 * (1 - intensity * 0.5));
                ctx.fillStyle = `rgb(${red}, ${blue}, 255)`;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fill();

                // Draw star trails during warp
                if (speedRef.current.current > speedRef.current.base) {
                    const trailLength = speedRef.current.current * 2;
                    const prevK = 128 / (star.z + trailLength);
                    const prevX = star.x * prevK + centerX;
                    const prevY = star.y * prevK + centerY;

                    ctx.strokeStyle = `rgba(${red}, ${blue}, 255, 0.3)`;
                    ctx.lineWidth = size * 0.5;
                    ctx.beginPath();
                    ctx.moveTo(prevX, prevY);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
            }
        };

        // Main animation loop
        const animate = () => {
            updateStars();
            drawStars();
            animationRef.current = requestAnimationFrame(animate);
        };

        // Initialize and start animation
        resizeCanvas();
        animate();

        // Handle resize
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Handle warp activation
    useEffect(() => {
        if (isWarpActive) {
            speedRef.current.current = speedRef.current.warp;

            // Return to normal speed after 3 seconds
            const timeout = setTimeout(() => {
                speedRef.current.current = speedRef.current.base;
                if (onWarpComplete) onWarpComplete();
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [isWarpActive, onWarpComplete]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ background: 'black' }}
        />
    );
};

export default StarfieldBackground; 