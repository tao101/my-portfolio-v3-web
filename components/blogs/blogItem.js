import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BlogItem({ blog }) {
  return (
    <div className="relative group h-unset md:h-full  card hovercard circleprogress w-full  flex flex-col  items-stretch p-4 md:p-5">
      <Link href={'/blog/post/' + blog?.slug?.current}>
        <a className=" rounded-lg overflow-hidden ">
          <img
            className=" hover:scale-125 ease-in duration-500 hover:cursor-pointer"
            src={urlFor(blog?.image?.image).width(341).height(164)}
            alt={blog?.image?.alt}
          />
        </a>
      </Link>

      <Link className=" " href={'/blog/post/' + blog?.slug?.current}>
        <div className="flex-1  ">
          <h4 className="text-white mt-6 hover:text-secondary-400 mb-3">
            <Link href={'/blog/post/' + blog?.slug?.current}>
              {blog?.title}
            </Link>
          </h4>

          <p className="text-[#bfbecb] hover:text-secondary-400 hover:cursor-pointer">
            {blog?.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
