import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type DarkerProps = SliceComponentProps<Content.DarkerSlice>;

const Darker = ({ slice }: DarkerProps): JSX.Element => {
  return (
    <section className="bg-black text-white">
      <div className="relative grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max">
        <div className="row-start-1 col-span-12 md:col-span-24">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-5 col-end-12 md:col-end-23 text-right text-style-3">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="row-start-3 col-start-2 col-end-12 md:col-end-17 text-right text-style-5 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.sub_headline} />
        </div>

        <div className="row-start-4 col-start-2 md:col-start-5 col-end-12 text-center md:text-right text-style-8 text-text-gray-on-black distance-top-5 distance-bottom-4">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div className="row-start-5 col-start-2 md:col-start-14 col-end-12 md:col-end-21 text-center md:text-left text-style-8 text-text-gray-on-black distance-bottom-4">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
        
        <div className="row-start-6 col-start-2 md:col-start-5 col-end-12 text-center md:text-right text-style-8 text-text-gray-on-black distance-bottom-5">
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
        className="absolute w-[1px] row-start-4 row-end-7 bottom-0 top-0 left-[50%]"></div>
      </div>
    </section>
  );
};

export default Darker;
