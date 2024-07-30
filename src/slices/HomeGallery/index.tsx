import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeGallery`.
 */
export type HomeGalleryProps = SliceComponentProps<Content.HomeGallerySlice>;

/**
 * Component for "HomeGallery" Slices.
 */
const HomeGallery = ({ slice }: HomeGalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_gallery (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HomeGallery;
