import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <PrismicRichText field={slice.primary.headline} />

        <PrismicImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default ImageOpener;