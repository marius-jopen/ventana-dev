import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ChipProps = SliceComponentProps<Content.ChipSlice>;

const Chip = ({ slice }: ChipProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-24 text-center bg-white/30">
          {slice.primary.max_number}

          {slice.primary.fade_in_text}
        </div>

        <div className="col-span-24 bg-white/30">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 bg-white/30">
          <PrismicRichText field={slice.primary.headline} />

          <PrismicRichText field={slice.primary.sub_headline} />
        </div>

        <div className="col-start-2 md:col-start-17 col-end-12 md:col-end-23 bg-white/30">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Chip;