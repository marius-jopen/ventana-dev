import { Content } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section>
      <PrismicRichText field={slice.primary.headline} />

      <PrismicImage field={slice.primary.image} />
      
      <PrismicLink field={slice.primary.button_link}>
        {slice.primary.button_text}
      </PrismicLink>
    </section>
  );
};

export default Welcome;