"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type DoubleTextProps = SliceComponentProps<Content.DoubleTextSlice>;

const DoubleText = ({ slice }: DoubleTextProps): JSX.Element => {

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="h-full block bg-white"
    slice-name="double-text"
    data-slice="style-white"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-top-3 distance-bottom-5">
        <div data-aos="fade-up" className="row-start-1 col-start-2 col-end-12 bg-white/30 text-style-11 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div data-aos="fade-up" className="mt-1 row-start-1 col-start-2 md:col-start-13 col-end-12 md:col-end-24 bg-white/30 text-style-6 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default DoubleText;