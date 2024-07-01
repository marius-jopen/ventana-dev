import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section className="bg-darkGray text-white">
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="col-start-2 col-end-12 text-style-4">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="col-start-2 md:col-start-14 col-end-12 md:col-end-24">
          {Array.isArray(slice.primary.table) && slice.primary.table.map((item, index) => (
            <div className="flex justify-between" key={index}>
              <div className="text-lightGray text-style-15">
                <PrismicRichText field={item.label} />
              </div>

              <div className="text-offWhite text-style-15">
                <PrismicRichText field={item.content} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;