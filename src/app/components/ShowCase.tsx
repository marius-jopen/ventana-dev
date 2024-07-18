'use client'

import React, { useEffect, useRef } from 'react';
import { PrismicNextImage } from '@prismicio/next';
import { ImageField, KeyTextField } from '@prismicio/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ShowCaseProps {
    imgSrc: ImageField;
    imgCaption: KeyTextField;
    variant?: any;
}

const ShowCase: React.FC<ShowCaseProps> = ({ imgSrc, imgCaption, variant }) => {
    const imageSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const imageSection = imageSectionRef.current;
        
        if (imageSection) {
            gsap.to(imageSection, {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: imageSection,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }
    }, []);

    return (
        <div ref={imageSectionRef} className="bg-slate-50 relative py-10 mt-24">
            {
                variant === "showCaseImageRightSmall" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="col-start-2 self-end md:pr-4">
                            <PrismicNextImage field={imgSrc} className="object-cover w-[90%] h-auto" />
                            <p className="text-center mt-4 text-text-gray-on-black w-[90%]">
                                {imgCaption}
                            </p>
                        </div>
                    </div>
                ) : variant === "showCaseImageLeftVertical" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-20%]">
                        <div className="self-stretch">
                            <PrismicNextImage field={imgSrc} className="object-cover w-[50%] h-full" />
                            <div className="text-center mt-4 text-text-gray-on-black w-[50%] px-4">
                                <p>{imgCaption}</p>
                            </div>
                        </div>
                    </div>
                ) : variant === "showCaseImageRightSmallest" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-[-20%]">
                        <div className="col-start-2 md:col-start-3 self-end flex justify-end">
                            <div className="w-[80%]">
                                <PrismicNextImage field={imgSrc} className="object-cover w-full h-auto" />
                                <div className="text-center mt-4 text-text-gray-on-black w-full px-4">
                                    <p>{imgCaption}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[-10%] 3xs:mt-[-60%] 2xs:mt-[-45%] xs:mt-[-40%] sm:mt-[-35%] md:mt-[-25%] lg:mt-[-20%] xl:mt-[-12%]">
                        <div className="col-span-2 self-center">
                            <PrismicNextImage field={imgSrc} className="object-cover w-[60%] 3xs:w-[90%] 2xs:w-[85%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%] h-auto" />
                            <div className="text-center mt-4 text-text-gray-on-black px-4 w-[60%] 3xs:w-[90%] 2xs:w-[85%] xs:w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[70%]">
                                <p>{imgCaption}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default ShowCase;
