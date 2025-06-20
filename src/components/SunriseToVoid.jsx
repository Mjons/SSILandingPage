import { useEffect, useRef, useState } from 'react';

// Static Starfield Component for reuse in other sections
export const StaticStarfield = ({ opacity = 1 }) => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);

    // Initialize stars once
    useEffect(() => {
        if (starsRef.current.length === 0) {
            const starCount = 200;
            starsRef.current = [];
            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random(),
                    y: Math.random(),
                    size: Math.random() * 2 + 0.5,
                    brightness: Math.random(),
                    hasTwinkle: Math.random() > 0.8
                });
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Ensure canvas is properly sized
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Clear canvas with transparent background
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        drawStars(ctx, canvas.width, canvas.height, opacity);
    }, [opacity]);

    const drawStars = (ctx, width, height, opacity) => {
        ctx.globalAlpha = opacity;

        for (let star of starsRef.current) {
            const x = star.x * width;
            const y = star.y * height;
            const size = star.size;
            const brightness = star.brightness;

            ctx.fillStyle = `rgba(255, 255, 255, ${brightness * opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Add twinkle effect for some stars
            if (star.hasTwinkle) {
                ctx.strokeStyle = `rgba(200, 200, 255, ${brightness * opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x - size * 2, y);
                ctx.lineTo(x + size * 2, y);
                ctx.moveTo(x, y - size * 2);
                ctx.lineTo(x, y + size * 2);
                ctx.stroke();
            }
        }

        ctx.globalAlpha = 1;
    };

    const handleResize = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ background: 'transparent' }}
        />
    );
};

