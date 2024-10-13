import { Wrapper } from '@/templates/wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { PortfolioManagementIcon, SeamlessTransactionsIcon, WalletSecurityIcon } from '@/shared/icons/slide';

const slides = [
  {
    icon: <WalletSecurityIcon />,
    title: "Wallet Security",
    text: "Your security is our priority",
  },
  {
    icon: <SeamlessTransactionsIcon />,
    title: "Seamless Transactions",
    text: "Effortless and instant transfers",
  },
  {
    icon: <PortfolioManagementIcon />,
    title: "Portfolio Management",
    text: "Track and manage all assets",
  }
];

export const WalletSlider = () => {
  return (
    <Wrapper cl="mt-4"> {}
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true, el: '.custom-pagination' }}
      >
        {slides.map((item, index) => (
        <SwiperSlide className="h-[60px]" key={index}>
          <div className='px-5 py-2 h-full flex items-center rounded-full gap-3 bg-secondary-100'>
            <span className='flex'>{item.icon}</span>
            <div>
              <h3 className='text-white text-sm'>{item.title}</h3>
              <p className='text-swiper-text text-xs'>{item.text}</p>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-3 flex justify-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-secondary-100 cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-secondary-100 cursor-pointer"></div>
        <div className="w-2 h-2 rounded-full bg-secondary-100 cursor-pointer"></div>
      </div>
    </Wrapper>
  );
};
