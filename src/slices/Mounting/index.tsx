"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import AOS from 'aos';
import { useEffect, useState, useRef } from "react";
import 'aos/dist/aos.css'; 

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const index = Number(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.5],
    });

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute("data-index", index.toString());
        observer.observe(ref);
      }
    });

    return () => {
      textRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section 
      className="block h-full bg-black text-white w-full overflow-x-hidden" 
      data-slice="style-black"
      slice-name="mounting"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="row-start-1 col-span-24 distance-bottom-4 relative">
          <div className="video-container">
            <video
              poster={slice.primary.video_poster?.url || ''}
              className="w-full object-cover h-[100vh]"
              width="100%"
              height="100%"
              autoPlay
              playsInline
              muted
              loop
              preload="metadata"
            >
              <source src={slice.primary.video_url || ''} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-style-3 text-fx-box text-center w-8/12 mx-auto">
            {["Simple to install.", "Hard to stop watching.", "Pur pugs make up a magnetic grid."].map((text, index) => (
              <div
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className={`text-fx-item transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="row-start-2 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div data-aos="fade-up" className="mt-[-50px] row-start-3 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-black line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>
    </section>
  );
};

export default Mounting;
