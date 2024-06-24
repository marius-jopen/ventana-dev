import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutContent`.
 */
export type AboutContentProps = SliceComponentProps<Content.AboutContentSlice>;

/**
 * Component for "AboutContent" Slices.
 */
const AboutContent = ({ slice }: AboutContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_content (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AboutContent;
