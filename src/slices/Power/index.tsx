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
    className="h-full block w-full overflow-x-hidden bg-white" 
    data-slice="style-white"
    slice-name="power"
    >
      <div className="grid grid-cols-12 grid-flow-row auto-rows-max md:grid-cols-24 distance-bottom-5">
        <div className="row-start-1 col-span-24">
          <video className="w-full h-auto" width="100%" height="100%" autoPlay playsInline muted preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/986526973/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f48471d39de109f73177811255435ae830ead1d533e12b7a7612f6abea6255af" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div data-aos="zoom-out" className="row-start-2 col-start-2 col-end-12 md:col-end-24 text-center distance-top-4">
          <div className="text-style-5 text-text-gray-on-black">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
          
          <div data-aos-delay="500" data-aos="zoom-out" className="text-style-3  distance-top-05 text-black-on-white distance-bottom-4 text-black-on-white">
            <PrismicRichText field={slice.primary.headline} />
          </div>
        </div>
        
        <div data-aos-delay="750" data-aos="fade-up" className="row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div data-aos-delay="1000" data-aos="fade-up" className="mt-[12px] row-start-3 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Power;