import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageOpener`.
 */
export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

/**
 * Component for "ImageOpener" Slices.
 */
const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_opener (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageOpener;
