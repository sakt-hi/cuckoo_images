// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './Banner.css'

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

const Banner = () => {

  const imageUrl = 'src/assets/banner/sample_banner.jpeg'

  return (
    <div >
        <div className='absolute top-0 z-10 flex flex-col gap-5 items-start justify-center h-[95vh] w-[100%] bg-gradient-to-b from-black to-transparent'>
          <div className='flex flex-col justify-between items-start mx-10 md:mx-24'>
            <h2 className='text-[40px] font-bold text-white drop-shadow-xl mb-4' >
              Join with us, <br />We create <span className='text-amber-400'>unique</span> identity to your brand
            </h2>
            <button className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-black bg-white rounded-full hover:text-black group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-amber-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative font-semibold">Download Our Portfolio</span>
            </button>
          </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false
        // }}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
        effect="fade"
        speed={2000}
      >
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner