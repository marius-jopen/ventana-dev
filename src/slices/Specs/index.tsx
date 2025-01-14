import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicImage } from "@prismicio/react";

export type SpecsProps = SliceComponentProps<Content.SpecsSlice>;

const Specs = ({ slice }: SpecsProps): JSX.Element => {
  return (
    <section 
    className="h-full block bg-darkGray text-white w-full overflow-hidden" 
    slice-name="specs"
    data-slice="style-black"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max pt-10 md:pt-16 2xl:pt-24 pb-24 md:pb-36 2xl:pb-44">
        <div className="row-start-1 col-start-2 col-end-12 text-style-4">
          <div data-aos="fade-up">
            <PrismicRichText field={slice.primary.headline} />
          </div>

          <div data-aos="fade-up" className="pt-8 md:pt-12 2xl:pt-16">
            <PrismicImage field={slice.primary.image} />
          </div>
        </div>

        <div className="pt-8 md:pt-0 mt-0 md:mt-[-10px] 2xl:mt-[-5px] row-start-2 md:row-start-1 col-start-2 md:col-start-14 col-end-12 md:col-end-24">
          {Array.isArray(slice.primary.table) && slice.primary.table.map((item, index) => (
            <div data-aos-delay={0 + (index * 100)} data-aos="fade-up" className="flex justify-between border-b border-text-gray-on-black py-4 md:py-6 2xl:py-6" key={index}>
              <div className="text-lightGray text-style-15 w-1/2">
                <PrismicRichText field={item.label} />
              </div>

              <div className="text-offWhite text-style-15 w-1/2 text-right">
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