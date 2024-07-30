"use client"
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicImage } from "@prismicio/react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

/**
 * Props for `HomeGallery`.
 */
export type HomeGalleryProps = SliceComponentProps<Content.HomeGallerySlice>;

/**
 * Component for "HomeGallery" Slices.
 */
const HomeGallery = ({ slice }: HomeGalleryProps): JSX.Element => {

  useEffect(() => {
    AOS.init({
      offset: 30,
      once: true,
      duration: 1400, 
    });
  }, []);

  return (
    <section 
    className="bg-offWhite h-full block w-full overflow-x-hidden"
    slice-name="hom-gallery"
    data-slice="style-white"
    >
        <div className="bg-white h-32 ">
          </div>
      <div className="-mt-32  grid grid-cols-12 grid-flow-row auto-rows-max md:grid-cols-24 distance-bottom-4">

        <div data-aos="fade-up"  className="row-start-1 col-start-2 col-end-17">
          <PrismicImage field={slice.primary.image_1} />
        </div>

        <div data-aos="fade-up"  className="row-start-2 col-start-12 col-end-24 distance-top-3">
          <PrismicImage field={slice.primary.image_2} />
        </div>

        <div data-aos="fade-up"  className="row-start-3 col-start-1 col-end-11 distance-top-3">
          <PrismicImage field={slice.primary.image_3} />
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
