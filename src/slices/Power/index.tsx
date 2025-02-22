"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import AOS from 'aos';
import { useEffect, useState } from "react";
import 'aos/dist/aos.css'; 

export type PowerProps = SliceComponentProps<Content.PowerSlice>;

const Power = ({ slice }: PowerProps): JSX.Element => {
  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="h-full block w-full overflow-hidden bg-white" 
    data-slice="style-white"
    slice-name="power"
    >
      <div className="grid grid-cols-12 grid-flow-row auto-rows-max md:grid-cols-24 pb-20 md:pb-24 2xl:pb-32">
        <div className="row-start-1 col-span-24">
          <video className="mt-[-1px] w-full h-auto" width="100%" height="100%" autoPlay playsInline muted preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/986526973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f48471d39de109f73177811255435ae830ead1d533e12b7a7612f6abea6255af" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div data-aos="zoom-out" className="row-start-2 col-start-2 col-end-12 md:col-end-24 text-center pt-12 md:pt-28 2xl:pt-24">
          <div className="text-style-5 text-text-gray-on-black">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
          
          <div data-aos="zoom-out" className="text-style-3 text-black-on-white text-black-on-white pt-2 md:pt-4 2xl:pt-6 pb-12 md:pb-20 2xl:pb-24">
            <PrismicRichText field={slice.primary.headline} />
          </div>
        </div>
        
        <div data-aos="fade-up" className="pb-12 md:pb-0 row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div data-aos="fade-up" className="mt-8 md:mt-[12px] row-start-4 md:row-start-3 col-start-5 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Power;