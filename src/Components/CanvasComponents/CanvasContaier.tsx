import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const CanvasContaier = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [-3.8, 0.8, 4],
        }}
      >
        {/* <OrbitControls /> */}

        <Experience />
      </Canvas>
    </>
  );
};

export default CanvasContaier;
