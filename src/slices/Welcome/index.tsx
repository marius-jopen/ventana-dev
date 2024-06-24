import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Welcome`.
 */
export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

/**
 * Component for "Welcome" Slices.
 */
const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for welcome (variation: {slice.variation}) Slices
    </section>
  );
};

export default Welcome;
