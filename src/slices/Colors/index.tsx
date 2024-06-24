import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Colors`.
 */
export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

/**
 * Component for "Colors" Slices.
 */
const Colors = ({ slice }: ColorsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for colors (variation: {slice.variation}) Slices
    </section>
  );
};

export default Colors;
