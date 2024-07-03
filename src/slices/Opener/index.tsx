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
    <section className="bg-black text-white">
      <div className="grid grid-cols-12 md:grid-cols-24 h-[80vw]">
        <div className="col-span-12 md:col-span-24">
          Video
        </div>

        <div className="col-start-2 col-end-12 md:col-end-24 text-center">
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
      </div>
    </section>
  );
};

export default Opener;
