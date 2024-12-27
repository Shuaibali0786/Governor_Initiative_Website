import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaYoutube , FaTwitter, FaInstagram, FaTiktok} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";



const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex  ">
        <div className=' mt-10 mb-10 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  '>
          <div>
            <h3 className='text-xl font-bold mb-4 '>Core Courses</h3>
            <ul className='space-y-2 text-lg '>
               <Link href="#"><li className='py-1'>Programming Fundamentals </li></Link>
              <Link href="#"><li className='py-1' >Web2 Using NextJS</li></Link>
              <Link href="#"><li className='py-1' >Earn as You Learn</li></Link>
            </ul>
          </div>
          <div>
          <h3 className='text-xl font-bold mb-4'>Advanced Courses</h3>
          <ul className='space-y-2 text-lg'>
          <Link href="#"><li className='py-1'>Cloud-Native Computig</li></Link>
          <Link href="#"><li className='py-1'>Artificial Intelligence(AI) and Deep Learning</li></Link>
          <Link href="#"><li className='py-1'>Web 3 and Metaverse</li></Link>
          <Link href="#"><li className='py-1'>Ambent Computing and IoT</li></Link>
          <Link href="#"><li className='py-1'>Genomics and Bioinformatics</li></Link>
          <Link href="#">Network Programmability and Automation</Link>
        </ul>
          </div>
           <div>
          <h3 className='text-xl font-bold mb-4' >Social links</h3>
          <div className='flex space-x-4 mb-4 py-1'>
            <Link href="#"><FaFacebookF className='w-6 h-6 rounded-full bg-blue-800 text-white pt-1 pb-1'/></Link>   
            <Link href="#"><FaYoutube className='w-6 h-6 rounded-full bg-red-600 text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTwitter className='w-6 h-6 rounded-full bg-blue-400 text-white pt-1 pb-1'/></Link>
            <Link href="#"><FaInstagram  className=' instagrame w-6 h-6 rounded-full  text-white pt-1 pb-1'/></Link>
            <Link href="#">< FaTiktok className='w-6 h-6 rounded-full bg-black text-white pt-1 pb-1'/></Link>
          </div>
          <Link href="mailto:education@governorsindh.com" target="_blank" className='text-blue-800 underline flex items-center gap-3'>
          <MdOutlineMail className='size-5'/> 
            education@governorsindh.com</Link>
          </div>
        </div>
      </footer>
    </div>
   
  );
};

export default Footer;
