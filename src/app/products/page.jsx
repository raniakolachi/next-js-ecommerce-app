"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams(); // Search parameters ke liye
    const id = searchParams.get('id'); // URL me `id` parameter access karein

    console.log(id, 'router');

    return (
        <div>
            <h1 className="bg-green-500 text-white text-3xl font-bold p-4">Products Details Base</h1>
         <h2 className='ms-4'>
            Product Titte
         </h2>
         <p className='ps-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam illo excepturi commodi aperiam obcaecati eum, quos, recusandae magni, eveniet velit maiores accusantium. Illo voluptates cum accusamus fuga? Veritatis, quos dicta.
         </p>
          <button className='bg-pink-400 text-white rounded ms-3 my-2 p-2'>
            Add to Cart
         </button> 
          
        </div>
    );
};

export default Page;
