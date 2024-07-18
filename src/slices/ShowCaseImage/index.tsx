import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import ShowCase from "@/app/components/ShowCase";

export type ShowCaseImagesProps =
  SliceComponentProps<Content.ShowCaseImagesSlice>;

const ShowCaseImages = ({ slice }: ShowCaseImagesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-[100px]"
    >
      <ShowCase 
        imgSrc={slice.primary.image_link}
        imgCaption={slice.primary.image_caption}
        variant={slice.variation}
      />
    </section>
  );
};

export default ShowCaseImages;
