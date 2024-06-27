import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <PrismicRichText field={slice.primary.text_1} />

        <PrismicRichText field={slice.primary.text_2} />

        <PrismicLink field={slice.primary.video}>
          Video
        </PrismicLink>
      </div>
    </section>
  );
};

export default Mounting;