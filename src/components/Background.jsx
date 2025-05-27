import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const WhiteCubesBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111118);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0.5, 0.5, 1);
    scene.add(directionalLight);

    // Cubes - fewer and whiter
    const cubes = [];
    const cubeCount = 20; // Reduced count

    for (let i = 0; i < cubeCount; i++) {
      const size = 0.8 + Math.random() * 1.2;
      const geometry = new THREE.BoxGeometry(size, size, size);
      
      // Whiter shades (0.7-0.9 gray values)
      const whiteValue = 0.7 + Math.random() * 0.2;
      const material = new THREE.MeshLambertMaterial({ 
        color: new THREE.Color(whiteValue, whiteValue, whiteValue),
        transparent: true,
        opacity: 0.9
      });
      
      const cube = new THREE.Mesh(geometry, material);
      
      // Full screen coverage (-40 to 40 x position)
      cube.position.x = (Math.random() - 0.5) * 80;
      cube.position.y = (Math.random() - 0.5) * 30;
      cube.position.z = Math.random() * -100;
      
      cube.rotation.x = Math.random() * Math.PI;
      cube.rotation.y = Math.random() * Math.PI;
      
      scene.add(cube);
      cubes.push({
        mesh: cube,
        speed: 0.008 + Math.random() * 0.015, // Slow speed
      });
    }

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      cubes.forEach(cube => {
        cube.mesh.position.y += cube.speed;
        cube.mesh.rotation.x += 0.0015;
        cube.mesh.rotation.y += 0.0015;
        
        // Reset with full horizontal coverage
        if (cube.mesh.position.y > 15) {
          cube.mesh.position.y = -15;
          cube.mesh.position.x = (Math.random() - 0.5) * 80;
          cube.mesh.position.z = Math.random() * -100;
        }
      });
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    zIndex: -1, 
    width: '100%', 
    height: '100%' 
  }} />;
};

export default WhiteCubesBackground;