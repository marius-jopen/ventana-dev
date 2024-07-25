import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Legal`.
 */
export type LegalProps = SliceComponentProps<Content.LegalSlice>;

/**
 * Component for "Legal" Slices.
 */
const Legal = ({ slice }: LegalProps): JSX.Element => {
  return (
    <section 
    className="h-full block bg-offWhite"
    slice-name="legal"
    data-slice="style-white"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-top-4 distance-bottom-5">
        <div className="text-style-4 text-center distance-bottom-3 mt-1 row-start-1 col-start-2 md:col-start-7 col-end-12 md:col-end-19 text-text-black-on-white">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div className="mt-1 row-start-2 col-start-2 md:col-start-7 col-end-12 md:col-end-19 text-style-8 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Legal;
