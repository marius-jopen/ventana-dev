"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";
import AOS from 'aos';
import { useEffect, useState } from "react";
import 'aos/dist/aos.css'; 

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="block h-full bg-black text-white w-full overflow-x-hidden" 
    data-slice="style-black"
    slice-name="mounting"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="row-start-1 col-span-24 distance-bottom-4">
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

        <div data-aos="fade-up" className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div data-aos="fade-up" className="mt-[-50px] row-start-3 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Mounting;