import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type PowerProps = SliceComponentProps<Content.PowerSlice>;

const Power = ({ slice }: PowerProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <PrismicRichText field={slice.primary.sub_headline} />

        <PrismicRichText field={slice.primary.headline} />

        <PrismicRichText field={slice.primary.text_1} />

        <PrismicRichText field={slice.primary.text_2} />

        {/* <PrismicLink field={slice.primary.video}>
          Video
        </PrismicLink> */}
      </div>
    </section>
  );
};

export default Power;