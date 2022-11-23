import SectionTitle from '../sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BlogItem from './blogItem';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useSwiper } from 'swiper/react';
import { useRef } from 'react';

export default function Blogs({ blogs }) {
  const swiperRef = useRef(null);

  return (
    <section
      id="blogs"
      className="mb-3  mt-12 z-20 flex flex-col overflow-visible  justify-center items-center "
    >
      <SectionTitle title="LATEST BLOGS" subTitle="BLOGS" />
      <div className="relative mb-12 xl:mb-0 w-full flex flex-co  lg:flex-row justify-between items-stretch overflow-visible gap-7 pt-2 lg:pt-4">
        <button
          className="bg-[#bfbecb] hover:scale-125 hover:bg-secondary-400 w-11 h-11 absolute right-[35%] xl:-right-16 -bottom-12 z-50 xl:top-[calc(50%_-_16px)] rounded-full flex justify-center items-center   "
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        >
          <div className="bg-[#1e1f35]  text-[#bfbecb]  hover:text-secondary-400 rounded-full w-10 h-10 flex justify-center items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  ml-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </button>
        <button
          className="bg-[#bfbecb] hover:scale-125 hover:bg-secondary-400 w-11 h-11 absolute left-[35%] xl:-left-16 -bottom-12 z-50 xl:top-[calc(50%_-_16px)] rounded-full flex justify-center items-center  "
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        >
          <div className="bg-[#1e1f35] text-[#bfbecb]  hover:text-secondary-400 rounded-full w-10 h-10 flex justify-center items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  mr-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
        </button>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          id="always-be-swipin"
          className=""
          pagination={{ clickable: true }}
        >
          {blogs?.slice(0, 10).map((item) => {
            return (
              <SwiperSlide className="" key={item?._id}>
                <BlogItem blog={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
