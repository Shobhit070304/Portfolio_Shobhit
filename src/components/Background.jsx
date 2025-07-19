import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TwinklingStarfield = () => {
  const mountRef = useRef(null);
  const nebulaRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Star Particles Setup
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const opacities = new Float32Array(starCount);
    const brightnessSpeeds = new Float32Array(starCount);
    const colors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const radius = 100 + Math.random() * 500;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      sizes[i] = 0.05 + Math.random() * 0.5;
      const colorIntensity = 0.7 + Math.random() * 0.3;
      const colorVariation = Math.random();
      if (colorVariation < 0.7) {
        colors[i * 3] = colorIntensity * (0.9 + Math.random() * 0.1);
        colors[i * 3 + 1] = colorIntensity * (0.9 + Math.random() * 0.1);
        colors[i * 3 + 2] = colorIntensity * (1.0);
      } else if (colorVariation < 0.85) {
        colors[i * 3] = colorIntensity * 0.5;
        colors[i * 3 + 1] = colorIntensity * 0.7;
        colors[i * 3 + 2] = colorIntensity * 1.0;
      } else {
        colors[i * 3] = colorIntensity * 1.0;
        colors[i * 3 + 1] = colorIntensity * 0.9;
        colors[i * 3 + 2] = colorIntensity * 0.5;
      }
      opacities[i] = 0.2 + Math.random() * 0.8;
      brightnessSpeeds[i] = 0.05 + Math.random() * 0.3;
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    starsGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starsMaterial = new THREE.PointsMaterial({
      size: 1,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const starfield = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starfield);

    // Shooting Stars (Meteors)
    const shootingStars = [];
    const createShootingStar = () => {
      const geometry = new THREE.BufferGeometry();
      const startX = (Math.random() - 0.5) * 400;
      const startY = 150 + Math.random() * 100;
      const startZ = -100 + Math.random() * 200;
      const endX = startX + 100 + Math.random() * 100;
      const endY = startY - 100 - Math.random() * 100;
      const endZ = startZ + 50 + Math.random() * 50;
      const positions = new Float32Array([
        startX, startY, startZ,
        endX, endY, endZ
      ]);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      shootingStars.push({ line, start: { x: startX, y: startY, z: startZ }, end: { x: endX, y: endY, z: endZ }, progress: 0 });
    };

    let shootingStarTimer = 0;

    // Camera & subtle parallax effect
    camera.position.z = 50;
    let targetCameraX = 0;
    let targetCameraY = 0;

    // Mouse parallax
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Nebula/Aurora Animation
    let nebulaCtx = null;
    let nebulaW = window.innerWidth;
    let nebulaH = window.innerHeight;
    let nebulaTime = 0;
    if (nebulaRef.current) {
      nebulaRef.current.width = nebulaW;
      nebulaRef.current.height = nebulaH;
      nebulaCtx = nebulaRef.current.getContext('2d');
    }

    // Animation Loop
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update star brightness (smooth pulsing)
      const opacityAttribute = starsGeometry.attributes.opacity;
      for (let i = 0; i < starCount; i++) {
        opacityAttribute.array[i] = 0.3 + Math.sin(elapsedTime * brightnessSpeeds[i]) * 0.7;
      }
      opacityAttribute.needsUpdate = true;

      // Camera rotation for depth
      camera.rotation.y = elapsedTime * 0.02;
      camera.rotation.x = elapsedTime * 0.005;

      // Mouse parallax (smoothly follow mouse)
      targetCameraX += (mouse.current.x * 10 - targetCameraX) * 0.05;
      targetCameraY += (mouse.current.y * 5 - targetCameraY) * 0.05;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;

      // Shooting stars logic
      shootingStarTimer += Math.random() * 0.01;
      if (shootingStarTimer > 0.98) {
        createShootingStar();
        shootingStarTimer = 0;
      }
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.progress += 0.025;
        if (star.progress > 1) {
          scene.remove(star.line);
          shootingStars.splice(i, 1);
        } else {
          const { start, end } = star;
          const x = start.x + (end.x - start.x) * star.progress;
          const y = start.y + (end.y - start.y) * star.progress;
          const z = start.z + (end.z - start.z) * star.progress;
          star.line.geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
            x, y, z,
            x + 10, y + 2, z + 2
          ]), 3));
        }
      }

      renderer.render(scene, camera);

      // Nebula/Aurora Animation
      if (nebulaCtx) {
        nebulaTime += 0.008;
        nebulaCtx.clearRect(0, 0, nebulaW, nebulaH);
        for (let i = 0; i < 2; i++) {
          const grad = nebulaCtx.createRadialGradient(
            nebulaW * (0.3 + 0.4 * i) + Math.sin(nebulaTime + i) * 100,
            nebulaH * (0.3 + 0.4 * i) + Math.cos(nebulaTime + i) * 80,
            0,
            nebulaW * (0.3 + 0.4 * i),
            nebulaH * (0.3 + 0.4 * i),
            nebulaW * 0.5
          );
          grad.addColorStop(0, i === 0 ? 'rgba(120,180,255,0.09)' : 'rgba(200,120,255,0.06)');
          grad.addColorStop(1, 'rgba(0,0,0,0)');
          nebulaCtx.beginPath();
          nebulaCtx.arc(
            nebulaW * (0.3 + 0.4 * i) + Math.sin(nebulaTime + i) * 100,
            nebulaH * (0.3 + 0.4 * i) + Math.cos(nebulaTime + i) * 80,
            nebulaW * 0.5,
            0,
            2 * Math.PI
          );
          nebulaCtx.closePath();
          nebulaCtx.fillStyle = grad;
          nebulaCtx.fill();
        }
      }
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (nebulaRef.current) {
        nebulaRef.current.width = window.innerWidth;
        nebulaRef.current.height = window.innerHeight;
        nebulaW = window.innerWidth;
        nebulaH = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Soft animated gradient overlay and nebula canvas
  return (
    <>
      <div 
        ref={mountRef} 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      {/* Nebula/Aurora Canvas */}
      <canvas
        ref={nebulaRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      {/* Animated Gradient Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          background: 'linear-gradient(120deg, rgba(60,40,120,0.08) 0%, rgba(30,30,60,0.18) 60%, rgba(0,0,0,0.7) 100%)',
          mixBlendMode: 'screen',
          transition: 'background 1s',
        }}
      />
    </>
  );
};

export default TwinklingStarfield;