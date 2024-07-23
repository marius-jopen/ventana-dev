import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  return (
    <section className="bg-black text-white w-full overflow-x-hidden">
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="row-start-1 col-span-24 distance-bottom-4">
          <video className="w-full h-auto" width="100%" height="100%" autoPlay playsInline muted preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/986635395/rendition/1080p/file.mp4?loc=external&log_user=0&signature=71512501c04219394ce472b4065bd27528ddedc022de97d1f138e06f9ca581c3" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="mt-[-50px] row-start-3 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Mounting;