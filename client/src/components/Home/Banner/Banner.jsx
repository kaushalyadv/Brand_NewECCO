import "./Banner.scss";
import { Canvas } from "@react-three/fiber";
import My3DModel from "../../My3DModel";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function Banner() {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Futuristic</h1>
          <p>
            Welcome to TechSphere, the ultimate destination for cutting-edge
            tech gadgets. Step into a world where innovation knows no bounds and
            the possibilities are endless.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>

        {/* 3D Model Section */}
        <div className="banner-3d" style={{ width: "500px", height: "500px" }}>
          <Canvas camera={{ position: [0, 0, 450] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <My3DModel scale={0.5} />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
