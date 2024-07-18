"use client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import CallToAction from "../../slices/CallToAction";

export type OpenerProps = SliceComponentProps<Content.OpenerSlice>;

const Opener = ({ slice }: OpenerProps): JSX.Element => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const words = slice.primary.headline ? slice.primary.headline.split(", ") : [""];

  useEffect(() => {
    if (words[0] === "") return;  // If there are no words, do not run the interval

    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 1000); // Change word every 1 second

    return () => clearInterval(interval);
  }, [isHovering, words.length]);

  // Log the slice to check its structure
  console.log("Opener slice:", slice);

  // Find the CallToAction slice data
  const callToActionSlice = slice.items.find(item => item.slice_type === 'call_to_action');

  // Log the CallToAction slice data
  console.log("CallToAction slice data:", callToActionSlice);

  return (
    <section className="relative text-white h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
        <div className="text-style-5 mt-4">
          <PrismicRichText field={slice.primary.subheadline} />
        </div>
        {callToActionSlice ? (
          <CallToAction slice={callToActionSlice} index={0} slices={[]} context={undefined} />
        ) : (
          <p>No Call to Action slice found</p>
        )}
      </div>
      <div className="inset-0 -z-10">
        <video className="object-cover w-full h-full" loop playsInline autoPlay muted preload="none">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Opener;
