import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.text_1} />

      <PrismicRichText field={slice.primary.text_2} />

      <PrismicLink field={slice.primary.video}>
        Video
      </PrismicLink>
    </section>
  );
};

export default Mounting;