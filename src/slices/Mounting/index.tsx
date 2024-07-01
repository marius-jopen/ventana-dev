import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-span-24 bg-white/30">
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

export default Mounting;