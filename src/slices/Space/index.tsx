"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type SpaceProps = SliceComponentProps<Content.SpaceSlice>;

const Space = ({ slice }: SpaceProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const words = slice.primary.headline ? slice.primary.headline.split(", ") : [""];

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });

    if (words[0] === "") return; // Avoid running the interval if no words are available

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 700); // Change word every 1 second

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section 
    className="h-full block w-full overflow-hidden bg-white" 
    data-slice="style-white"
    slice-name="space"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max">
        <div 
        data-aos="zoom-out" 
        className="row-start-1 col-start-2 col-end-24 text-center text-black-on-white pt-12 md:pt-20 2xl:pt-24 text-black-on-white">

          <div 
          className="text-style-3"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}  {/* Show current word from the headline */}
          </div>
          
          <div className="text-style-5 pt-3 md:pt-6 2xl:pt-10">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center pt-12 md:pt-20 2xl:pt-24 pb-8 md:pb-16 2xl:pb-24">
          <video
            poster={slice.primary.video_poster?.url || ''}

            className="w-full h-auto"
            width="100%"
            height="100%"
            autoPlay
            playsInline
            muted
            loop
            preload="metadata"
          >
            <source src={slice.primary.video_url || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div 
        data-aos="fade-up" 
        className="pb-12 md:pb-0 row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-12 text-style-6-1 text-text-gray-on-white" 
        data-slice="style-white"
        >
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div 
        data-aos="fade-up" 
        className="row-start-4 col-start-2 md:col-start-17 col-end-9 md:col-end-23 text-style-8 text-text-gray-on-white line-box border-line-gray-on-white pb-16 md:pb-24 2xl:pb-28"
        >
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Space;
