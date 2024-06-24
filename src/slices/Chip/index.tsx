import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Chip`.
 */
export type ChipProps = SliceComponentProps<Content.ChipSlice>;

/**
 * Component for "Chip" Slices.
 */
const Chip = ({ slice }: ChipProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for chip (variation: {slice.variation}) Slices
    </section>
  );
};

export default Chip;
