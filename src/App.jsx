import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View, useProgress } from "@react-three/drei";

import Guitar from "./Models/Guitar";
import GroupOfGuitars from "./Models/GroupOfGuitars";

import Loading from "./Loading";

import SectionOne from "./Sections/SectionOne";
import SectionTwo from "./Sections/SectionTwo";
import SectionThree from "./Sections/SectionThree";
import SectionFour from "./Sections/SectionFour";
import SectionFive from "./Sections/SectionFive";

const touchDevice = "ontouchstart" in document.documentElement;

function App() {
  const container = useRef();
  const trackingOne = useRef();
  const trackingTwo = useRef();

  const { progress } = useProgress();

  return (
    <main
      className={`overflow-hidden ${touchDevice ? `pb-[20%]` : ""}`}
      ref={container}
    >
      {progress < 100 ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full h-full">
            <div
              ref={trackingOne}
              id="contain-canvas-one"
              className="-z-10 absolute w-screen h-[200svh] "
            />
            <section className="w-screen h-[100svh] flex bg-black justify-center xl:container mx-auto">
              <SectionOne />
            </section>
            <section className="bg-black w-screen h-screen xl:container mx-auto">
              <SectionTwo />
            </section>
          </div>
          <section
            r
            className="bg-black w-screen h-[100svh] xl:container mx-auto"
          >
            <SectionThree />
          </section>
          <section className="bg-black w-screen h-[100svh] xl:container mx-auto">
            <SectionFour />
          </section>
          <div className="w-full h-full">
            <div
              ref={trackingTwo}
              id="contain-canvas-two"
              className="absolute w-screen h-[100svh]"
            />
            <section className="bg-black w-screen h-[100svh] xl:container mx-auto">
              <SectionFive />
            </section>
          </div>

          <Canvas eventSource={container} className="canvas">
            <View track={trackingOne}>
              <ambientLight intensity={0.5} />
              <pointLight position={[20, 30, 10]} intensity={1} />
              <Guitar canvasDiv={trackingOne} />
            </View>
            <View track={trackingTwo}>
              <ambientLight intensity={0.5} />
              <pointLight position={[20, 30, 10]} intensity={1} />
              <GroupOfGuitars />
            </View>
          </Canvas>
        </div>
      )}
    </main>
  );
}

export default App;
