import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Darker`.
 */
export type DarkerProps = SliceComponentProps<Content.DarkerSlice>;

/**
 * Component for "Darker" Slices.
 */
const Darker = ({ slice }: DarkerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for darker (variation: {slice.variation}) Slices
    </section>
  );
};

export default Darker;
