"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import AOS from 'aos';
import { useEffect, useState, useRef } from "react";
import 'aos/dist/aos.css'; 

export type MountingProps = SliceComponentProps<Content.MountingSlice>;

const Mounting = ({ slice }: MountingProps): JSX.Element => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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

    const handleScroll = () => {
      if (!parentRef.current || !videoRef.current) return;

      const container = parentRef.current;
      const rect = container.getBoundingClientRect();

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        videoRef.current.style.position = 'fixed';
        videoRef.current.style.top = '0';
        videoRef.current.style.bottom = 'auto';
      } else if (rect.top > 0) {
        videoRef.current.style.position = 'absolute';
        videoRef.current.style.top = '0';
        videoRef.current.style.bottom = 'auto';
      } else if (rect.bottom < window.innerHeight) {
        videoRef.current.style.position = 'absolute';
        videoRef.current.style.top = 'auto';
        videoRef.current.style.bottom = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute("data-index", index.toString());
        observer.observe(ref);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      textRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    textRefs.current[index] = el;
  };

  console.log(slice)

  return (
    <section
      className="block bg-black text-white w-full overflow-hidden" 
      data-slice="style-black"
      slice-name="mounting"
    >
      <div className="relative">
        <video
          ref={videoRef}
          poster={slice.primary.video_poster?.url || ''}
          className="w-screen object-cover h-screen"
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
        <div ref={parentRef} id="text" className="text-style-3 text-center relative z-10 top-0 flex flex-col">
          <div className="h-80" />
          <div className="bg-gradient-to-b from-black h-screen w-screen absolute top-0 left-0 z-0"></div>
          {[slice.primary.text_animated_1 ? slice.primary.text_animated_1 : "", 
          slice.primary.text_animated_2 ? slice.primary.text_animated_2 : "", 
          slice.primary.text_animated_3 ? slice.primary.text_animated_3 : ""].map((text, index) => (
            <div
              key={index}
              ref={(el) => setRef(el, index)}
              className={`transition-opacity duration-1000 pt-80 pb-40 flex flex-col w-8/12 mx-auto justify-end items-center z-10 ${activeIndex === index ? "opacity-100 blur-none" : "opacity-0 blur-xl"}`}
            >
              <span>
                {text}
              </span>
            </div>
          ))}
          <div className="h-80" />
        </div>
      </div>


      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5 distance-top-3">
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
