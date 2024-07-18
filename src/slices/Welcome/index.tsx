'use client'

import React, { useEffect, useRef, useState } from 'react';
import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import CommonButton from '@/app/components/CommonButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type WelcomeProps = SliceComponentProps<Content.WelcomeSlice>;

const Welcome = ({ slice }: WelcomeProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const text = textRef.current;
    const button = buttonRef.current;
    const video = videoRef.current;

    if (container && svg && text && button && video) {
      /* Creating a GSAP timeline */
      const tl = gsap.timeline({
        onComplete: () => {
          setVideoLoaded(true);
          video.play();
        }
      });

      /* SVG blinking effect followed by zoom in and out */
      tl.fromTo(svg, 
        { opacity: 0 }, 
        { 
          opacity: 1, 
          duration: 0.1, 
          repeat: 5, 
          yoyo: true 
        })
        .to(svg, { opacity: 1, duration: 0.5 }) 
        .to(svg, { scale: 1.2, duration: 0.5, ease: "power4.out" }) 
        .to(svg, { scale: 1, duration: 0.5, ease: "power4.out" }); 

      tl.fromTo(text, 
        { opacity: 0, y: 50, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "-=0.5")
        .fromTo(button, 
          { opacity: 0, y: 50, scale: 0.8 }, 
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power4.out" }, "-=0.5");

      gsap.to(container, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = svg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * 60; /* Sensitivity */
        const rotateY = ((x / rect.width) - 0.5) * -60;

        gsap.to(svg, { rotateX, rotateY, scale: 1.1, duration: 0.3, ease: "power2.out", transformPerspective: 800 });
      };

      const handleMouseLeave = () => {
        gsap.to(svg, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.3, ease: "power2.out", transformPerspective: 800 });
      };

      svg.addEventListener('mousemove', handleMouseMove);
      svg.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        svg.removeEventListener('mousemove', handleMouseMove);
        svg.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);


  return (
    <section className="text-white bg-white">
      <div ref={containerRef} className="relative h-[60vw] overflow-hidden">
        {!videoLoaded && <div className="absolute inset-0 bg-black"></div>}

        <div className="flex flex-col justify-center items-center w-full h-full pt-10 xs:pt-10 xs-2xs:pt-12 2xs:pt-18">
          <div className="flex justify-center pb-5 w-full xs:w-5/6 sm:w-5/6 md:w-3/4 md-lg:w-2/3 lg:w-1/2 xl:w-2/3 sm:block hidden">
            <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" viewBox="0 0 844 102" fill="none">
              <path d="M200.497 82.6982C200.198 82.106 199.422 81.6285 198.76 81.6285H159.335C159.335 81.6285 159.325 81.0913 159.325 80.4301V67.6847H198.76C199.422 67.6847 199.96 67.1476 199.96 66.4864V49.4619C199.96 48.8008 199.422 48.2636 198.76 48.2636H159.344L159.325 34.3061H161.788L198.756 34.3658C199.417 34.3658 200.198 33.8883 200.497 33.296L209.566 15.4543C209.864 14.862 209.57 14.3845 208.909 14.3845H140.816C140.155 14.3845 139.617 14.9217 139.617 15.5828V100.641C139.617 101.302 140.155 101.839 140.816 101.839H208.909C209.57 101.839 209.869 101.362 209.57 100.77L200.492 82.6936L200.497 82.6982ZM20.9856 1.08354L44.3876 50.3526C44.6724 50.9495 45.1318 50.9495 45.4166 50.3526L68.8921 1.08354C68.8921 1.08354 68.8967 1.06518 68.9013 1.056C69.1631 0.472902 68.8599 0.00459129 68.2076 0.00459129H54.7149C54.0626 0.00459129 53.3183 0.472902 53.0243 1.056C53.0197 1.06977 53.0105 1.07895 53.0059 1.08813L45.412 17.2081C45.1685 17.7224 44.8056 17.7912 44.53 17.4193C44.484 17.3596 44.4381 17.2862 44.4013 17.199L36.9866 1.08813C36.7109 0.486676 35.9483 0 35.2868 0H21.6747C21.0315 0 20.7283 0.459129 20.9718 1.03763C20.9764 1.0514 20.981 1.06977 20.9902 1.08354H20.9856ZM336.485 14.4075H319.62C318.958 14.4075 318.421 14.9446 318.421 15.6058V60.357C318.421 61.0182 318.017 61.2018 317.521 60.7657L263.775 13.5351C263.279 13.0989 262.875 13.2826 262.87 13.9437L262.668 100.673C262.668 101.334 263.201 101.871 263.867 101.871H281.173C281.834 101.871 282.372 101.334 282.372 100.673V58.0935C282.372 57.4324 282.785 57.235 283.295 57.6574L336.76 101.697C337.27 102.119 337.688 101.922 337.688 101.261V15.6058C337.688 14.9446 337.151 14.4075 336.489 14.4075H336.485ZM89.1425 14.3891H69.3974C68.7359 14.3891 67.9595 14.8712 67.6655 15.4635L45.4166 60.357C45.1226 60.9493 44.6494 60.9493 44.3554 60.357L22.3868 15.4635C22.0974 14.8666 21.321 14.3845 20.6594 14.3845H0.771901C0.275746 14.3891 -0.0136773 14.6554 0.000104771 15.0411C0.00469879 15.1696 0.041451 15.3073 0.119549 15.4543L44.337 101.559C44.4886 101.853 44.6862 102 44.8837 102C45.0812 102 45.2788 101.853 45.435 101.559L89.7949 15.4543C90.0981 14.8666 89.8041 14.3891 89.1425 14.3891ZM843.885 100.797L799.971 13.7784C799.672 13.1862 799.19 13.1862 798.891 13.7784L754.977 100.797C754.904 100.949 754.867 101.086 754.862 101.215C754.849 101.601 755.143 101.871 755.639 101.871H774.658C775.32 101.871 776.087 101.385 776.367 100.788L784.039 84.4383V84.4659L785.615 81.0913C785.895 80.4898 786.658 80.0032 787.319 80.0032H811.249C811.911 80.0032 812.683 80.4852 812.968 81.0821L822.486 100.792C822.771 101.389 823.543 101.871 824.204 101.871H843.224C843.72 101.871 844.009 101.605 844 101.224V101.215C844 101.086 843.959 100.949 843.885 100.802V100.797ZM806.416 66.6196H792.294C791.633 66.6196 791.325 66.1375 791.615 65.5406L798.836 50.4766C799.121 49.8797 799.585 49.8797 799.875 50.4766L807.096 65.5406C807.381 66.1375 807.078 66.6196 806.416 66.6196ZM706.18 14.4075H689.315C688.653 14.4075 688.116 14.9446 688.116 15.6058V60.357C688.116 61.0182 687.711 61.2018 687.215 60.7657L633.47 13.5351C632.974 13.0989 632.569 13.2826 632.565 13.9437L632.363 100.673C632.363 101.334 632.896 101.871 633.557 101.871H650.863C651.524 101.871 652.062 101.334 652.062 100.673V58.0935C652.062 57.4324 652.475 57.235 652.985 57.6574L706.451 101.697C706.96 102.119 707.379 101.922 707.379 101.261V15.6058C707.379 14.9446 706.841 14.4075 706.18 14.4075ZM469.505 14.3983H385.967C385.305 14.3983 385.011 14.8758 385.315 15.4635L394.204 32.7313C394.507 33.319 395.288 33.7965 395.95 33.7965H417.045C417.707 33.7965 418.245 34.3336 418.245 34.9948V100.613C418.245 101.275 418.782 101.812 419.444 101.812H436.602C437.264 101.812 437.801 101.275 437.801 100.613V34.9994C437.801 34.3382 438.339 33.801 439 33.801H459.457C460.119 33.801 460.905 33.3236 461.208 32.7359L470.148 15.4635C470.451 14.8758 470.162 14.3983 469.5 14.3983H469.505ZM539.467 13.7784C539.168 13.1862 538.686 13.1862 538.387 13.7784L494.473 100.797C494.4 100.949 494.363 101.086 494.358 101.215C494.344 101.601 494.639 101.871 495.135 101.871H514.154C514.815 101.871 515.583 101.385 515.863 100.788L523.535 84.4383V84.4659L525.111 81.0913C525.391 80.4898 526.154 80.0032 526.815 80.0032H550.745C551.407 80.0032 552.179 80.4852 552.463 81.0821L561.982 100.792C562.267 101.389 563.039 101.871 563.705 101.871H582.724C583.386 101.871 583.68 101.394 583.381 100.802L539.467 13.783V13.7784ZM545.917 66.6196H531.795C531.133 66.6196 530.826 66.1375 531.115 65.5406L538.337 50.4766C538.622 49.8797 539.086 49.8797 539.375 50.4766L546.597 65.5406C546.882 66.1375 546.578 66.6196 545.917 66.6196Z" fill="white"/>
            </svg>
          </div>
          <div ref={textRef} className="text-center text-style-5 pb-2 xs:pb-0 2xs:pb-1 3xs:pb-1">
            <PrismicRichText field={slice.primary.headline} />
          </div>
          <div ref={buttonRef} className="pt-1 2xs:pt-4">
            <CommonButton link={slice.primary.button_link} label={slice.primary.button_text} filled={false} width={'w-[256px]'} />
          </div>
        </div>


        <div className="absolute h-full w-full top-0 left-0 -z-10">
          <video ref={videoRef} className="object-cover h-full" width="100%" height="100%" loop playsInline muted preload="none">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Welcome;





