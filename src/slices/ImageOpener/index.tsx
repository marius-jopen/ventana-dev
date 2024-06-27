import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-span-24 bg-white/30">
          <PrismicImage field={slice.primary.image} />
          Image
        </div>

        <div className="col-start-2 col-end-24 bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default ImageOpener;