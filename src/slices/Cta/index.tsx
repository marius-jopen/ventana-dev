import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type CtaProps = SliceComponentProps<Content.CtaSlice>;

const Cta = ({ slice }: CtaProps): JSX.Element => {
  return (
    <section>
      <PrismicLink field={slice.primary.button_link_1}>
        {slice.primary.button_text_1}
      </PrismicLink>


      <PrismicLink field={slice.primary.button_link_2}>
        {slice.primary.button_text_2}
      </PrismicLink>

      <PrismicRichText field={slice.primary.headline} />
    </section>
  );
};

export default Cta;