import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <PrismicRichText field={slice.primary.headline} />

        {Array.isArray(slice.primary.table) && slice.primary.table.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <PrismicRichText field={item.label} />
            <PrismicRichText field={item.content} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specs;