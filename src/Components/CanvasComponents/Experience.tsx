import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

import Mew from "../Models/Mew";
import { useEffect } from "react";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { camera, scene } = useThree();
  console.log(camera.position);
  // console.log(scene.position);

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(scene.rotation, {
      x: 0,
      y: 0.8,
      z: -0.3,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page4", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        // markers: true, // Enable markers for debugging
      },
    });
    tl.to(camera.position, {
      x: -2,
      y: 0.8,
      z: 2,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page4", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        // markers: true, // Enable markers for debugging
      },
    });
  }, []);

  return (
    <>
      <ambientLight intensity={3} />
      <Mew scale={0.4} />
    </>
  );
};

export default Experience;
