"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText, PrismicLink } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type ChipProps = SliceComponentProps<Content.ChipSlice>;

const Chip = ({ slice }: ChipProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const hasAnimated = useRef(false);
  const maxNumber = slice.primary.max_number || 0;
  const ref = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });

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
        }, (1500 / maxNumber)); // Duration divided by max number to evenly spread the counting
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
    <section 
    data-slice="style-black"
    slice-name="chip"
    className="block h-full bg-black text-white grid-flow-row auto-rows-max w-full overflow-hidden"
    >
      <div className="grid grid-cols-12 md:grid-cols-24">
        <div 
        className="row-start-1 col-start-2 col-end-24 text-left ml-[50%] relative translate-x-[-110px] md:translate-x-[-300px]" 
        ref={ref}
        >
          <div className="text-style-14">
            {count.toString().padStart(2, '0')}
          </div>

          <div className={`ml-6 md:translate-x-[450px] 2xl:translate-x-[550px] -mt-8 md:mt-0 text-style-17 w-full text-left md:absolute bottom-0 md:translate-y-[-60px] opacity-0 ${fadeIn ? 'fade-in' : ''}`}>
            {slice.primary.fade_in_text}
          </div>
        </div>

        <div className="row-start-2 col-span-24">
          <video
            poster={slice.primary.video_poster?.url || ''}

            className="w-full h-auto"
            width="100%"
            height="100%"
            autoPlay
            playsInline
            muted
            preload="metadata"
          >
            <source src={slice.primary.video_url || ''} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div 
        data-aos="fade-up" 
        className="row-start-4 col-start-2 md:col-start-3 col-end-12 md:col-end-11 pt-20 md:pt-24 2xl:pt-28 pb-6 md:pb-10 2xl:pt-pb-12"
        >
          <div className="text-style-4">
            <PrismicRichText field={slice.primary.headline} />
          </div>
        </div>

        <div className="row-start-5 col-start-2 md:col-start-3 col-end-12 md:col-end-11">
          <div 
          data-aos-delay="250" 
          data-aos="fade-up" 
          className="pb-12 md:pb-0 text-style-7 text-text-gray-on-black"
          >
            <PrismicRichText field={slice.primary.sub_headline} />
          </div>
        </div>

        <div 
        data-aos-delay="500" 
        data-aos="fade-up" 
        className="mt-0 md:mt-[12px] row-start-6 md:row-start-5 col-start-2 md:col-start-17 col-end-9 md:col-end-23 text-style-8 text-text-gray-on-black line-box border-line-gray-on-black"
        >
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default Chip;
