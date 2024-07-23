"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";

export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

const Colors = ({ slice }: ColorsProps): JSX.Element => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const wordRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [startAnimation, setStartAnimation] = useState(false);
  const [frameNumber, setFrameNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const scrollSpeed = 1; // Variable to control the speed of the animation

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const frameCount = 351;

      const currentFrame = (index) =>
        `/colors-images/VENTANA_COLOR_R10_01C_${index.toString().padStart(5, "0")}.jpg`;

      const img = new Image();
      img.src = currentFrame(0);
      img.onload = function () {
        drawImageCover(context, img, canvas);
      };

      const preloadImages = () => {
        Array.from({ length: frameCount }, (_, i) => {
          const img = new Image();
          img.src = currentFrame(i);
        });
      };

      const updateImage = (index) => {
        const newImg = new Image();
        newImg.src = currentFrame(index);
        newImg.onload = function () {
          drawImageCover(context, newImg, canvas);
        };
      };

      const handleScroll = () => {
        if (!startAnimation) return;

        const html = document.documentElement;
        const wrap = containerRef.current;
        const scrollTop = html.scrollTop - wrap.offsetTop;
        const maxScrollTop = wrap.scrollHeight - window.innerHeight;
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / (maxScrollTop * scrollSpeed)));
        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(scrollFraction * frameCount)
        );
        setFrameNumber(frameIndex);
        requestAnimationFrame(() => updateImage(frameIndex));

        // Handle fade-in effect for the WORD div
        const fadeSpeed = 200; // Adjust this value for desired fade speed
        const opacity = Math.min(1, scrollTop / fadeSpeed);
        wordRef.current.style.opacity = opacity;
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              setStartAnimation(true);
              window.addEventListener("scroll", handleScroll);
            } else if (!entry.isIntersecting && entry.boundingClientRect.top > window.innerHeight) {
              setIsInView(false);
              setStartAnimation(false);
              window.removeEventListener("scroll", handleScroll);
            }
          });
        },
        { threshold: 0 }
      );

      observer.observe(containerRef.current);
      preloadImages();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }
  }, [startAnimation, scrollSpeed]);

  const drawImageCover = (context, img, canvas) => {
    const imgAspectRatio = img.width / img.height;
    const canvasAspectRatio = canvas.width / canvas.height;
    let renderableWidth, renderableHeight, xStart, yStart;

    if (imgAspectRatio < canvasAspectRatio) {
      renderableWidth = canvas.width;
      renderableHeight = renderableWidth / imgAspectRatio;
      xStart = 0;
      yStart = (canvas.height - renderableHeight) / 2;
    } else if (imgAspectRatio > canvasAspectRatio) {
      renderableHeight = canvas.height;
      renderableWidth = renderableHeight * imgAspectRatio;
      xStart = (canvas.width - renderableWidth) / 2;
      yStart = 0;
    } else {
      renderableWidth = canvas.width;
      renderableHeight = canvas.height;
      xStart = 0;
      yStart = 0;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, xStart, yStart, renderableWidth, renderableHeight);
  };

  return (
    <section className="bg-offWhite">
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="bg-black row-start-1 col-span-24" ref={containerRef}>
          <div className="png__sequence">
            <canvas
              ref={canvasRef}
              width={canvasSize.width}
              height={canvasSize.height}
              className="png__sequence__canvas"
              id="canvas"
            ></canvas>
          </div>
        </div>

        <div className="row-start-2 col-span-24 text-style-5 bg-gradient-to-t from-offWhite h-64 z-20 -mt-64"></div>

        <div className="distance-top-4 row-start-3 col-start-2 md:col-start-3 col-end-12 md:col-end-11 text-style-5 text-text-gray-on-white">
          <PrismicRichText field={slice.primary.text_1} />
        </div>

        <div className="row-start-4 col-start-2 md:col-start-17 col-end-12 md:col-end-23 text-style-8 text-text-gray-on-white line-box">
          <PrismicRichText field={slice.primary.text_2} />
        </div>
      </div>

      <div
        className="text-style-2 text-red-200 text-center z-30 fixed w-full top-0 left-0 h-full flex justify-center flex-col"
        style={{ opacity: 0 }}
        ref={wordRef}
      >
        WORD
      </div>
    </section>
  );
};

export default Colors;
