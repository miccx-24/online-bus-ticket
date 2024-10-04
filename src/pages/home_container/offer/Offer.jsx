import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Save from "../../../assets/save.png";
import { FaCopy } from 'react-icons/fa';

const Offer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("MSC08")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset the copied state after 2 seconds
      })
      .catch((err) => {
        console.log('Failed to copy ', err);
      });
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          Special Offer
        </h1>
        <Link
          to="/offer"
          className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition duration-300"
        >
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="w-full h-auto rounded-xl bg-gradient-to-br from-purple-200 to-blue-200 dark:from-zinc-700 dark:to-zinc-800 p-8 flex items-center gap-x-6 shadow-lg hover:shadow-2xl transition duration-300">
          <img src={Save} alt="Special Offer" className="w-52 aspect-[2/1] object-contain object-center rounded-lg shadow-md" />
          <div className="flex flex-1 flex-col space-y-5">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              Get 30% off on your first booking
            </h1>
            <div className="flex items-center gap-x-4">
              <div className="w-fit border border-dashed px-4 py-1 border-gray-400 dark:border-gray-500 bg-violet-500/10 dark:bg-violet-700/10 rounded-md flex items-center space-x-3">
                {copied ? (
                  <span className="text-green-500 font-medium">Code Copied!</span>
                ) : (
                  <span className="text-violet-600 dark:text-violet-400 font-semibold">MSC08</span>
                )}
              </div>
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="text-2xl text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-500 transition duration-300"
              >
                <FaCopy />
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Valid till: <span className="font-medium">13th November</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
