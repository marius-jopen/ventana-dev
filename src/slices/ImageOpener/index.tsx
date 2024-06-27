import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />

      <PrismicImage field={slice.primary.image} />
    </section>
  );
};

export default ImageOpener;