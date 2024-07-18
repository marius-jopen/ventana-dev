'use client'

import React, { useEffect, useRef } from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

export type DoubleTextProps = SliceComponentProps<Content.DoubleTextSlice>;

const DoubleText = ({ slice }: DoubleTextProps): JSX.Element => {

  return (
    <section className="px-4 md:px-8 pt-8 pb-40 mb-20 md:pb-28 lg:pb-24 xl:pb-20 bg-white h-auto min-h-[100vh]">
      <div className="grid grid-cols-12 md:grid-cols-24 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-11 md:col-start-2 bg-white/30 p-4 text-style-11 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.headline} />
        </div>
        
        <div className="col-span-12 md:col-span-11 md:col-start-13 bg-white/30 p-4 text-style-6 text-text-gray-on-black">
          <PrismicRichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default DoubleText;
