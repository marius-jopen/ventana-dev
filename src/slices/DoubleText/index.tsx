import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type DoubleTextProps = SliceComponentProps<Content.DoubleTextSlice>;

const DoubleText = ({ slice }: DoubleTextProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-start-2 col-end-12 bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div className="col-start-13 col-end-24 bg-white/30">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default DoubleText;