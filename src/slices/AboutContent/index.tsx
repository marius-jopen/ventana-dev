import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type AboutContentProps = SliceComponentProps<Content.AboutContentSlice>;

const AboutContent = ({ slice }: AboutContentProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-start-2 col-end-13 bg-white/30">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="col-start-2 col-end-12 bg-white/30">
          <PrismicImage field={slice.primary.image_1} />
          Image

          <PrismicRichText field={slice.primary.caption_1} />
        </div>

        <div className="col-start-15 col-end-22 bg-white/30">
          <PrismicImage field={slice.primary.image_2} />
          Image

          <PrismicRichText field={slice.primary.caption_2} />
        </div>


        <div className="col-start-2 col-end-20 bg-white/30">
          <PrismicRichText field={slice.primary.text_2} />
        </div>

        <div className="col-start-2 col-end-10 bg-white/30">
          <PrismicImage field={slice.primary.image_3} />
          Image

          <PrismicRichText field={slice.primary.caption_3} />
        </div>

        <div className="col-start-15 col-end-23 bg-white/30">
          <PrismicRichText field={slice.primary.text_3} />
        </div>

        <div className="col-start-12 col-end-23 bg-white/30">
          <PrismicImage field={slice.primary.image_4} />
          Image

          <PrismicRichText field={slice.primary.caption_4} />
        </div>

        <div className="col-start-2 col-end-10 bg-white/30">
          <PrismicImage field={slice.primary.image_5} />
          Image

          <PrismicRichText field={slice.primary.caption_5} />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;