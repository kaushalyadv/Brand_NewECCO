import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function My3DModel(props) {
    const modelRef = useRef();
    const { scene } = useGLTF("/models/Headphone.glb");

    // Track scroll speed
    let lastScrollY = 0;
    let scrollVelocity = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            scrollVelocity = Math.abs(currentY - lastScrollY) * 0.002; // adjust 0.002 for sensitivity
            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
        if (modelRef.current) {
            // Base very slow rotation + scroll boost
            modelRef.current.rotation.y += 0.0005 + scrollVelocity;

            // Decay scroll boost smoothly
            scrollVelocity *= 0.9;

            // Responsive scaling
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                modelRef.current.scale.set(0.4, 0.4, 0.4);
            } else if (screenWidth < 1024) {
                modelRef.current.scale.set(0.75, 0.75, 0.75);
            } else {
                modelRef.current.scale.set(1, 1, 1);
            }
        }
    });

    if (!scene) return null;

    return <primitive ref={modelRef} object={scene.clone()} {...props} />;
}
