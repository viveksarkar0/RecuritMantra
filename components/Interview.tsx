import Image from "next/image";
import Link from "next/link";
import React from "react";

const Interviews = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-40">
          Interviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Beginner Card */}
          <Link href="/beginner">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
              <div
                className="h-48 flex items-center justify-center rounded-t-lg"
                style={{ backgroundColor: "#5b392d" }}
              >
                <Image
                  src="/beginner.png" 
                  alt="Beginner"
                  width={100}
                  height={100}
                  className="h-28 w-auto"
                />
              </div>
              <div className="p-6 border-black border-2 mt-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/image4.png" 
                    alt="Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">Beginner</h3>
                </div>
                <p className="text-gray-600 text-base mb-3">
                  Three Questions Must be Attempted
                </p>
                <p className="text-gray-800 text-lg">
                  Fee: <strong>10 Coins</strong>
                </p>
                <p className="text-gray-800 text-lg">
                  Reward: <strong>10-20 Coins</strong>
                </p>
              </div>
            </div>
          </Link>

          {/* Intermediate Card */}
          <Link href="/intermediate">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
              <div
                className="h-48 flex items-center justify-center rounded-t-lg"
                style={{ backgroundColor: "#5b392d" }}
              >
                <Image
                  src="/intermidiate.png" 
                  alt="Intermediate"
                  width={100}
                  height={100}
                  className="h-28 w-auto"
                />
              </div>
              <div className="p-6 border-black border-2 mt-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/image4.png" 
                    alt="Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Intermediate
                  </h3>
                </div>
                <p className="text-gray-600 text-base mb-3">
                  Seven Questions Must be Attempted
                </p>
                <p className="text-gray-800 text-lg">
                  Fee: <strong>15 Coins</strong>
                </p>
                <p className="text-gray-800 text-lg">
                  Reward: <strong>15-35 Coins</strong>
                </p>
              </div>
            </div>
          </Link>

          {/* Advanced Card */}
          <Link href="/advanced">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
              <div
                className="h-48 flex items-center justify-center rounded-t-lg"
                style={{ backgroundColor: "#5b392d" }}
              >
                <Image
                  src="/advance.png" 
                  alt="Advanced"
                  width={100}
                  height={100}
                  className="h-28 w-auto"
                />
              </div>
              <div className="p-6 border-black border-2 mt-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/image4.png" 
                    alt="Icon"
                    width={60}
                    height={60}
                    className="mr-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800">Advanced</h3>
                </div>
                <p className="text-gray-600 text-base mb-3">
                  More than 10 Questions will be Asked
                </p>
                <p className="text-gray-800 text-lg">
                  Fee: <strong>25 Coins</strong>
                </p>
                <p className="text-gray-800 text-lg">
                  Reward: <strong>25-75 Coins</strong>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Interviews;
