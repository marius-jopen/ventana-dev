import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
// import Button from "@/app/components/button";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <section className="h-full bnlock bg-white w-full overflow-x-hidden">
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-top-3 distance-bottom-3">
        <div className="md:gap-1 flex-col md:flex-row flex row-start-1 col-start-2 md:col-start-9 col-end-12 md:col-end-17 bg-white/30 distance-bottom-1 text-text-gray-on-black text-style-12">
          {/* <Button filled={true} link={slice.primary.button_link_1} text={slice.primary.button_text_1} /> */}

          {/* <Button filled={false} link={slice.primary.button_link_2} text={slice.primary.button_text_2} /> */}
        </div>

        <div className="row-start-2 col-start-2 md:col-start-6 col-end-12 md:col-end-20 bg-white/30 text-style-8 text-text-gray-on-black text-center">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default Cta;