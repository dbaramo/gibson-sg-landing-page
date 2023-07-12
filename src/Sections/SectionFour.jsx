import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function SectionFour() {
  const sectionDivRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".section-4-h2", {
        transform: "translateY(0)",
        duration: 1.2,
        stagger: 0.2,
      });
      tl.to(
        ".image-grid",
        {
          opacity: 1,
          transform: "translateX(0)",
          duration: 1.2,
        },
        "<"
      );
      tl.to(
        "p",
        {
          opacity: 1,
          duration: 1.2,
        },
        "<"
      );

      ScrollTrigger.create({
        trigger: sectionDivRef.current,
        start: "top 60%",
        animation: tl,
        // markers: true
      });
    });
    return () => ctx.revert();
  }, [sectionDivRef]);
  return (
    <div
      ref={sectionDivRef}
      className="w-full h-full grid grid-rows-[4fr_6fr] p-8"
    >
      <div className="flex flex-col gap-5 md:grid md:grid-cols-[7fr_5fr]">
        <div>
          <div className="overflow-hidden">
            <h2 className="section-4-h2 text-white text-4xl md:text-7xl uppercase tracking-tight font-medium translate-y-full">
              Cust<span className="font-playfair italic">o</span>mizable
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="section-4-h2 text-white text-4xl md:text-7xl uppercase tracking-tight font-medium translate-y-full">
              <span className="font-playfair italic">O</span>ptions
            </h2>
          </div>
        </div>
        <p className="text-white opacity-0">
          We offer a range of custom options for the SG Vintage Guitar,
          including different finishes, hardware, and pickup configurations, so
          you can create a guitar that is truly unique to you.
        </p>
      </div>
      <div className="image-grid overflow-hidden translate-x-[5%] opacity-0 text-white grid grid-cols-[4fr_3fr_2fr_3fr] gap-4 items-start">
        <img
          className="object-contain object-top max-h-[80%] rounded-md"
          src="sg-red-gold.jpeg"
        />
        <img
          className="object-contain object-top max-h-[100%] rounded-md"
          src="sg-building.png"
        />
        <img
          className="object-contain object-top max-h-[50%] rounded-md"
          src="sg-neck.jpeg"
        />
        <img
          className="object-contain object-top max-h-[90%] rounded-md"
          src="sg-drawing.jpg"
        />
      </div>
    </div>
  );
}
