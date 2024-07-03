import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

const Colors = ({ slice }: ColorsProps): JSX.Element => {
  return (
    <section className="bg-offWhite">
      <div className="grid grid-cols-12 md:grid-cols-24 distance-bottom-5">
        <div className="col-span-24 distance-bottom-4">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Colors;