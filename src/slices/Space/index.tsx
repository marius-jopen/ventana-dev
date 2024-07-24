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
    }, 300); // Change word every 1 second

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  return (
    <section 
    className="hj-full block w-full overflow-x-hidden" 
    data-slice="style-white"
    slice-name="space"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 distance-bottom-6 grid-flow-row auto-rows-max">
        <div className="row-start-1 col-start-2 col-end-24 text-center text-black-on-white distance-top-3 text-black-on-white">
          <div 
          data-aos="zoom-out"
          className="text-style-3"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          >
            {words[currentWordIndex]}  {/* Show current word from the headline */}
          </div>
          
          <div data-aos="zoom-out" className="text-style-5 distance-top-05">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center distance-top-3 distance-bottom-3">
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

        <div data-aos="fade-up" className="row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-12 text-style-6-1 text-text-gray-on-white" data-slice="style-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div data-aos="fade-up" className="mt-[-50px] row-start-4 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Space;
