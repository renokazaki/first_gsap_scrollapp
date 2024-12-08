import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const CanvasContaier = () => {
  return (
    <>
      <Canvas
        camera={{
          position: [0, -5, 5],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
};

export default CanvasContaier;
