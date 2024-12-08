import gsap from "gsap";
import { useThree } from "@react-three/fiber";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Mew from "../Models/Mew";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { camera } = useThree();
  // const tl = gsap.timeline();
  console.log(camera.position);

  useEffect(() => {
    //   tl.to(camera.position, {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     duration: 1, // スムーズな移動
    //     immediateRender: false, // スクロール前にリセットしない
    //     scrollTrigger: {
    //       trigger: ".page3", // Replace with your trigger element
    //       start: "top bottom", // When the trigger starts
    //       end: "top top", // When the trigger ends
    //       scrub: true, // Smooth scrubbing
    //       immediateRender: false,
    //       markers: true, // Enable markers for debugging
    //     },
    //   });
  }, []);

  // tl.to(camera.position, {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   duration: 0.5, // Animation duration (for scrub smoothness)
  //   scrollTrigger: {
  //     trigger: ".page2", // Replace with your trigger element
  //     start: "top bottom", // When the trigger starts
  //     end: "top top", // When the trigger ends
  //     scrub: true, // Smooth scrubbing
  //     immediateRender: false,
  //     markers: true, // Enable markers for debugging
  //   },
  // });
  // tl.to(camera.position, {
  //   x: 10,
  //   y: 10,
  //   z: -10,
  //   duration: 0.5, // Animation duration (for scrub smoothness)
  //   scrollTrigger: {
  //     trigger: ".page3", // Replace with your trigger element
  //     start: "top bottom", // When the trigger starts
  //     end: "top top", // When the trigger ends
  //     scrub: true, // Smooth scrubbing
  //     immediateRender: false,
  //     markers: true, // Enable markers for debugging
  //   },
  // });
  // }, []);

  return (
    <>
      <ambientLight intensity={3} />
      <Mew scale={0.7} position={[5, 8, 1]} />
    </>
  );
};

export default Experience;
