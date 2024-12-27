import React from 'react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import Counter from '../Counter';
import Image from 'next/image';
import Cover from '../../../public/cover.png';

const poppins = Poppins({
  weight: ['300', '400', '500', '800', '900'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <div
      className={`relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover ${poppins.className}`}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-50 h-full bg-zinc-100 bg-opacity-80"></div>

      {/* Hero Content */}
      <div className="z-50 mx-auto mt-6 flex w-[95%] flex-col-reverse md:flex-row items-center justify-between lg:w-[90%] xl:w-[1300px]">
        {/* Text Section */}
        <div className="w-full pt-5 md:w-1/2 md:py-10">
          <h1 className="text-center text-[2rem] font-extrabold leading-tight text-main sm:text-5xl md:text-left lg:text-6xl">
            Governor Sindh
          </h1>
          <h2 className="mt-3 text-center text-[1.5rem] font-medium text-main sm:text-4xl md:text-left lg:text-[2.5rem]">
            Kamran Khan Tessori
          </h2>
          <h3 className="mt-5 text-center text-[1.5rem] font-semibold text-sub sm:text-2xl md:text-left lg:text-[2rem]">
            Certified Cloud 
            <br />
            Applied Generative AI 
            <br />
            Engineer (GenEng)
          </h3>
          <p className="my-5 text-center text-[1.25rem] font-bold text-main sm:text-2xl md:text-left">
            Earn up to $5,000 / month
          </p>
          <p className="my-5 text-center text-[1.25rem] font-bold tracking-wide text-main sm:text-2xl md:w-[80%] md:text-left">
            Now admissions are open in Hyderabad
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col items-center sm:flex-row sm:gap-5 md:mt-10">
            <Link href="/apply" className="w-full sm:w-auto">
              <button className="w-full rounded-md bg-main py-3 text-sm font-semibold text-white hover:translate-y-1 sm:py-4 sm:text-base md:w-52">
                APPLY NOW
              </button>
            </Link>
            <Counter />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex w-full items-center justify-center md:justify-end">
          <Image
            src={Cover}
            alt="GIAIC"
            className="h-auto max-w-full lg:w-[600px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
