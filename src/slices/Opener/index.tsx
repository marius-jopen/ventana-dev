import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  return (
    <section >
      {slice.primary.headline}

      <PrismicRichText field={slice.primary.subheadline} />
    </section>
  );
};

export default Opener;