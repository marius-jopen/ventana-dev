import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
// import Button from "@/app/components/button";
import CommonButton from "@/app/components/CommonButton";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-top-3 distance-bottom-3 border-t-2 border-b-2 xl:gap-4 md:gap-4">
      <div className="md:gap-4 flex flex-col md:flex-row justify-center items-center row-start-1 col-start-2 md:col-start-9 col-end-12 md:col-end-17 bg-white/30 distance-bottom-1 text-text-gray-on-black text-style-12">
        <CommonButton 
          link={slice.primary.button_link_1} 
          label={slice.primary.button_text_1} 
          filled 
          width="w-full" 
        />
        <CommonButton 
          link={slice.primary.button_link_2} 
          label={slice.primary.button_text_2} 
          filled={false} 
          width="w-full" 
        />
      </div>

        <div className="row-start-2 col-start-2 md:col-start-6 col-end-12 md:col-end-20 bg-white/30 text-style-8 text-text-gray-on-black text-center">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default Cta;