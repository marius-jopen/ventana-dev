import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />

      <PrismicRichText field={slice.primary.text} />

      <PrismicLink field={slice.primary.video}>
        Video
      </PrismicLink>
    </section>
  );
};

export default Thickness;