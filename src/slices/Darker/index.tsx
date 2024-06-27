import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type DarkerProps = SliceComponentProps<Content.DarkerSlice>;

const Darker = ({ slice }: DarkerProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-span-24 bg-white/30">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-5 col-end-23 text-right bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="col-start-2 col-end-17 text-right bg-white/30">
          <PrismicRichText field={slice.primary.sub_headline} />
        </div>

        <div className="col-start-5 col-end-12 text-right bg-white/30">
          <PrismicRichText field={slice.primary.text_1} />
        </div>
        
        <div className="col-start-14 col-end-21 bg-white/30">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
        
        <div className="col-start-5 col-end-12 text-right bg-white/30">
          <PrismicRichText field={slice.primary.text_3} />
        </div>
      </div>
    </section>
  );
};

export default Darker;
