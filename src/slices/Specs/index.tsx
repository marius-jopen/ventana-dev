import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Specs`.
 */
export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

/**
 * Component for "Specs" Slices.
 */
const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for specs (variation: {slice.variation}) Slices
    </section>
  );
};

export default Specs;
