import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type AboutContentProps = SliceComponentProps<Content.AboutContentSlice>;

const AboutContent = ({ slice }: AboutContentProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-12 md:col-end-13 bg-white/30 text-style-7 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="col-start-1 col-end-12 bg-white/30">
          <PrismicImage field={slice.primary.image_1} />
          Image

          <div className="text-text-gray-on-black text-style-10">
            <PrismicRichText field={slice.primary.caption_1} />
          </div>
        </div>

        <div className="col-start-2 md:col-start-15 col-end-13 md:col-end-22 bg-white/30">
          <PrismicImage field={slice.primary.image_2} />
          Image

          <div className="text-text-gray-on-black text-style-10">
            <PrismicRichText field={slice.primary.caption_2} />
          </div>
        </div>


        <div className="col-start-2 col-end-12 md:col-end-20 bg-white/30 text-style-4 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_2} />
        </div>

        <div className="col-start-2 col-end-12 md:col-end-10 bg-white/30">
          <PrismicImage field={slice.primary.image_3} />
          Image

          <div className="text-text-gray-on-black text-style-10">
            <PrismicRichText field={slice.primary.caption_3} />
          </div>
        </div>

        <div className="col-start-2 md:col-start-15 col-end-12 md:col-end-23 bg-white/30 text-style-7 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_3} />
        </div>

        <div className="col-start-1 md:col-start-12 col-end-12 md:col-end-23 bg-white/30">
          <PrismicImage field={slice.primary.image_4} />
          Image

          <div className="text-text-gray-on-black text-style-10">
            <PrismicRichText field={slice.primary.caption_4} />
          </div>
        </div>

        <div className="col-start-2 col-end-13 md:col-end-10 bg-white/30">
          <PrismicImage field={slice.primary.image_5} />
          Image

          <div className="text-text-gray-on-black text-style-10">
            <PrismicRichText field={slice.primary.caption_5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;