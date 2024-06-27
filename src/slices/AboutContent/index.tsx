import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type AboutContentProps = SliceComponentProps<Content.AboutContentSlice>;

const AboutContent = ({ slice }: AboutContentProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <PrismicRichText field={slice.primary.text_1} />

        <PrismicRichText field={slice.primary.text_2} />

        <PrismicRichText field={slice.primary.text_3} />

        <PrismicImage field={slice.primary.image_1} />

        <PrismicRichText field={slice.primary.caption_1} />

        <PrismicImage field={slice.primary.image_2} />

        <PrismicRichText field={slice.primary.caption_2} />

        <PrismicImage field={slice.primary.image_3} />

        <PrismicRichText field={slice.primary.caption_3} />

        <PrismicImage field={slice.primary.image_4} />

        <PrismicRichText field={slice.primary.caption_4} />

        <PrismicImage field={slice.primary.image_5} />

        <PrismicRichText field={slice.primary.caption_5} />
      </div>
    </section>
  );
};

export default AboutContent;