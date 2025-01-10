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
          
        </div>
    );
};

export default Page;
