import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  const sectionDivRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        sectionDivRef.current,
        { clipPath: "inset(0% 50% 0% 50%)" },
        { clipPath: "inset(0% 0% 0% 0%)" }
      );

      ScrollTrigger.create({
        trigger: sectionDivRef.current,
        start: "top bottom",
        end: "bottom bottom",
        animation: tl,
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionDivRef}
      className="w-full h-full bg-[url('/sg-photo-section-3.png')] bg-cover bg-center flex flex-col justify-evenly md:grid md:grid-cols-[7fr_3fr] p-8 clip-third-section"
    >
      <div className="flex flex-col items-center md:items-start gap-2 ">
        <h2 className="text-white text-center text-4xl md:text-left md:text-6xl uppercase tracking-tight font-medium">
          Superi<span className="font-playfair italic">o</span>r <br />{" "}
          Craftsmanship
        </h2>
        <p className="max-w-[400px] md:max-w-100% text-white text-center md:text-left">
          Our team of skilled craftsmen has put their heart and soul into
          creating each SG vintage Guitar, ensuring a flawless finish and
          impeccable sound.
        </p>
      </div>

      <div className="flex flex-col items-center md:items-start gap-2 md:justify-end">
        <h3 className="text-white text-4xl text-center  md:text-left md:text-5xl uppercase tracking-tight font-medium">
          High-Quality <br /> Materials{" "}
        </h3>
        <p className="max-w-[400px] text-white text-center md:text-left">
          We use only the finest materials to create our guitars, including
          select tonewoods, high-quality hardware, and top-of-the-line
          electronics.
        </p>
      </div>
    </div>
  );
}
