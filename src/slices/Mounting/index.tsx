import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Mounting`.
 */
export type MountingProps = SliceComponentProps<Content.MountingSlice>;

/**
 * Component for "Mounting" Slices.
 */
const Mounting = ({ slice }: MountingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for mounting (variation: {slice.variation}) Slices
    </section>
  );
};

export default Mounting;
