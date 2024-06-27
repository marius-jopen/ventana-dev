import { Content } from "@prismicio/client";
import { PrismicImage, PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-24">
        <div className="col-span-24 bg-white/30">
          <PrismicImage field={slice.primary.image} />
          Image
        </div>

        <div className="col-start-2 col-end-24 text-center bg-white/30">
          Ventana Logo
        </div>

        <div className="col-start-2 col-end-24 text-center bg-white/30">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="col-start-11 col-end-15 text-center bg-white/30">
          <PrismicLink field={slice.primary.button_link}>
            {slice.primary.button_text}
          </PrismicLink>
        </div>
      </div>
    </section>
  );
};

export default Welcome;