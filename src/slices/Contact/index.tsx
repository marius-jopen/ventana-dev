import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section 
    className="h-full block bg-black"
    slice-name="contact"
    data-slice="style-black"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-top-5 distance-bottom-6">
        <div className="text-style-4 text-center distance-bottom-2 mt-1 row-start-1 col-start-2 md:col-start-7 col-end-12 md:col-end-19 text-text-white-on-black">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div className="text-center mt-1 row-start-2 col-start-2 md:col-start-7 col-end-12 md:col-end-19 text-style-7 text-text-white-on-black">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
