import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  return (
    <section >
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-span-12 md:col-span-24 bg-white/30">
          Video
        </div>

        <div className="col-start-2 col-end-12 md:col-end-24 text-center bg-white/30">
          {slice.primary.headline}

          <PrismicRichText field={slice.primary.subheadline} />
        </div>
      </div>
    </section>
  );
};

export default Opener;