import ImageSlider from "@/components/ImageSlider";
import React from "react";
import Image from "next/image";
import image from "@/public/image1.png"; 
import Interviews from "@/components/Interview";

const Home: React.FC = () => {
  return (
    <div>
      <ImageSlider />
      <section className="flex items-center justify-between py-12 px-6 m-10 ">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <br />
            RecruitMantra
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            We are dedicated to preparing you for your upcoming interviews
            through our comprehensive levels of interview preparation. Our goal
            is to instill confidence in you and equip you with the skills and
            knowledge needed to excel in your interviews, ultimately making you
            job-ready. With our tailored approach and real-time analysis of your
            interview, we ensure that you are fully prepared to tackle any
            interview scenario with confidence and success.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src={image}
            alt="image"
            className="rounded-lg shadow-xl"
            layout="responsive"
            width={500} 
            height={300} 
          />
        </div>
      </section>
      <Interviews/>
    </div>
  );
};

export default Home;
