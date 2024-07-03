import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ChipProps = SliceComponentProps<Content.ChipSlice>;

const Chip = ({ slice }: ChipProps): JSX.Element => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-12 md:grid-cols-24 distance-bottom-5">
        <div className="col-start-2 col-end-24 text-center">
          <div className="text-style-14">
            {slice.primary.max_number}
          </div>

          <div className="text-style-5">
            {slice.primary.fade_in_text}
          </div>
        </div>

        <div className="col-span-24">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11">
          <div className="text-style-4">
            <PrismicRichText field={slice.primary.headline} />
          </div>

          <div className="text-style-7 distance-top-1 text-text-gray-on-black">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Chip;