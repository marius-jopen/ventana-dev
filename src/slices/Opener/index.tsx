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
    }, 700);

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section 
    className="block text-white h-full overflow-hidden" 
    data-slice="style-black" 
    slice-name="opener"
    >
      <div className="relative h-[80vw] md:h-[57vw] 2xl:h-[50vw]">
        <div className="flex flex-col justify-center h-full text-center">
          <div 
          className="text-style-13 -mt-[7vw]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}
          </div>

          <div className="text-style-5 mt-[5px] md:mt-[-50px] 2xl:mt-[-10px]">
            <PrismicRichText field={slice.primary.subheadline} />
          </div>
        </div>

        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <div className="h-[80vw] md:h-[57vw] 2xl:h-[50vw] bg-black scale-125	md-scale-0 2xl:scale-[110%]">
              <PrismicImage 
                className="absolute h-[80vw] md:h-[57vw] 2xl:h-[50vw] object-contain w-auto left-[-15.5vw] 2xl:left-[-9vw] animate-updown" 
                field={slice.primary.image_1} 
              />
              <PrismicImage 
                className="absolute h-[80vw] md:h-[57vw] 2xl:h-[50vw] object-contain w-auto right-[-15.5vw] 2xl:right-[-9vw] animate-downup" 
                field={slice.primary.image_2} 
              />          
            </div>
        </div>
      </div>
    </section>
  );
};

export default Opener;
