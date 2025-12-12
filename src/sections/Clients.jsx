import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

gsap.registerPlugin(ScrollTrigger);

export default function Clients() {
  const logosRef = useRef([]);
  const text = `From startups to global teams, I build 
  tools that ship. Solving real problems  
  with precision and clarity.`;

  useEffect(() => {
    gsap.fromTo(
      logosRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#clients-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const clientLogos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ];

  return (
    <section id="clients-section" className="w-full py-20 flex flex-col gap-14">
      <AnimatedHeaderSection
              subTitle={"Your Vision, My Engineering."}
              title={"Clients"}
              text={text}
              textColor={"text-black"}
              withScrollTrigger={true}
            />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {clientLogos.map((src, idx) => (
          <div
            key={idx}
            ref={(el) => (logosRef.current[idx] = el)}
            className="w-full h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-4 border border-gray-100"
          >
            <img src={src} alt="client logo" className="max-h-10 opacity-90" />
          </div>
        ))}
      </div>
    </section>
  );
}
