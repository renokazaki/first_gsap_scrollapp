import * as THREE from "three";
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import gsap from "gsap";
import { useControls } from "leva";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    _rootJoint: THREE.Bone;
  };
  materials: {
    blinn1: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Take 001";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

const Mew: React.FC<JSX.IntrinsicElements["group"]> = (props) => {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials, animations } = useGLTF("glb/mew.glb") as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  const tl = gsap.timeline();

  // const { rotation, position } = useControls({
  //   rotation: {
  //     value: { x: 0, y: 0, z: 0 },
  //   },
  //   position: {
  //     value: { x: 0, y: 0, z: 0 },
  //   },
  // });

  // // `useFrame` で毎フレームごとに位置と回転を更新
  // useFrame(() => {
  //   if (group.current) {
  //     group.current.position.set(position.x, position.y, position.z);
  //     group.current.rotation.set(rotation.x, rotation.y, rotation.z);
  //   }
  // });

  useEffect(() => {
    tl.to(group.current.position, {
      x: 1,
      y: -2,
      z: 2,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page2", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        markers: true, // Enable markers for debugging
      },
    });

    tl.to(group.current.rotation, {
      x: -1,
      y: -2,
      z: -2,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page2", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        markers: true, // Enable markers for debugging
      },
    });
    tl.to(group.current.rotation, {
      x: -1,
      y: -2,
      z: -2,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page2", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        markers: true, // Enable markers for debugging
      },
    });
    tl.to(group.current.rotation, {
      x: -1,
      y: -3,
      z: 5,
      duration: 1, // スムーズな移動
      immediateRender: false, // スクロール前にリセットしない
      scrollTrigger: {
        trigger: ".page3", // Replace with your trigger element
        start: "top bottom", // When the trigger starts
        end: "top top", // When the trigger ends
        scrub: true, // Smooth scrubbing
        immediateRender: false,
        markers: true, // Enable markers for debugging
      },
    });
  }, []);
  // tl.to(group.current.position, {
  //   x: 0,
  //   y: 0,
  //   z: 0,
  //   scrollTrigger: {
  //     trigger: ".page3", // Replace with your trigger element
  //     start: "top bottom", // When the trigger starts
  //     end: "top top", // When the trigger ends
  //     scrub: true, // Smooth scrubbing
  //     immediateRender: false,
  //     markers: true, // Enable markers for debugging
  //   },
  // });

  // useEffect(() => {
  //   const action = actions["Take 001"];

  //   if (action) {
  //     action.timeScale = 0.3; // アニメーション速度を半分にする
  //     action.play();
  //   }
  // }, [actions]);

  return (
    <group ref={group} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="75afd621d7d146fda0d38fe0b2c7af9dfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.blinn1}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Mew" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("glb/mew.glb");
export default Mew;
