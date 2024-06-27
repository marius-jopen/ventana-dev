import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-start-2 col-end-12 bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="col-start-14 col-end-24 bg-white/30">
          {Array.isArray(slice.primary.table) && slice.primary.table.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <PrismicRichText field={item.label} />
              <PrismicRichText field={item.content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;