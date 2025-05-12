import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useTheme } from './ThemeContext'; // Importando o hook de tema

const CyberBackground = () => {
    const mountRef = useRef(null);
    const { isLightTheme } = useTheme(); // Usando o contexto para acessar o tema

    useEffect(() => {
        const mount = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        const backgroundColor = isLightTheme ? 0xffffff : 0x000;
        renderer.setClearColor(backgroundColor, 1);
        mount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);

        const particleCount = 50000;
        const positions = new Float32Array(particleCount * 3);
        const particles = new THREE.BufferGeometry();

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 100;
        }
        // Criando uma textura circular diretamente com o Canvas API
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 64;  // Tamanho da textura
        canvas.width = size;
        canvas.height = size;

        // Desenhando um círculo na textura
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff';  // Cor do círculo (pode mudar)
        ctx.fill();
        ctx.globalAlpha = 0.7; // Opacidade (transparência)

        // Criando a textura a partir do canvas
        const particleTexture = new THREE.CanvasTexture(canvas);
        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Definindo a cor das partículas com base no tema
        const material = new THREE.PointsMaterial({
            color: 0x6E0184,
            size: 0.2,
            transparent: true,
            opacity: 0.7,
            map: particleTexture, // Aplica a textura circular
            depthWrite: false,
        });

        const pointCloud = new THREE.Points(particles, material);
        scene.add(pointCloud);


        const animate = () => {
            requestAnimationFrame(animate);
            pointCloud.rotation.y += 0.0005;
            pointCloud.rotation.x += 0.0003;
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
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, [isLightTheme]); // A dependência agora é o estado do tema

    return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, width: '100vw', height: '100vh' }} />;
};

export default CyberBackground;
