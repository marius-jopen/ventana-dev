import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section 
    className="h-full block bg-darkGray text-white w-full overflow-x-hidden" 
    slice-name="specs"
    data-slice="style-black"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 distance-top-3 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="row-start-1 col-start-2 col-end-12 text-style-4">
          <div data-aos="fade-up">
            <PrismicRichText field={slice.primary.headline} />
          </div>

          <div data-aos-delay="250" data-aos="fade-up" className="distance-top-2">
            <PrismicImage field={slice.primary.image} />
          </div>
        </div>

        <div className="mt-[-10px] row-start-1 col-start-2 md:col-start-14 col-end-12 md:col-end-24">
          {Array.isArray(slice.primary.table) && slice.primary.table.map((item, index) => (
            <div data-aos-delay={500 + (index * 100)} data-aos="fade-up" className="flex justify-between border-b border-text-gray-on-black pt-6 pb-6" key={index}>
              <div className="text-lightGray text-style-15">
                <PrismicRichText field={item.label} />
              </div>

              <div className="text-offWhite text-style-15 text-right">
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