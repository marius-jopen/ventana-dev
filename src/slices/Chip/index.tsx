"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

export type ChipProps = SliceComponentProps<Content.ChipSlice>;

const Chip = ({ slice }: ChipProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const hasAnimated = useRef(false);
  const maxNumber = slice.primary.max_number || 0;
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let currentCount = 0;
        const timer = setInterval(() => {
          currentCount++;
          setCount(currentCount);
          if (currentCount >= maxNumber) {
            clearInterval(timer);
            setTimeout(() => setFadeIn(true), 500); // Optionally delay the fade-in effect
          }
        }, (3000 / maxNumber)); // Duration divided by max number to evenly spread the counting
      }
    }, { threshold: 0.5 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [maxNumber]);

  return (
    <section className="bg-black text-white grid-flow-row auto-rows-max w-full overflow-x-hidden">
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div className="row-start-1 col-start-2 col-end-24 text-left ml-[50%] relative translate-x-[-300px]" ref={ref}>
          <div className="text-style-14">
            {count.toString().padStart(2, '0')}
          </div>

          <div className={`text-style-17 ml-[50%] w-full text-left absolute bottom-0 translate-x-[250px] translate-y-[-60px] opacity-0 ${fadeIn ? 'fade-in' : ''}`}>
            {slice.primary.fade_in_text}
          </div>
        </div>

        <div className="row-start-2 col-span-24">
          <video className="w-full h-auto" width="100%" height="100%" autoPlay playsInline muted preload="metadata">
            <source src="https://player.vimeo.com/progressive_redirect/playback/986527050/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3db348965624bfcb96fc5f130ed0e0298ccb2a9102ead227ccd47fdc37b4a891" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="row-start-3 col-span-24 text-style-5 bg-gradient-to-t from-black h-48 z-20 -mt-48"></div>

        <div className="row-start-4 col-start-2 md:col-start-3 col-end-12 md:col-end-11 distance-bottom-1  distance-top-2">
          <div className="text-style-4">
            <PrismicRichText field={slice.primary.headline} />
          </div>
        </div>

        <div className="row-start-5 col-start-2 md:col-start-3 col-end-12 md:col-end-11">
          <div className="text-style-7 text-text-gray-on-black">
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div className="row-start-5 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Chip;
