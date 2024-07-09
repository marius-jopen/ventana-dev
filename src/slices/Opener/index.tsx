"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  // Ensure that words is never null or undefined
  const words = slice.primary.headline ? slice.primary.headline.split(", ") : [""];

  useEffect(() => {
    if (words[0] === "") return;  // If there are no words, do not run the interval

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 300); // Change word every 1 second

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section className="text-white">
      <div className="relative h-[60vw]">
        <div className="flex flex-col justify-center h-full text-center">
          <div 
          className="text-style-13"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}
          </div>

          <div className="text-style-5">
            <PrismicRichText field={slice.primary.subheadline} />
          </div>
        </div>

        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <video className="object-cover h-full" width="100%" height="100%" loop playsInline autoPlay muted preload="none">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Opener;
