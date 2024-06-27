import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-12 md:col-end-24 text-center bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="col-start-2 md:col-start-15 col-end-12 md:col-end-23 bg-white/30">
          <PrismicRichText field={slice.primary.text} />
        </div>

        <div className="col-span-12 md:col-span-24 bg-white/30">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>
      </div>
    </section>
  );
};

export default Thickness;