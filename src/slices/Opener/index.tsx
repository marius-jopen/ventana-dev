import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-12 md:grid-cols-24 distance-top-6 distance-bottom-6">
        <div className="col-span-12 md:col-span-24">
          Video
        </div>

        <div className="col-start-2 col-end-12 md:col-end-24 text-center">
          <div className="text-style-13">
            {slice.primary.headline}
          </div>

          <div className="text-style-5">
            <PrismicRichText field={slice.primary.subheadline} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opener;