"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import Button from "@/app/components/button";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="h-full block bg-white w-full overflow-hidden"
    slice-name="cta"
    data-slice="style-white"
    >
      <div className="border-t grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max pt-12 md:pt-16 2xl:pt-20 pb-24 md:pb-28 2xl:pb-32">
        <div data-aos="fade-up"  className="gap-2 flex-col md:flex-row flex row-start-1 col-start-2 md:col-start-8 col-end-12 md:col-end-18 bg-white/30 text-text-gray-on-black text-style-12 pb-6 md:pb-8 2xl:pb-10">
          {slice.primary.button_link_1 && slice.primary.button_text_1 && (
            <Button filled={true} link={slice.primary.button_link_1} text={slice.primary.button_text_1} />
          )}

          {slice.primary.button_link_2 && slice.primary.button_text_2 && (
            <Button filled={false} link={slice.primary.button_link_2} text={slice.primary.button_text_2} />
          )}
        </div>

        <div data-aos="fade-up" data-aos-delay="250" className="row-start-2 col-start-2 md:col-start-6 col-end-12 md:col-end-20 bg-white/30 text-style-8 text-text-gray-on-black text-center">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
