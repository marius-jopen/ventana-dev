"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type DarkerProps = SliceComponentProps<Content.DarkerSlice>;

const Darker = ({ slice }: DarkerProps): JSX.Element => {
  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="bg-black text-white w-full overflow-hidden block h-full mt-[-1px]" 
    data-slice="style-black"
    slice-name="darker"
    >
      <div className="overflow-hidden relative grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max pt-8">
        <div className="row-start-1 col-span-12 md:col-span-24">
          <video
            poster={slice.primary.video_poster?.url || ''}

            className="w-full h-auto"
            width="100%"
            height="100%"
            autoPlay
            loop
            playsInline
            muted
            preload="metadata"
          >
            <source src={slice.primary.video_url || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div 
        data-aos="fade-left" 
        className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center md:text-right text-style-3 pt-4 pb-4 2xl:pb-8"
        >
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div 
        data-aos="fade-right" 
        className="row-start-3 col-start-3 col-end-11 md:col-end-20 text-center md:text-left text-style-5 text-text-gray-on-black"
        >
          <PrismicRichText field={slice.primary.sub_headline} />
        </div>

        <div 
        data-aos="fade-up" 
        className="row-start-4 col-start-2 md:col-start-5 col-end-9 md:col-end-12 text-left md:text-right text-style-8 text-text-gray-on-black pt-20 md:pt-32 2xl:pt-44 pb-20 md:pb-20 2xl:pb-24"
        >
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div 
        data-aos="fade-up" 
        className="row-start-5 col-start-4 md:col-start-14 col-end-12 md:col-end-21 text-right md:text-left text-style-8 text-text-gray-on-black pb-20 md:pb-20 2xl:pb-24"
        >
          <PrismicRichText field={slice.primary.text_2} />
        </div>
        
        <div 
        data-aos="fade-up" 
        className="row-start-6 col-start-2 md:col-start-5 col-end-9 md:col-end-12 text-left md:text-right text-style-8 text-text-gray-on-black pb-20 md:pb-28 2xl:pb-36"
        >
          <PrismicRichText field={slice.primary.text_3} />
        </div>

        <div 
        style={{
          position: 'absolute',
          width: '1px',
          height: '100%',
          top: '0',
          bottom: '0',
          left: '50%',
          background: 'linear-gradient(to bottom, black 0%, gray 40%, gray 100%)'
        }} 
        className="hidden md:block absolute w-[1px] row-start-4 row-end-7 bottom-0 top-0 left-[50%]"
        >
        </div>
      </div>
    </section>
  );
};

export default Darker;
