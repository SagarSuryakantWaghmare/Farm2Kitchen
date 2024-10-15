// src/components/ThreeBackground.js
import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create rain particles
        const rainCount = 1000; // Number of raindrops
        const rainGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(rainCount * 3); // 3 vertices per raindrop

        for (let i = 0; i < rainCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 200; // x position
            positions[i * 3 + 1] = Math.random() * 200; // y position
            positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // z position
        }

        rainGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const rainMaterial = new THREE.PointsMaterial({
            color: 0x00aaff,
            size: 0.5, // Size of the raindrops
            transparent: true,
            opacity: 0.8,
        });

        const rainParticles = new THREE.Points(rainGeometry, rainMaterial);
        scene.add(rainParticles);

        camera.position.z = 100; // Position camera to see the rain

        const animate = () => {
            requestAnimationFrame(animate);

            // Move raindrops down
            const positions = rainParticles.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] -= 0.5; // Adjust fall speed
                // Reset raindrop position if it goes below a certain level
                if (positions[i] < -100) {
                    positions[i] = Math.random() * 200; // Reset to top
                    positions[i - 1] = (Math.random() - 0.5) * 200; // Randomize x position
                    positions[i - 2] = (Math.random() - 0.5) * 200; // Randomize z position
                }
            }

            rainParticles.geometry.attributes.position.needsUpdate = true; // Flag for update
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);

    return null; // No need to render anything from this component
};

export default ThreeBackground;
