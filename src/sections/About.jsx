import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Crafting impactful digital experiences that
    blend design, technology, and
    strategy.`;
  const aboutText = `I am a UI/UX designer based in Vadodara, focused on creating practical and well-structured digital experiences. Since 2019, I have been working with startups, businesses, and independent clients to design interfaces that solve real problems and support product growth.

My approach centers on understanding users, organizing information clearly, and shaping interfaces that feel natural to navigate. I work across research, wireframing, prototyping, and visual design to turn early concepts into polished digital products.

Over the years I have contributed to web and mobile applications across different industries, helping teams translate ideas into clear product experiences. I pay close attention to structure, interaction, and visual balance so the final result feels both functional and refined.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Craft in Details, Strength in Structure."}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-4 md:px-10 pb-16 text-xl font-light tracking-wide lg:flex-row-reverse md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/myphoto.webp"
          alt="krutik parmar photo"
          className="rounded-xl w-full lg:w-2/5"
        />
        <AnimatedTextLines text={aboutText} className={"w-full text-lg"} lineGap="pb-5 last:pb-0" />
      </div>
    </section>
  );
};

export default About;
