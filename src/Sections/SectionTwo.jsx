import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const sectionDivRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to("h3", {
        transform: "translateY(0)",
        duration: 1,
      });
      tl.to(
        "p",
        {
          opacity: 1,
          transform: "translateY(0)",
          duration: 1,
        },
        "<"
      );
      tl.to(
        "button",
        {
          opacity: 1,
          transform: "translateY(0)",
          duration: 1,
        },
        "<"
      );

      ScrollTrigger.create({
        trigger: sectionDivRef.current,
        start: "top 10%",
        animation: tl,
      });
    }, sectionDivRef);

    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionDivRef}
      className="w-full h-full flex flex-col justify-between md:p-8"
    >
      <div className="flex justify-between p-8 md:p-0">
        <div className="flex justify-center">
          <div>
            <div className="w-full overflow-hidden">
              <h3 className="text-white uppercase text-3xl md:text-7xl translate-y-full">
                classic
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <div className="w-full overflow-hidden">
              <h3 className="text-white uppercase text-3xl md:text-7xl translate-y-full">
                design
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div />

      <div className="flex items-center mx-auto w-96 md:w-[500px]">
        <div className=" text-white flex flex-col items-center justify-end pb-7 md:pb-0 gap-5">
          <p className="text-center uppercase text-sm font-extralight leading-4 translate-y-full opacity-0">
            The sg vintage guitars timeless design has endured the test of time
            making it a beloved instrument that has captured the hearts of
            guitarists for generations.
          </p>
          <a href="https://www.gibson.com/en-US/Collection/sg">
            <button className="w-40 border px-5 py-2 rounded-md translate-y-full opacity-0 hover:text-black hover:bg-white hover:border-black">
              Explore More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
