import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClientsBento = () => {
  const logoRef = useRef([]);

  useEffect(() => {
    const elements = logoRef.current;

    gsap.from(elements, {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.15,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 80%",
      },
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !logoRef.current.includes(el)) logoRef.current.push(el);
  };

  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Trusted Clients</h2>
        <p className="text-lg text-gray-600 mt-2">
          Brands that believe in what we build
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I’ve had the opportunity to collaborate with teams across startups,
          agencies, and enterprise environments—helping them ship reliable,
          scalable, and high-performance digital products.
        </p>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-6 grid-rows-3 gap-4">
          
          {/* Large block 1 (2x2) */}
          <div className="bg-white col-span-3 row-span-2 rounded-xl shadow-sm flex items-center justify-center p-6">
            <img
              ref={addToRefs}
              src="/logos/logo1.svg"
              className="h-14 w-auto"
              alt="client"
            />
          </div>

          {/* Tall block (1x2) */}
          <div className="bg-white col-span-2 row-span-3 rounded-xl shadow-sm flex items-center justify-center p-6">
            <img
              ref={addToRefs}
              src="/logos/logo2.svg"
              className="h-14 w-auto"
              alt="client"
            />
          </div>

          {/* Small block */}
          <div className="bg-white col-span-1 row-span-1 rounded-xl shadow-sm flex items-center justify-center p-6">
            <img
              ref={addToRefs}
              src="/logos/logo3.svg"
              className="h-10 w-auto"
              alt="client"
            />
          </div>

          {/* Wide block */}
          <div className="bg-white col-span-3 row-span-1 rounded-xl shadow-sm flex items-center justify-center p-6">
            <img
              ref={addToRefs}
              src="/logos/logo4.svg"
              className="h-12 w-auto"
              alt="client"
            />
          </div>

          {/* Small block */}
          <div className="bg-white col-span-1 row-span-1 rounded-xl shadow-sm flex items-center justify-center p-6">
            <img
              ref={addToRefs}
              src="/logos/logo5.svg"
              className="h-10 w-auto"
              alt="client"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientsBento;
