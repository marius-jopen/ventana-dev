"use client"
import React, { useRef, useEffect } from 'react';
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });

    const videoElement = videoRef.current;
    let hasPlayed = false;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      // Check if the video is in view and has not played before
      if (entry.isIntersecting && !hasPlayed) {
        videoElement?.play();
        hasPlayed = true; // Mark as played
      }
    }, {
      threshold: 0.5 // Trigger when 50% of the video is visible
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      observer.disconnect(); // Cleanup observer when the component unmounts
    };
  }, []);

  return (
    <section className='w-full overflow-x-hidden'>
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max">
        <div data-aos="fade-up" className="row-start-1 col-start-5 col-end-12 md:col-end-21 text-center text-style-4 text-black-on-white distance-top-4">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div data-aos="fade-up" className="row-start-2 col-start-2 md:col-start-15 col-end-12 md:col-end-23 text-style-7 text-text-gray-on-white distance-top-4 distance-bottom-3">
          <PrismicRichText field={slice.primary.text} />
        </div>

        <div className="row-start-3 col-span-12 md:col-span-24">
          <video
            poster={slice.primary.video_poster.url}
            className="object-cover h-full"
            width="100%"
            height="100%"
            autoPlay
            playsInline
            muted
            preload="metadata"
          >
            <source src={slice.primary.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Thickness;
