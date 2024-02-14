'use client';

import React from 'react';
import ExploreLayout from './ExploreLayout';

export default function Explore() {

  return (
    <ExploreLayout>
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='text-6xl text-white mb-5'>
                 CHAI
            </div>
            <div className='text-white w-[215px] text-center'>
            A Cup of tea changes bitter to better
            </div>
        </div>
    </ExploreLayout>
  );
}