import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

const Colors = ({ slice }: ColorsProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-span-24 bg-white/30">
          <PrismicLink field={slice.primary.video}>
            Video
          </PrismicLink>
        </div>

        <div className="col-start-3 col-end-11 bg-white/30">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="col-start-17 col-end-23 bg-white/30">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Colors;