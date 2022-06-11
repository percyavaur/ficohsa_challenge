import React from "react";
import { FaStar } from "react-icons/fa";

const DetailSkeleton = () => {
  return (
    <div>
      <div className="border border-gray-400 shadow-md rounded-md max-w-xl p-4 relative animate-pulse">
        <div className="flex flex-row space-x-2">
          {/* Image */}
          <div className="bg-gray-400 h-80 w-56"></div>
          <div className="max-w-xs">
            <div className="mb-4">
              {/* Title */}
              <div>
                <div className="h-4 bg-gray-400 rounded w-72 mb-1"></div>
                <div className="h-4 bg-gray-400 rounded w-64 mb-1"></div>
              </div>
              {/* Score */}
              <div className="flex flex-row items-center space-x-1">
                <FaStar color="gray" />
                <div className="h-4 bg-gray-400 rounded w-10"></div>
              </div>
            </div>
            {/* Synopsis */}
            <div className="">
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded mb-1"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
            <ul className="mt-4 grid grid-cols-2">
              <li>
                <div className="font-semibold text-blue-500 self-end">
                  <div className="h-4 bg-gray-400 rounded w-32 mb-2"></div>
                </div>
              </li>
              <li>
                <div className="font-semibold text-blue-500 self-end">
                  <div className="h-4 bg-gray-400 rounded w-32 mb-2"></div>
                </div>
              </li>
              <li>
                <div className="font-semibold text-blue-500 self-end">
                  <div className="h-4 bg-gray-400 rounded w-32 mb-2"></div>
                </div>
              </li>
              <li>
                <div className="font-semibold text-blue-500 self-end">
                  <div className="h-4 bg-gray-400 rounded w-32 mb-2"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
