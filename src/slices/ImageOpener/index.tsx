import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type ImageOpenerProps = SliceComponentProps<Content.ImageOpenerSlice>;

const ImageOpener = ({ slice }: ImageOpenerProps): JSX.Element => {
  return (
    <section 
    className="bg-black text-white w-full overflow-hidden"
    slice-name="image-opener"
    data-slice="style-black"
    >
      <div className="relative grid grid-cols-12 md:grid-cols-24 h-[50vh] md:h-[55vw]">
        <div className="relative z-10 col-start-2 col-end-12 md:col-end-24 text-style-9 text-white pt-16 md:pt-20 2xl:pt-24">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div className="absolute h-full w-full top-0 left-0">
          <PrismicImage className="object-cover w-full h-full brightness-75" field={slice.primary.image} />
        </div>
      </div>
    </section>
  );
};

export default ImageOpener;