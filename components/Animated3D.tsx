import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const Animated3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Create SVG container
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 1200 800');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.overflow = 'visible';
    svg.style.pointerEvents = 'none';
    svgRef.current = svg;
    container.appendChild(svg);

    // Create horse racing track path (oval shape with turns)
    const trackPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    trackPath.setAttribute('id', 'racing-track');
    trackPath.setAttribute('d', 'M 200 400 Q 200 200 400 200 Q 600 200 800 200 Q 1000 200 1000 400 Q 1000 600 800 600 Q 600 600 400 600 Q 200 600 200 400 Z');
    trackPath.setAttribute('fill', 'none');
    trackPath.setAttribute('stroke', '#d0261b');
    trackPath.setAttribute('stroke-width', '3');
    trackPath.setAttribute('opacity', '0.3');
    trackPath.style.strokeDasharray = '1000';
    trackPath.style.strokeDashoffset = '1000';
    svg.appendChild(trackPath);

    // Create inner track path (for morphing)
    const innerTrackPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    innerTrackPath.setAttribute('id', 'inner-track');
    innerTrackPath.setAttribute('d', 'M 300 400 Q 300 250 450 250 Q 600 250 750 250 Q 900 250 900 400 Q 900 550 750 550 Q 600 550 450 550 Q 300 550 300 400 Z');
    innerTrackPath.setAttribute('fill', 'none');
    innerTrackPath.setAttribute('stroke', '#d0261b');
    innerTrackPath.setAttribute('stroke-width', '2');
    innerTrackPath.setAttribute('opacity', '0.2');
    innerTrackPath.style.strokeDasharray = '800';
    innerTrackPath.style.strokeDashoffset = '800';
    svg.appendChild(innerTrackPath);

    // Create outer track path (for morphing)
    const outerTrackPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    outerTrackPath.setAttribute('id', 'outer-track');
    outerTrackPath.setAttribute('d', 'M 100 400 Q 100 150 350 150 Q 600 150 850 150 Q 1100 150 1100 400 Q 1100 650 850 650 Q 600 650 350 650 Q 100 650 100 400 Z');
    outerTrackPath.setAttribute('fill', 'none');
    outerTrackPath.setAttribute('stroke', '#d0261b');
    outerTrackPath.setAttribute('stroke-width', '2');
    outerTrackPath.setAttribute('opacity', '0.2');
    outerTrackPath.style.strokeDasharray = '1200';
    outerTrackPath.style.strokeDashoffset = '1200';
    svg.appendChild(outerTrackPath);

    // Create horses (circles with numbers that will follow the track)
    const horses: HTMLElement[] = [];
    const horseColors = ['#61dafb', '#4FC08D', '#3178c6', '#f7df1e', '#e34c26'];
    
    // Generate random numbers from 1-20 without duplicates
    const availableNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
    const shuffledNumbers = availableNumbers.sort(() => Math.random() - 0.5);
    const selectedNumbers = shuffledNumbers.slice(0, 5);
    
    for (let i = 0; i < 5; i++) {
      // Create a group to hold circle and text
      const horseGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      horseGroup.setAttribute('opacity', '0');
      
      // Create circle background
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', '15');
      circle.setAttribute('fill', horseColors[i]);
      circle.setAttribute('stroke', '#fff');
      circle.setAttribute('stroke-width', '2');
      circle.style.filter = `drop-shadow(0 0 8px ${horseColors[i]})`;
      horseGroup.appendChild(circle);
      
      // Create text element for the number
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '0');
      text.setAttribute('y', '0');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dominant-baseline', 'central');
      text.setAttribute('fill', '#fff');
      text.setAttribute('font-size', '14');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('font-family', 'Arial, sans-serif');
      text.textContent = selectedNumbers[i].toString();
      horseGroup.appendChild(text);
      
      svg.appendChild(horseGroup);
      horses.push(horseGroup as unknown as HTMLElement);
    }

    // Helper function to get path length
    const getPathLength = (pathElement: SVGPathElement): number => {
      return pathElement.getTotalLength();
    };

    // Helper function to get point on path at progress (0-1)
    const getPointOnPath = (pathElement: SVGPathElement, progress: number): { x: number; y: number; angle: number } => {
      const length = pathElement.getTotalLength();
      const point = pathElement.getPointAtLength(length * progress);
      const nextPoint = pathElement.getPointAtLength(length * (progress + 0.01));
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
      return { x: point.x, y: point.y, angle };
    };

    // Animation sequence
    const startAnimations = () => {
      // 1. Draw the main racing track (SVG path drawing)
      const trackLength = getPathLength(trackPath);
      animate(trackPath, {
        strokeDashoffset: [trackLength, 0],
        duration: 2000,
        easing: 'easeInOutSine',
      });

      // 2. Draw inner track after main track
      const innerLength = getPathLength(innerTrackPath);
      animate(innerTrackPath, {
        strokeDashoffset: [innerLength, 0],
        duration: 1500,
        delay: 500,
        easing: 'easeInOutSine',
      });

      // 3. Draw outer track
      const outerLength = getPathLength(outerTrackPath);
      animate(outerTrackPath, {
        strokeDashoffset: [outerLength, 0],
        duration: 1500,
        delay: 1000,
        easing: 'easeInOutSine',
      });

      // 4. Animate horses following the main track (motion path)
      horses.forEach((horse, index) => {
        // Fade in
        animate(horse, {
          opacity: [0, 1],
          duration: 500,
          delay: 2000 + index * 200,
          easing: 'easeOutQuad',
        });

        // Follow track with motion path using keyframes
        // Only create keyframes up to 45% of the path
        const keyframes: any[] = [];
        for (let i = 0; i <= 45; i++) {
          const progress = i / 100;
          const point = getPointOnPath(trackPath, progress);
          keyframes.push({
            translateX: point.x,
            translateY: point.y,
            rotate: point.angle,
          });
        }

        const horseDuration = 8000 + index * 1000;
        const horseDelay = 2500 + index * 300;
        
        // Animate horse to 45% of the path, then remove
        // Make horses 10% slower by increasing duration by 10%
        const animationDuration = horseDuration * 0.45 * 1.1; // 45% of full duration, 10% slower
        
        animate(horse, {
          keyframes: keyframes,
          duration: animationDuration,
          delay: horseDelay,
          easing: 'linear',
        });
        
        // Remove horse after it reaches 45% (fade out and remove from DOM)
        setTimeout(() => {
          // Fade out
          animate(horse, {
            opacity: [1, 0],
            duration: 500,
            easing: 'easeOutQuad',
          });
          
          // Remove from DOM after fade out
          setTimeout(() => {
            if (horse.parentNode) {
              horse.parentNode.removeChild(horse);
            }
          }, 500);
        }, horseDelay + animationDuration);
      });

      // 5. Morph track shapes (inner track morphing to outer and back)
      const innerD = innerTrackPath.getAttribute('d') || '';
      const outerD = outerTrackPath.getAttribute('d') || '';
      
      animate(innerTrackPath, {
        d: [
          { value: innerD },
          { value: outerD },
          { value: innerD },
        ],
        duration: 3000,
        delay: 3000,
        easing: 'easeInOutSine',
        loop: true,
      });
    };

    // Start animations after a short delay
    const timeoutId = setTimeout(startAnimations, 500);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      if (svg && svg.parentNode) {
        svg.parentNode.removeChild(svg);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{
        transformStyle: 'preserve-3d',
      }}
    />
  );
};

export default Animated3D;
