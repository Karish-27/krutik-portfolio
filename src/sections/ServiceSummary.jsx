import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.to("#title-service-1", { xPercent: 8, scrollTrigger: { target: "#title-service-1", scrub: true } });
      gsap.to("#title-service-2", { xPercent: -12, scrollTrigger: { target: "#title-service-2", scrub: true } });
      gsap.to("#title-service-3", { xPercent: 20, scrollTrigger: { target: "#title-service-3", scrub: true } });
      gsap.to("#title-service-4", { xPercent: -15, scrollTrigger: { target: "#title-service-4", scrub: true } });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to("#title-service-1", { xPercent: 20, scrollTrigger: { target: "#title-service-1", scrub: true } });
      gsap.to("#title-service-2", { xPercent: -30, scrollTrigger: { target: "#title-service-2", scrub: true } });
      gsap.to("#title-service-3", { xPercent: 60, scrollTrigger: { target: "#title-service-3", scrub: true } });
      gsap.to("#title-service-4", { xPercent: -40, scrollTrigger: { target: "#title-service-4", scrub: true } });
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-28 md:mb-42 text-[20px] sm:text-[52px] md:text-[62px] lg:text-[100px]">
      <div id="title-service-1" className="flex items-center justify-center gap-2 sm:gap-3">
        <p className="italic">User Research</p>
        <div className="w-6 sm:w-10 h-0.5 md:h-1 md:w-32 bg-[#FFAC13]" />
        <p>Wireframing</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-2 sm:gap-3 sm:translate-x-3 md:translate-x-16"
      >
        <p className="font-normal">Prototyping</p>
        <div className="w-6 sm:w-10 h-0.5 md:h-1 md:w-32 bg-[#FFAC13]" />
        <p>User Flows</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-2 sm:gap-3 sm:-translate-x-4 md:-translate-x-24"
      >
        <p>Interaction</p>
        <div className="w-6 sm:w-10 h-0.5 md:h-1 md:w-32 bg-[#FFAC13]" />
        <p className="italic">Interfaces</p>
        <div className="w-6 sm:w-10 h-0.5 md:h-1 md:w-32 bg-[#FFAC13]" />
        <p>Usability</p>
      </div>
      <div id="title-service-4" className="flex items-center justify-center gap-2 sm:gap-3 sm:translate-x-3 md:translate-x-20">
        <p>Design Systems</p>
        <div className="w-6 sm:w-10 h-0.5 md:h-1 md:w-32 bg-[#FFAC13]" />
        <p>Products</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
