import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24 distance-top-3 distance-bottom-3">
        <div className="col-start-3 md:col-start-11 col-end-11 md:col-end-13 bg-white/30 text-text-gray-on-black text-style-12">
          <PrismicLink field={slice.primary.button_link_1}>
            {slice.primary.button_text_1}
          </PrismicLink>
        </div>

        <div className="col-start-3 md:col-start-13 col-end-11 md:col-end-15 bg-white/30 text-style-12 text-text-gray-on-black">
          <PrismicLink field={slice.primary.button_link_2}>
            {slice.primary.button_text_2}
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-6 col-end-12 md:col-end-20 bg-white/30 text-style-8 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default Cta;