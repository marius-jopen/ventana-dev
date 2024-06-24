import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Opener`.
 */
export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

/**
 * Component for "Opener" Slices.
 */
const Opener = ({ slice }: OpenerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for opener (variation: {slice.variation}) Slices
    </section>
  );
};

export default Opener;
