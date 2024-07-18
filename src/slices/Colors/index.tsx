import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";

export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

const Colors = ({ slice }: ColorsProps): JSX.Element => {
  return (
    <section className="bg-offWhite">
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="row-start-1 col-span-24 distance-bottom-4">
          {/* <PrismicLink field={slice.primary.video}>
            !!!!! Video SCROLLBASED with text on top
            THE VIDEO IS ONLY HERE FOR DEMONSTRATION
          </PrismicLink> */}
          <video className="w-full h-auto" width="100%" height="100%" autoPlay playsInline loop muted preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/986527097/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e05c4175235c833f462dc6a777c7697c08aa15b5dd556551aceaf1dc45abcce6" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="row-start-3 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Colors;