import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  return (
    <section className="grid grid-cols-24">
      <div className="col-start-2 col-end-24 text-center">
        <PrismicRichText field={slice.primary.headline} />
      </div>

      <div className="col-start-15 col-end-20">
        <PrismicRichText field={slice.primary.text} />
      </div>

      <div className="col-start-1 col-end-24">
        <PrismicLink field={slice.primary.video}>
          Video
        </PrismicLink>
      </div>
    </section>
  );
};

export default Thickness;