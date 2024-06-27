import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ChipProps = SliceComponentProps<Content.ChipSlice>;

const Chip = ({ slice }: ChipProps): JSX.Element => {
  return (
    <section>
      {slice.primary.max_number}

      {slice.primary.fade_in_text}

      <PrismicRichText field={slice.primary.headline} />

      <PrismicRichText field={slice.primary.sub_headline} />

      <PrismicRichText field={slice.primary.text} />

      <PrismicLink field={slice.primary.video}>
        Video
      </PrismicLink>
    </section>
  );
};

export default Chip;