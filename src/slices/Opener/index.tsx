"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";
import { useEffect, useState } from "react";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const words = slice.primary.headline ? slice.primary.headline.split(", ") : [""];

  useEffect(() => {
    if (words[0] === "") return;

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section 
    className="block text-white h-full" 
    data-slice="style-black" 
    slice-name="opener"
    >
      <div className="relative h-[60vw]">
        <div className="flex flex-col justify-center h-full text-center">
          <div 
          className="text-style-13 -mt-[5vw]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}
          </div>

          <div className="text-style-5 -mt-[2vw]">
            <PrismicRichText field={slice.primary.subheadline} />
          </div>
        </div>

        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <div className="h-[60vw] bg-black">
            <PrismicImage className="absolute h-[60vw] w-auto left-[-15.5vw] translate-y-[-3vw]" field={slice.primary.image_1} />
            <PrismicImage className="absolute h-[60vw] w-auto right-[-15.5vw] translate-y-[3vw]" field={slice.primary.image_2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opener;
