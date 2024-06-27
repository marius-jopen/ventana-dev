import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type SpaceProps = SliceComponentProps<Content.SpaceSlice>;

const Space = ({ slice }: SpaceProps): JSX.Element => {
  return (
    <section>
      {slice.primary.headline}

      <PrismicRichText field={slice.primary.sub_headline} />

      <PrismicLink field={slice.primary.video}>
        Video
      </PrismicLink>

      <PrismicRichText field={slice.primary.text_1} />
      
      <PrismicRichText field={slice.primary.text_2} />
    </section>
  );
};

export default Space;