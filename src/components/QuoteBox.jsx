import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const quotes = [
  {
    text: (
      <p>
        “ Good design begins <br />
        when a <span className="text-gold">designer listens</span>
        <br />
        to <span className="italic">users carefully</span> before
        <br />
        creating <span className="font-[600]">anything</span>. ” <br />
        <span className="text-base opacity-70">- Don Norman</span>
      </p>
    ),
  },
  {
    text: (
      <p>
        “ Great design turns <br />
        <span className="font-[600]">complex ideas</span>
        <br />
        into <span className="italic">clear experiences</span> <br />
        people can <span className="text-gold">understand</span>. ” <br />
        <span className="text-sm opacity-70">- Dieter Rams</span>
      </p>
    ),
  },
  {
    text: (
      <p>
        “ The best interfaces feel <br />
        like <span className="font-[600]">natural interactions</span>
        <br />
        where every element
        <br />
        has a <span className="text-gold">purpose</span>. ” <br />
        <span className="text-sm opacity-70">- Steve Jobs</span>
      </p>
    ),
  },
  {
    text: (
      <p>
        “ Design is about <br />
        <span className="font-[600]">making things simple</span>
        <br />
        not just making them <br />
        <span className="italic">look beautiful</span>. ” <br />
        <span className="text-sm opacity-70">- John Maeda</span>
      </p>
    ),
  },
  {
    text: (
      <p>
        “ A thoughtful designer <br />
        turns <span className="font-[600]">user problems</span>
        <br />
        into experiences that
        <br />
        feel <span className="text-gold">effortless</span>. ” <br />
        <span className="text-sm opacity-70">- Alan Cooper</span>
      </p>
    ),
  },
];

const QuoteBox = () => {
  const icon = "mdi:arrow-bottom-right";
  const quoteRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  const fadeIn = () => {
    gsap.fromTo(
      quoteRef.current,
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  };

  const fadeOut = (onComplete) => {
    gsap.to(quoteRef.current, {
      autoAlpha: 0,
      y: -10,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete,
    });
  };

  const showNewQuote = () => {
    fadeOut(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * quotes.length);
      } while (nextIndex === currentIndex);

      setCurrentIndex(nextIndex);
      fadeIn();
    });
  };

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        ref={quoteRef}
        className="overflow-hidden font-extralight text-center contact-text-responsive px-4"
      >
        {quotes[currentIndex].text}
      </div>

      <button
        onClick={showNewQuote}
        className="mt-8 px-6 py-2 rounded-full border border-black/20 hover:border-transparent hover:bg-white hover:text-black transition-all duration-500 flex justify-center items-center gap-3 hover:gap-5 cursor-pointer"
      >
        Next Quote <Icon icon={icon} className="-rotate-45" />
      </button>
    </div>
  );
};

export default QuoteBox;
