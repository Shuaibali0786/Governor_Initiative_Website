"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Image from "next/image";
import React from "react";

// Importing images from the public folder
import Image1 from "../../../public/slideShow1.jpg";
import Image2 from "../../../public/slideShow2.jpg";
import Image3 from "../../../public/slideShow3.jpg";
import Image4 from "../../../public/slideShow4.jpg";
import Image5 from "../../../public/slideShow5.jpg";
import Image6 from "../../../public/slideShow6.jpg";
import Image7 from "../../../public/slideShow7.jpg";
import Image8 from "../../../public/slideShow8.jpg";

const ImagesCarousel = () => {
  // Image data array
  const data = [
    { img: Image1, title: "Student learning Web3 basics" },
    { img: Image2, title: "First meeting with the President." },
    { img: Image3, title: "President launching the PIAIC website." },
    { img: Image4, title: "Another event with the President." },
    { img: Image5, title: "President launching the PIAIC website." },
    { img: Image6, title: "Student learning in session." },
    { img: Image7, title: "Another student workshop." },
    { img: Image8, title: "President interacting with students." },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    dotsClass: "slick-dots line-indicator",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000, // Add autoplay speed
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mt-10 w-full">
      <Slider {...settings} className="w-full">
        {data.map((item, index) => (
          <div
            className="px-3 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none"
            key={index}
          >
            <div className="relative bg-slate-900 rounded-lg overflow-hidden">
              <Image
                src={item.img}
                className="w-full h-[300px] md:h-[600px] object-cover"
                alt={item.title}
                width={800}
                height={600}
                priority={index === 0} // Optimize loading for the first image
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">{item.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImagesCarousel;
