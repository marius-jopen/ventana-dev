import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DoubleText`.
 */
export type DoubleTextProps = SliceComponentProps<Content.DoubleTextSlice>;

/**
 * Component for "DoubleText" Slices.
 */
const DoubleText = ({ slice }: DoubleTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for double_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default DoubleText;
