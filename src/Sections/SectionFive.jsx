import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function SectionFive() {
  const sectionDivRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".section-5-h2", {
        transform: "translateY(0)",
        duration: 1.2,
        stagger: 0.2,
      }).to(
        ".section-5-p-div",
        {
          opacity: 1,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.6"
      );

      ScrollTrigger.create({
        trigger: sectionDivRef.current,
        start: "top 60%",
        animation: tl,
      });
    });
    return () => ctx.revert();
  }, [sectionDivRef]);
  return (
    <div
      ref={sectionDivRef}
      className="w-full h-full flex flex-col justify-between  p-8"
    >
      <div className="flex justify-center">
        <div>
          <div className="overflow-hidden">
            <h2 className="section-5-h2 text-white text-center uppercase tracking-tight translate-y-full text-2xl leading-6 md:text-5xl lg:text-7xl lg:leading-[60px]">
              A Vintage instrument that
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="section-5-h2 text-white text-center uppercase tracking-tight translate-y-full text-2xl leading-6 md:text-5xl lg:text-7xl lg:leading-[60px]">
              captures the essence{" "}
              <span className="font-playfair italic lowercase">of</span>
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="section-5-h2 text-white text-center uppercase tracking-tight translate-y-full text-2xl leading-6 md:text-5xl lg:text-7xl lg:leading-[60px">
              R<span className="font-playfair italic">o</span>ck and R
              <span className="font-playfair italic">o</span>ll in its
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="section-5-h2 text-white text-center uppercase tracking-tight translate-y-full text-2xl leading-6 md:text-5xl lg:text-7xl lg:leading-[60px]">
              purest f<span className="font-playfair italic">o</span>rm
            </h2>
          </div>
        </div>
      </div>
      <div className=" section-5-p-div flex items-center opacity-0">
        <p className="w-72 md:w-[300px] text-white text-sm lg:text-base font-light leading-4 md:leading-5">
          The SG Vintage Guitar is not just a beautiful instrument, it is also
          built to last. Crafted from high quality materials and expertly
          constructed this guitar is designed to withstand the rigors of even
          the most intense performances.
        </p>
      </div>
      <div className="md:hidden h-[40%]"></div>
      <div className=" section-5-p-div flex justify-end items-center opacity-0">
        <p className="w-72 md:w-[300px] text-white text-sm lg:text-base font-light leading-4 md:leading-5">
          Whether you are playing to a packed arena or practicing in your
          bedroom, you can rely on the SG Vintage Guitar to deliver flawless
          sound and unmatched durability.
        </p>
      </div>
    </div>
  );
}
