import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type SpaceProps = SliceComponentProps<Content.SpaceSlice>;

const Space = ({ slice }: SpaceProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-24 text-center bg-white/30">
          {slice.primary.headline}
          
          <PrismicRichText field={slice.primary.sub_headline} />
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-23 text-center bg-white/30">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-2 md:col-start-3 col-end-12 md:col-end-11 bg-white/30">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div className="col-start-2 md:col-start-17 col-end-12 md:col-end-23 bg-white/30">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Space;