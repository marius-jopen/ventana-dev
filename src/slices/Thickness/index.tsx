import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Thickness`.
 */
export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

/**
 * Component for "Thickness" Slices.
 */
const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for thickness (variation: {slice.variation}) Slices
    </section>
  );
};

export default Thickness;
