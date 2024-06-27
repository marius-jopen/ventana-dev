import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type DarkerProps = SliceComponentProps<Content.DarkerSlice>;

const Darker = ({ slice }: DarkerProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />

      <PrismicRichText field={slice.primary.sub_headline} />

      <PrismicRichText field={slice.primary.text_1} />
      
      <PrismicRichText field={slice.primary.text_2} />
      
      <PrismicRichText field={slice.primary.text_3} />

      <PrismicLink field={slice.primary.video}>
        Video
      </PrismicLink>
    </section>
  );
};

export default Darker;
