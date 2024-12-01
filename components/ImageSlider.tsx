'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import slidebarlogo from '@/public/slider 1.png'
import slidebarlogo2 from'@/public/slider 2.png'
import slidebarlogo3 from '@/public/slider 3.png'
// Add your images here
const images = [
  slidebarlogo,
  slidebarlogo2,
  slidebarlogo3
 
];

const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
