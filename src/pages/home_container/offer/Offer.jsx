import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {

    const [copied,setCopied]=useState(false)

    const handleCopy=() => {
        navigator.clipboard.writeText("GTECH08")
        .then(() => {
            setCopied(false);
            setTimeout(() =>{
                setCopied(true)
             },2000);
        })
        .catch((err) => {
            console.log('Failed to copy ', err)
        })
    }
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
          Special Offer
        </h1>
        <Link
          to="/offer"
          className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition duration-300"
        >
          View All
        </Link>
      </div>
      <div className="gap grid-cols-2 gap-16">
        <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center gap-x-3">
        </div>
      </div>
    </div>
  );
};

export default Offer;