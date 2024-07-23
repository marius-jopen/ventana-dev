import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type AboutContentProps = SliceComponentProps<Content.AboutContentSlice>;

const AboutContent = ({ slice }: AboutContentProps): JSX.Element => {
  return (
    <section className="w-full overflow-x-hidden">
      <div className="grid grid-cols-12 grid-flow-row auto-rows-max md:grid-cols-24 distance-top-4 distance-bottom-5">
        <div className="row-start-1 col-start-2 col-end-12 md:col-end-13 text-style-7 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="row-start-2 md:row-start-2 col-start-1 md:col-start-2 col-end-12">
          <PrismicImage field={slice.primary.image_1} />
          
          {slice.primary.caption_1 && (
            <div className="text-text-gray-on-white text-style-10">
              <PrismicRichText field={slice.primary.caption_1} />
          </div>
          )}
        </div>

        <div className="row-start-3 md:row-start-1 col-start-2 md:col-start-15 col-end-13 md:col-end-22">
          <PrismicImage field={slice.primary.image_2} />

          {slice.primary.caption_2 && (
            <div className="text-text-gray-on-white text-style-10 pt-2 pl-2">
              <PrismicRichText field={slice.primary.caption_2} />
            </div>
          )}
        </div>

        <div className="row-start-4 md:row-start-3 col-start-2 col-end-12 md:col-end-20 text-style-4 text-text-gray-on-white distance-top-1 distance-bottom-1">
          <PrismicRichText field={slice.primary.text_2} />
        </div>

        <div className="row-start-5 md:row-start-4 col-start-2 col-end-12 md:col-end-10">
          <PrismicImage field={slice.primary.image_3} />

          {slice.primary.caption_3 && (
            <div className="text-text-gray-on-white text-style-10 pt-2 pl-2">
              <PrismicRichText field={slice.primary.caption_3} />
            </div>
          )}
        </div>

        <div className="row-start-6 md:row-start-4 col-start-2 md:col-start-15 col-end-12 md:col-end-23 text-style-7 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_3} />
        </div>

        <div className="row-start-7 md:row-start-5 col-start-1 md:col-start-12 col-end-12 md:col-end-23">
          <PrismicImage field={slice.primary.image_4} />

          {slice.primary.caption_4 && (
            <div className="text-text-gray-on-white text-style-10 pt-2 pl-2">
              <PrismicRichText field={slice.primary.caption_4} />
            </div>
          )}
        </div>

        <div className="row-start-8 md:row-start-6 col-start-2 col-end-13 md:col-end-10">
          <PrismicImage field={slice.primary.image_5} />

          {slice.primary.caption_5 && (
            <div className="text-text-gray-on-white text-style-10 pt-2 pl-2">
              <PrismicRichText field={slice.primary.caption_5} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;