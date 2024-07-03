import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-span-24">
          <PrismicImage field={slice.primary.image} />
          Image
        </div>

        <div className="col-start-2 col-end-12 md:col-end-24 text-style-9 text-white">
          <PrismicRichText field={slice.primary.headline} />
        </div>
      </div>
    </section>
  );
};

export default ImageOpener;