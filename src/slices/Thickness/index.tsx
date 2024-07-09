"use client"
import React, { useRef, useEffect } from 'react';
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

export type ThicknessProps = SliceComponentProps<Content.ThicknessSlice>;

const Thickness = ({ slice }: ThicknessProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
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
    <section>
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max">
        <div className="row-start-1 col-start-2 col-end-12 md:col-end-24 text-center text-style-4 text-black-on-white distance-top-4">
          <PrismicRichText field={slice.primary.headline} />
        </div>

        <div className="row-start-2 col-start-2 md:col-start-15 col-end-12 md:col-end-23 text-style-7 text-text-gray-on-white distance-top-4 distance-bottom-4">
          <PrismicRichText field={slice.primary.text} />
        </div>

        <div className="row-start-3 col-span-12 md:col-span-24">
          <video ref={videoRef} className="object-cover h-full" poster="/video.jpg"  width="100%" height="100%" playsInline muted preload="metadata">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Thickness;
