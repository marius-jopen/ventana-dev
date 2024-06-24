import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Power`.
 */
export type PowerProps = SliceComponentProps<Content.PowerSlice>;

/**
 * Component for "Power" Slices.
 */
const Power = ({ slice }: PowerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for power (variation: {slice.variation}) Slices
    </section>
  );
};

export default Power;
