import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const TwinklingStarfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Deep cosmic blue
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // **Star Particles Setup**
    const starCount = 1000;
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    const opacities = new Float32Array(starCount);
    const brightnessSpeeds = new Float32Array(starCount);
    const colors = new Float32Array(starCount * 3); // RGB for each star

    // **Generate Natural-Looking Stars**
    for (let i = 0; i < starCount; i++) {
      // **Position in a spherical distribution**
      const radius = 100 + Math.random() * 500; // Some stars farther, some closer
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z

      // **Random sizes (smaller stars appear farther)**
      sizes[i] = 0.05 + Math.random() * 0.5;

      // **Slight color variations (white, blue, yellow tints)**
      const colorIntensity = 0.7 + Math.random() * 0.3;
      const colorVariation = Math.random();
      
      if (colorVariation < 0.7) {
        // White stars (slightly cool/warm)
        colors[i * 3] = colorIntensity * (0.9 + Math.random() * 0.1); // R
        colors[i * 3 + 1] = colorIntensity * (0.9 + Math.random() * 0.1); // G
        colors[i * 3 + 2] = colorIntensity * (1.0); // B (slightly bluish)
      } else if (colorVariation < 0.85) {
        // Blue stars
        colors[i * 3] = colorIntensity * 0.5; // R
        colors[i * 3 + 1] = colorIntensity * 0.7; // G
        colors[i * 3 + 2] = colorIntensity * 1.0; // B
      } else {
        // Yellow stars
        colors[i * 3] = colorIntensity * 1.0; // R
        colors[i * 3 + 1] = colorIntensity * 0.9; // G
        colors[i * 3 + 2] = colorIntensity * 0.5; // B
      }

      // **Initial opacity & pulsing speed**
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
      vertexColors: true, // Use per-star colors
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    });

    const starfield = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starfield);

    // **Camera & subtle parallax effect**
    camera.position.z = 50;

    // **Animation Loop**
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // **Update star brightness (smooth pulsing)**
      const opacityAttribute = starsGeometry.attributes.opacity;
      for (let i = 0; i < starCount; i++) {
        opacityAttribute.array[i] = 0.3 + Math.sin(elapsedTime * brightnessSpeeds[i]) * 0.7;
      }
      opacityAttribute.needsUpdate = true;

      // **Slow camera rotation for depth**
      camera.rotation.y = elapsedTime * 0.02;
      camera.rotation.x = elapsedTime * 0.005;

      renderer.render(scene, camera);
    };

    animate();

    // **Handle window resize**
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
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
  );
};

export default TwinklingStarfield;