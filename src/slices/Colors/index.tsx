"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { useEffect, useRef, useState } from "react";
import { asText } from "@prismicio/helpers"

export type ColorsProps = SliceComponentProps<Content.ColorsSlice>;

const Colors = ({ slice }: ColorsProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [startAnimation, setStartAnimation] = useState(false);
  const [textIndex, setTextIndex] = useState(-1)
  const [frameNumber, setFrameNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const scrollSpeed = 1; // Variable to control the speed of the animation

  const texts = [
    asText(slice.primary.text_1),
    asText(slice.primary.text_2),
    asText(slice.primary.text_3),
    ""
  ]

  const breakpoints = [
    0.25,
    0.45,
    0.6,
    0.9
  ]

  useEffect(() => {   
    if (typeof window !== "undefined") {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const canvas = canvasRef.current;
      if (canvas) {
        const context = canvas?.getContext("2d");
        if (context) {
          const frameCount = 749;

          const currentFrame = (index: number) => (
            `/colors-images/VENTANA_COLOR_R10_01D_${index.toString().padStart(5, "0")}.jpg`
          );

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

          const updateImage = (index: number) => {
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
            if (wrap) {
              const scrollTop = html.scrollTop - wrap.offsetTop;
              const maxScrollTop = wrap.scrollHeight - window.innerHeight;
              const scrollFraction = Math.max(0, Math.min(1, scrollTop / (maxScrollTop * scrollSpeed)));
              const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
              );
              setFrameNumber(frameIndex);

              // the breakpoints for the text animation
              const progress = frameIndex / frameCount
              
              let newTextIndex = -1;

              for (let i = 0; i < breakpoints.length; i++) {
                console.log(progress, breakpoints[i])
                if (progress >= breakpoints[i]) {
                  newTextIndex = i;
                } else {
                  break; // Stop the loop when a breakpoint hasn't been crossed
                }
              }
              
              setTextIndex(newTextIndex);              

              
              requestAnimationFrame(() => updateImage(frameIndex));
            }
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

          if (containerRef.current) {
            observer.observe(containerRef.current);
          }
          preloadImages();

          return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
          };
        }
      }
    }
  }, [startAnimation, scrollSpeed]);

  const drawImageCover = (context: CanvasRenderingContext2D | null, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
    if (!context) return;
    
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
    <section 
    className="block h-full bg-white" 
    data-slice="style-white" 
    slice-name="colors"
    >
      <div className="grid grid-cols-12 md:grid-cols-24 grid-flow-row auto-rows-max distance-bottom-5">
        <div className="bg-black row-start-1 col-span-24" ref={containerRef}>

        {texts.map((txt, i) => (
          <div
            key={i}        
            ref={(el) => {
              if (el) {
                const handleTransitionEnd = () => {
                  if (i !== textIndex) {
                    el.classList.remove('animate-exit');
                  }
                };
                el.addEventListener('transitionend', handleTransitionEnd);
                return () => el.removeEventListener('transitionend', handleTransitionEnd);
              }
            }}        
            className={`animate-element fixed inset-0 z-50 w-screen h-screen flex justify-center items-center text-white ${i === textIndex ? 'animate-enter' : 'animate-exit'}`}>
          <h1 className="text-2xl sm:text-5xl text-center mx-20 sm:mx-40">
            {txt}
          </h1>
        </div>
        ))}

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

        <div className="row-start-2 col-span-24 text-style-5 bg-gradient-to-t from-white h-64 z-20 -mt-64"></div>
      </div>
    </section>
  );
};

export default Colors;
