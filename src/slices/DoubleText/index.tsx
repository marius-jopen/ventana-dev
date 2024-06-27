import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type DoubleTextProps = SliceComponentProps<Content.DoubleTextSlice>;

const DoubleText = ({ slice }: DoubleTextProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />
      
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default DoubleText;