const SunriseToVoid = ({ scrollProgress, reverse = false }) => {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);

    // Initialize stars once
    useEffect(() => {
        if (starsRef.current.length === 0) {
            const starCount = 200;
            starsRef.current = [];
            for (let i = 0; i < starCount; i++) {
                starsRef.current.push({
                    x: Math.random(),
                    y: Math.random(),
                    size: Math.random() * 2 + 0.5,
                    brightness: Math.random(),
                    hasTwinkle: Math.random() > 0.8
                });
            }
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Ensure canvas is properly sized
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Clear canvas with white background for start (or gray-900 for reverse)
        if (reverse) {
            // For reverse mode, always start with gray-900 background
            ctx.fillStyle = '#111827';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        if (scrollProgress === 0) return;

        // Draw the curtain effect
        drawCurtainEffect(ctx, canvas.width, canvas.height, scrollProgress, reverse);

        // Add stars behind the curtain when it opens
        if (scrollProgress > 0.3 && starsRef.current.length > 0) {
            const starOpacity = Math.min(1, (scrollProgress - 0.3) / 0.4);
            drawStars(ctx, canvas.width, canvas.height, starOpacity);
        }
    }, [scrollProgress, reverse]);

    const drawCurtainEffect = (ctx, width, height, progress, isReverse = false) => {
        // For reverse mode, invert the progress and flip the effect
        const effectiveProgress = isReverse ? 1 - progress : progress;

        // Fill background with black (what's revealed underneath) or gray-900 for reverse
        ctx.fillStyle = isReverse ? '#111827' : '#000000'; // #111827 is gray-900
        ctx.fillRect(0, 0, width, height);

        // Calculate curtain bend parameters
        const centerX = width / 2;
        const maxBend = height * 0.8; // Maximum height the lines can bend up to
        const bendHeight = maxBend * Math.min(1, effectiveProgress * 2); // How much the lines bend up

        // Define the 3 line positions (as percentages of height)
        const baseLinePositions = [0.3, 0.5, 0.7];
        // For reverse mode, flip the positions vertically
        const linePositions = isReverse ? baseLinePositions.map(pos => 1 - pos) : baseLinePositions;
        const lineColors = ['#ff9800', '#ff5722', '#d32f2f']; // Sunset colors

        // Calculate fade-out opacity for gradual disappearance
        // Start fading at 70% progress, fully gone by 95%
        const fadeStartProgress = 0.7;
        const fadeEndProgress = 0.95;
        let fadeOpacity = 1;

        if (effectiveProgress > fadeStartProgress) {
            fadeOpacity = Math.max(0, 1 - ((effectiveProgress - fadeStartProgress) / (fadeEndProgress - fadeStartProgress)));
        }

        // Only draw if we have some opacity
        if (fadeOpacity > 0) {
            linePositions.forEach((linePos, index) => {
                const baseY = height * linePos;

                // Create the curved line path with fade opacity
                ctx.globalAlpha = fadeOpacity;
                ctx.beginPath();
                ctx.strokeStyle = lineColors[index];
                ctx.lineWidth = Math.max(1, 3 - effectiveProgress * 2); // Lines get thinner as they bend
                ctx.lineCap = 'round';

                // Draw the curtain line with bezier curve
                const startY = baseY;
                const endY = baseY;
                // For reverse mode, bend downward instead of upward
                const bendDirection = isReverse ? 1 : -1;
                const controlY = baseY + (bendDirection * bendHeight * (1 - Math.abs(0.5 - (isReverse ? 1 - linePos : linePos)) * 2));

                // Left side of the curtain
                ctx.moveTo(0, startY);
                ctx.quadraticCurveTo(centerX * 0.7, controlY, centerX, controlY);

                // Right side of the curtain
                ctx.quadraticCurveTo(centerX * 1.3, controlY, width, endY);

                ctx.stroke();

                // Fill above/below the curtain line with sunset colors (fade out earlier)
                if (effectiveProgress < 0.8) {
                    const fillFadeOpacity = effectiveProgress < 0.6 ? 1 : Math.max(0, 1 - ((effectiveProgress - 0.6) / 0.2));

                    const gradient = ctx.createLinearGradient(0, isReverse ? height : 0, 0, isReverse ? 0 : baseY);
                    gradient.addColorStop(0, '#fff9e6');
                    gradient.addColorStop(0.3, '#ffeb3b');
                    gradient.addColorStop(0.6, lineColors[index]);
                    gradient.addColorStop(1, lineColors[index]);

                    ctx.fillStyle = gradient;

                    // Create a path for the area above/below the curtain line
                    ctx.beginPath();
                    if (isReverse) {
                        // Fill below the line for reverse mode
                        ctx.moveTo(0, height);
                        ctx.lineTo(width, height);
                        ctx.lineTo(width, endY);
                        ctx.quadraticCurveTo(centerX * 1.3, controlY, centerX, controlY);
                        ctx.quadraticCurveTo(centerX * 0.7, controlY, 0, startY);
                    } else {
                        // Fill above the line for normal mode
                        ctx.moveTo(0, 0);
                        ctx.lineTo(width, 0);
                        ctx.lineTo(width, endY);
                        ctx.quadraticCurveTo(centerX * 1.3, controlY, centerX, controlY);
                        ctx.quadraticCurveTo(centerX * 0.7, controlY, 0, startY);
                    }
                    ctx.closePath();

                    ctx.globalAlpha = (0.7 - (index * 0.2)) * fillFadeOpacity * fadeOpacity;
                    ctx.fill();
                }

                ctx.globalAlpha = 1; // Reset alpha
            });

            // Add some sparkle effects at the bend points with fade
            if (effectiveProgress > 0.2) {
                const sparkleCount = Math.floor(effectiveProgress * 10);
                const sparkleFadeOpacity = effectiveProgress < 0.8 ? 1 : Math.max(0, 1 - ((effectiveProgress - 0.8) / 0.15));

                for (let i = 0; i < sparkleCount; i++) {
                    const x = centerX + (Math.random() - 0.5) * 100;
                    const sparkleBaseY = height * (0.3 + Math.random() * 0.4);
                    const y = isReverse ?
                        sparkleBaseY + bendHeight * 0.5 : // Sparkles move down for reverse
                        sparkleBaseY - bendHeight * 0.5;  // Sparkles move up for normal
                    const size = Math.random() * 3 + 1;

                    ctx.globalAlpha = Math.random() * 0.8 * sparkleFadeOpacity * fadeOpacity;
                    ctx.fillStyle = `rgba(255, 255, 255, 1)`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();

                    // Add sparkle cross
                    ctx.globalAlpha = Math.random() * 0.6 * sparkleFadeOpacity * fadeOpacity;
                    ctx.strokeStyle = `rgba(255, 255, 255, 1)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x - size * 2, y);
                    ctx.lineTo(x + size * 2, y);
                    ctx.moveTo(x, y - size * 2);
                    ctx.lineTo(x, y + size * 2);
                    ctx.stroke();
                }

                ctx.globalAlpha = 1; // Reset alpha
            }
        }
    };

    const drawStars = (ctx, width, height, opacity) => {
        ctx.globalAlpha = opacity;

        for (let star of starsRef.current) {
            const x = star.x * width;
            const y = star.y * height;
            const size = star.size;
            const brightness = star.brightness;

            ctx.fillStyle = `rgba(255, 255, 255, ${brightness * opacity})`;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Add twinkle effect for some stars
            if (star.hasTwinkle) {
                ctx.strokeStyle = `rgba(200, 200, 255, ${brightness * opacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x - size * 2, y);
                ctx.lineTo(x + size * 2, y);
                ctx.moveTo(x, y - size * 2);
                ctx.lineTo(x, y + size * 2);
                ctx.stroke();
            }
        }

        ctx.globalAlpha = 1;
    };

    const handleResize = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
    };

    useEffect(() => {
        // Initial canvas setup
        const canvas = canvasRef.current;
        if (canvas) {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{
                opacity: 1, // Keep fully visible, no fade out
                zIndex: 10 // Ensure it's above previous sections but below the text overlay (z-30)
            }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                    background: reverse ? '#111827' : 'transparent', // Match gray-900 for reverse mode
                    position: 'relative',
                    zIndex: 1
                }}
            />
        </div>
    );
};

export default SunriseToVoid; 