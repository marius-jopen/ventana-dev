"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import { useEffect, useState } from "react";

export type SpaceProps = SliceComponentProps<Content.SpaceSlice>;

const Space = ({ slice }: SpaceProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const words = slice.primary.headline ? slice.primary.headline.split(", ") : [""];

  useEffect(() => {
    if (words[0] === "") return; // Avoid running the interval if no words are available

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 300); // Change word every 1 second

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24 distance-bottom-6 grid-flow-row auto-rows-max">
        <div className="row-start-1 col-start-2 col-end-24 text-center text-black-on-white distance-top-4 text-black-on-white">
          <div 
          className="text-style-3"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}  {/* Show current word from the headline */}
          </div>
          
          <div className="text-style-5">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center distance-top-3 distance-bottom-3">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-6-1 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div className="row-start-4 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Space;
