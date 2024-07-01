import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type SpaceProps = SliceComponentProps<Content.SpaceSlice>;

const Space = ({ slice }: SpaceProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-24 text-center text-black-on-white">
          <div className="text-style-3">
            {slice.primary.headline}
          </div>
          
          <div className="text-style-5">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-6-1 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div className="col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Space;