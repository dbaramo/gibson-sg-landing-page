import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Instances, Instance } from "@react-three/drei";

const numOfGuitars = 5;
const radius = 0.3;

const guitars = () => {
  const guitarInstances = [];
  const loopNumber = Math.floor(numOfGuitars / 2);
  const angle = (Math.PI * 2) / numOfGuitars;
  let positivePosition = 0;
  let negativePosition = 0;

  for (let i = 0; i <= loopNumber; i++) {
    if (i === 0) {
      const x = Math.cos(0) * radius;
      const y = Math.sin(0) * radius;
      const rotaionAngle = Math.atan2(x, -y);
      guitarInstances.push(
        <Instance key={i} rotation-z={rotaionAngle} position={[x, y, 0]} />
      );
      continue;
    }
    positivePosition += angle;
    negativePosition -= angle;
    const positiveX = Math.cos(positivePosition) * radius;
    const positiveY = Math.sin(positivePosition) * radius;
    const positiveRotationAngle = Math.atan2(positiveX, -positiveY);
    const negativeX = Math.cos(negativePosition) * radius;
    const negativeY = Math.sin(negativePosition) * radius;
    const negativeRotationAngle = Math.atan2(negativeX, -negativeY);
    guitarInstances.push(
      <Instance
        key={positivePosition}
        rotation-z={positiveRotationAngle}
        position={[positiveX, positiveY, 0]}
      />
    );
    if (i === loopNumber && numOfGuitars % 2 === 0) break;
    guitarInstances.push(
      <Instance
        key={negativePosition}
        rotation-z={negativeRotationAngle}
        position={[negativeX, negativeY, 0]}
      />
    );
  }

  return guitarInstances;
};

export default function GroupOfGuitars() {
  const guitarGroupRef = useRef(null);
  const { nodes, materials } = useGLTF("/gibson-sg.glb");
  const { size } = useThree();
  const mobileView = size.width < 768;
  const scale = mobileView ? 2.6 : 4.3;
  const position = mobileView ? [0.0, -1.65, 0] : [0, -2.5, 0];

  useFrame((state, delta) => {
    guitarGroupRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={guitarGroupRef} position={position} scale={scale}>
      <Instances
        range={numOfGuitars}
        geometry={nodes.guitar.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {guitars()}
      </Instances>
    </group>
  );
}

useGLTF.preload("/gibson-sg.glb");
