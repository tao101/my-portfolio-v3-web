import { urlFor } from '../../lib/sanity';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import dynamic from 'next/dynamic';

const DynamicStars = dynamic(() => import('react-stars'), {
  ssr: false,
});

export default function ReviewItem({ review }) {
  let stars = {
    value: review?.stars,
    edit: false,
    size: 18,
  };

  return (
    <div className="relative h-full group card hovercard circleprogress w-full  flex flex-col  items-stretch p-4 md:p-5">
      <div className="absolute -top-10 z-50 left-4 md:left-5 p-1 w-16 h-16 bg-secondary-400 rounded-full 	">
        <img
          className="rounded-full	"
          src={urlFor(review?.picture?.image)}
          alt={review?.picture?.alt}
        />
      </div>
      <h5 className="text-white mt-6 ">{review?.title}</h5>
      <p className="mb-2 text-[#bfbecb]">{review?.subtitle}</p>
      <div className="mb-2">
        <DynamicStars {...stars} />
      </div>
      <p className="text-[#bfbecb]">{review?.description}</p>
    </div>
  );
}
