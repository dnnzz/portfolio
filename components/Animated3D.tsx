import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface FloatingElement {
  id: string;
  element: HTMLElement | null;
  initialX: number;
  initialY: number;
  initialZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
}

const Animated3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements: FloatingElement[] = [];

    // Helper function to create SVG icon
    const createSVGIcon = (svgContent: string, color: string, size: number = 48) => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', size.toString());
      svg.setAttribute('height', size.toString());
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.innerHTML = svgContent;
      svg.style.filter = `drop-shadow(0 0 10px ${color}80)`;
      return svg;
    };

    // Front-end developer themed symbols
    const symbols = [
      { text: '< />', color: '#e34c26', size: 'text-4xl', type: 'text' }, // HTML tag (HTML5 red)
      { text: '</>', color: '#f06529', size: 'text-3xl', type: 'text' }, // Closing tag (HTML5 orange)
      { text: '{}', color: '#fbbf24', size: 'text-4xl', type: 'text' }, // Object brackets (gold)
      { text: 'React', color: '#61dafb', size: 'text-2xl', type: 'text' }, // React (cyan/light blue)
      { 
        text: 'Vue.js', 
        color: '#4FC08D', 
        size: 'text-2xl', 
        type: 'icon',
        icon: '<path d="M12 2L2 20h4l6-10.5L18 20h4L12 2z" fill="currentColor"/><path d="M12 2L8 10l4 8l4-8L12 2z" fill="currentColor" opacity="0.6"/>'
      }, // Vue.js (green) - Triangle logo
      { 
        text: 'Nuxt.js', 
        color: '#00DC82', 
        size: 'text-2xl', 
        type: 'icon',
        icon: '<path d="M12 2L2 7v10l10 5l10-5V7L12 2z" fill="currentColor"/><path d="M12 4.5L4.5 8v8L12 19.5L19.5 16V8L12 4.5z" fill="white" opacity="0.2"/><path d="M12 7l-3 1.5v3L12 13l3-1.5v-3L12 7z" fill="white" opacity="0.8"/>'
      }, // Nuxt.js (green) - Hexagon logo
      { text: 'TS', color: '#3178c6', size: 'text-2xl', type: 'text' }, // TypeScript (blue)
      { text: 'CSS', color: '#264de4', size: 'text-2xl', type: 'text' }, // CSS (blue)
      { text: 'JS', color: '#f7df1e', size: 'text-2xl', type: 'text' }, // JavaScript (yellow)
      { text: 'HTML', color: '#e34c26', size: 'text-xl', type: 'text' }, // HTML (HTML5 red)
      { 
        text: 'Jenkins', 
        color: '#D24939', 
        size: 'text-2xl', 
        type: 'icon',
        icon: '<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 2L15 8L12 14L9 8L12 2z" fill="white" opacity="0.9"/><circle cx="12" cy="12" r="3" fill="white" opacity="0.9"/>'
      }, // Jenkins (red)
      { 
        text: 'Graylog', 
        color: '#FFA500', 
        size: 'text-2xl', 
        type: 'icon',
        icon: '<rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor"/><path d="M6 8h12M6 12h12M6 16h8" stroke="white" stroke-width="1.5" stroke-linecap="round"/>'
      }, // Graylog (orange)
    ];

    // Create floating text elements
    symbols.forEach((symbol, index) => {
      const element = document.createElement('div');
      element.className = `absolute font-mono font-bold ${symbol.size} select-none pointer-events-none flex items-center justify-center`;
      element.style.color = symbol.color;
      element.style.willChange = 'transform';
      
      if (symbol.type === 'icon' && symbol.icon) {
        // Create SVG icon
        const iconSize = symbol.size.includes('xl') ? 32 : symbol.size.includes('2xl') ? 24 : 20;
        const svg = createSVGIcon(symbol.icon, symbol.color, iconSize);
        svg.style.color = symbol.color;
        element.appendChild(svg);
        
        // Add text label below icon
        const label = document.createElement('div');
        label.textContent = symbol.text;
        label.className = 'text-xs mt-1';
        label.style.textShadow = `0 0 10px ${symbol.color}40, 0 0 20px ${symbol.color}20`;
        label.style.fontSize = '10px';
        element.style.flexDirection = 'column';
        element.appendChild(label);
      } else {
        // Regular text element
        element.style.textShadow = `0 0 20px ${symbol.color}40, 0 0 40px ${symbol.color}20`;
        element.textContent = symbol.text;
      }
      
      // Random initial positions
      const initialX = Math.random() * window.innerWidth;
      const initialY = Math.random() * window.innerHeight;
      const initialZ = Math.random() * 1000 - 500; // -500 to 500
      
      // Random initial rotations
      const rotationX = Math.random() * 360;
      const rotationY = Math.random() * 360;
      const rotationZ = Math.random() * 360;
      
      // Set initial position using CSS, then anime.js will animate relative to this
      element.style.left = `${initialX}px`;
      element.style.top = `${initialY}px`;
      element.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(0)`;
      element.style.opacity = '0';
      element.style.transition = 'opacity 1s ease-in-out, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
      
      container.appendChild(element);
      
      // Fade in and scale up with staggered delay for smooth appearance
      requestAnimationFrame(() => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg) scale(1)`;
          
          // After transition completes, remove transition so animation loop can control opacity smoothly
          setTimeout(() => {
            element.style.transition = 'none'; // Let animation loop handle opacity
          }, 1000); // Wait for initial transition to complete
        }, index * 80);
      });
      
      elements.push({
        id: `element-${index}`,
        element,
        initialX,
        initialY,
        initialZ,
        rotationX,
        rotationY,
        rotationZ,
      });
    });

    elementsRef.current = elements;

    // Create 3D perspective container
    container.style.perspective = '1000px';
    container.style.perspectiveOrigin = '50% 50%';

    // Animate each element using requestAnimationFrame for smooth animations
    const random = (min: number, max: number) => Math.random() * (max - min) + min;
    let animationFrameId: number;
    const startTime = Date.now();
    
    // Helper function to generate new realistic floating targets (gentle, natural movement)
    const generateNewTargets = (el: FloatingElement, currentX: number, currentY: number, currentZ: number) => {
      // More subtle movements - like floating in water or gentle breeze
      const maxDistance = 100; // Reduced from 200 for more subtle movement
      const angle = Math.random() * Math.PI * 2; // Random direction
      const distance = random(30, maxDistance); // Smaller, more controlled movements
      
      return {
        targetX: currentX + Math.cos(angle) * distance,
        targetY: currentY + Math.sin(angle) * distance - 20, // Slight upward bias (like floating up)
        targetZ: currentZ + random(-100, 100), // More subtle Z movement
        targetRotateX: el.rotationX + random(-30, 30), // Much smaller rotation increments
        targetRotateY: el.rotationY + random(-30, 30),
        targetRotateZ: el.rotationZ + random(-15, 15), // Very subtle Z rotation
        targetScale: random(0.95, 1.05), // Very subtle scale changes
        targetOpacity: random(0.92, 1.0),
        duration: random(4000, 8000), // Longer, slower animations
      };
    };

    // Store animation data for each element
    const animationData = elements.map((el, index) => {
      if (!el.element) return null;
      
      const initialTargets = generateNewTargets(el, 0, 0, 0);
      
      return {
        element: el.element,
        baseElement: el, // Store reference to original element for generating new targets
        startX: 0,
        startY: 0,
        startZ: 0,
        startRotateX: el.rotationX,
        startRotateY: el.rotationY,
        startRotateZ: el.rotationZ,
        startScale: 1,
        startOpacity: 1.0, // Start fully visible after transition
        targetX: initialTargets.targetX,
        targetY: initialTargets.targetY,
        targetZ: initialTargets.targetZ,
        targetRotateX: initialTargets.targetRotateX,
        targetRotateY: initialTargets.targetRotateY,
        targetRotateZ: initialTargets.targetRotateZ,
        targetScale: initialTargets.targetScale,
        targetOpacity: initialTargets.targetOpacity,
        duration: initialTargets.duration,
        delay: index * 150, // Staggered delay for more natural appearance
        startTime: Date.now() + index * 150,
        direction: 1, // 1 for forward, -1 for backward
        cycleCount: 0, // Track completed cycles
        velocityX: 0, // Add velocity for smoother transitions
        velocityY: 0,
        velocityZ: 0,
      };
    }).filter(Boolean) as any[];
    
    // More realistic easing functions
    const easeInOutSine = (t: number): number => {
      return -(Math.cos(Math.PI * t) - 1) / 2;
    };
    
    // Smooth ease-out for natural deceleration
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };
    
    // Gentle ease-in-out for floating effect
    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    };
    
    // Animation loop
    const animateLoop = () => {
      const currentTime = Date.now();
      
      animationData.forEach((data) => {
        if (!data || !data.element) return;
        
        const elapsed = currentTime - data.startTime;
        
        if (elapsed < 0) return; // Still in delay
        
        let progress = (elapsed % (data.duration * 2)) / data.duration;
        
        // Handle direction (forward and backward)
        if (progress > 1) {
          progress = 2 - progress; // Reverse direction
        }
        
        // Use smoother easing for more natural movement
        const easedProgress = easeInOutQuad(progress);
        
        // Calculate progress with direction
        let finalProgress = easedProgress;
        if (data.direction === -1) {
          finalProgress = 1 - easedProgress;
        }
        
        // Add slight velocity-based smoothing for more realistic physics
        const smoothFactor = 0.1; // How much velocity affects movement
        
        // Interpolate values with smoother transitions
        const currentX = data.startX + (data.targetX - data.startX) * finalProgress + data.velocityX * smoothFactor;
        const currentY = data.startY + (data.targetY - data.startY) * finalProgress + data.velocityY * smoothFactor;
        const currentZ = data.startZ + (data.targetZ - data.startZ) * finalProgress + data.velocityZ * smoothFactor;
        
        // Very subtle rotations - like gentle floating
        const rotationEase = easeInOutSine(progress);
        const currentRX = data.startRotateX + (data.targetRotateX - data.startRotateX) * rotationEase;
        const currentRY = data.startRotateY + (data.targetRotateY - data.startRotateY) * rotationEase;
        const currentRZ = data.startRotateZ + (data.targetRotateZ - data.startRotateZ) * rotationEase;
        
        // Very subtle scale changes
        const currentScale = data.startScale + (data.targetScale - data.startScale) * easedProgress;
        const opacity = Math.max(0.95, data.startOpacity + (data.targetOpacity - data.startOpacity) * easedProgress);
        
        // Update transform
        data.element.style.transform = `translate3d(${currentX}px, ${currentY}px, ${currentZ}px) rotateX(${currentRX}deg) rotateY(${currentRY}deg) rotateZ(${currentRZ}deg) scale(${currentScale})`;
        data.element.style.opacity = opacity.toString();
        
        // Update direction based on animation cycle (alternate)
        const cycle = Math.floor(elapsed / data.duration);
        const previousCycle = data.cycleCount || 0;
        
        // Generate new realistic targets when a full cycle (forward + backward) completes
        // A full cycle completes when we transition from an even cycle to the next even cycle
        if (cycle > previousCycle && cycle % 2 === 0 && cycle > 0) {
          // Full cycle completed (forward + backward), generate new realistic targets
          const newTargets = generateNewTargets(data.baseElement, currentX, currentY, currentZ);
          
          // Calculate velocity for smooth transitions (momentum)
          data.velocityX = (newTargets.targetX - currentX) * 0.01;
          data.velocityY = (newTargets.targetY - currentY) * 0.01;
          data.velocityZ = (newTargets.targetZ - currentZ) * 0.01;
          
          // Update current position as new start position
          data.startX = currentX;
          data.startY = currentY;
          data.startZ = currentZ;
          data.startRotateX = currentRX;
          data.startRotateY = currentRY;
          data.startRotateZ = currentRZ;
          data.startScale = currentScale;
          data.startOpacity = opacity;
          
          // Set new targets
          data.targetX = newTargets.targetX;
          data.targetY = newTargets.targetY;
          data.targetZ = newTargets.targetZ;
          data.targetRotateX = newTargets.targetRotateX;
          data.targetRotateY = newTargets.targetRotateY;
          data.targetRotateZ = newTargets.targetRotateZ;
          data.targetScale = newTargets.targetScale;
          data.targetOpacity = newTargets.targetOpacity;
          data.duration = newTargets.duration;
          
          // Reset start time for new cycle
          data.startTime = currentTime;
          
          // Gradually reduce velocity (friction) for more realistic physics
          data.velocityX *= 0.95;
          data.velocityY *= 0.95;
          data.velocityZ *= 0.95;
        }
        
        data.cycleCount = cycle;
        
        if (cycle % 2 === 0) {
          data.direction = 1; // Forward
        } else {
          data.direction = -1; // Backward
        }
      });
      
      animationFrameId = requestAnimationFrame(animateLoop);
    };
    
    // Start animation
    animateLoop();

    // Mouse interaction for parallax effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      elements.forEach((el, index) => {
        if (!el.element) return;
        
        const depth = index % 3; // Different depth layers
        const parallaxX = mouseX * (20 + depth * 10);
        const parallaxY = mouseY * (20 + depth * 10);
        
        animate(
          el.element,
          {
            translateX: `+=${parallaxX}`,
            translateY: `+=${parallaxY}`,
            duration: 1000,
            easing: 'easeOutQuad',
          }
        );
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      elements.forEach((el) => {
        if (el.element && el.element.parentNode) {
          el.element.parentNode.removeChild(el.element);
        }
      });
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

