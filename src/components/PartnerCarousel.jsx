import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import meituan from '../assets/partners/meituan.png';
import johamu from '../assets/partners/johamu.jpg';
import lu from '../assets/partners/lu.jpg';
import suntar from '../assets/partners/suntar.jpg';
import manwah from '../assets/partners/manwah.jpg';
import chengshi from '../assets/partners/chengshi.jpg';
import bohehealth from '../assets/partners/bohehealth.jpg';
import guazi from '../assets/partners/guazi.jpg';
import futuremove from '../assets/partners/futuremove.jpg';
import smoore from '../assets/partners/smoore.jpg';
import healthytree from '../assets/partners/healthytree.jpg';
import chesir from '../assets/partners/chesir.jpg';
import cscec from '../assets/partners/cscec.jpg';
import nanovision from '../assets/partners/nanovision.jpg';
import dashenlin from '../assets/partners/dashenlin.jpg';
import baiduhealth from '../assets/partners/baiduhealth.jpg';
import simcere from '../assets/partners/simcere.jpg';
import threeS from '../assets/partners/3s.jpg';
import suzhou from '../assets/partners/1734suzhou.jpg';
import sichuanyuanda from '../assets/partners/sichuanyuanda.jpg';
import huadong from '../assets/partners/huadong.jpg';
import sirtex from '../assets/partners/sirtex.jpg';
import grandpharma from '../assets/partners/grandpharma.jpg';

const partners = [
  { alt: 'Meituan', src: meituan },
  { alt: 'Johamu', src: johamu },
  { alt: 'Lu', src: lu },
  { alt: 'Suntar', src: suntar },
  { alt: 'Manwah', src: manwah },
  { alt: 'Chengshi', src: chengshi },
  { alt: 'Bohe Health', src: bohehealth },
  { alt: 'Guazi', src: guazi },
  { alt: 'FutureMove', src: futuremove },
  { alt: 'Smoore', src: smoore },
  { alt: 'Healthy Tree', src: healthytree },
  { alt: 'Chesir', src: chesir },
  { alt: 'CSCEC', src: cscec },
  { alt: 'Nanovision', src: nanovision },
  { alt: 'Dashenlin', src: dashenlin },
  { alt: 'Baidu Health', src: baiduhealth },
  { alt: 'Simcere', src: simcere },
  { alt: '3S Pharmaceutical Group', src: threeS },
  { alt: 'Suzhou 1734', src: suzhou },
  { alt: 'Sichuan Yuanda', src: sichuanyuanda },
  { alt: 'Huadong', src: huadong },
  { alt: 'Sirtex', src: sirtex },
  { alt: 'Grand Pharma', src: grandpharma },
];

const half = Math.ceil(partners.length / 2);
const topRow = partners.slice(0, half);
const bottomRow = partners.slice(half);

export default function PartnerCarousel({ language = 'en' }) {
  return (
    <div className="w-full bg-white py-8 sm:py-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8">
        {language === 'en' ? 'Our Partners' : '我们的合作伙伴'}
      </h2>
      <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
        {/* Top row: moves left (default) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          className="w-full"
        >
          {topRow.map((partner) => (
            <SwiperSlide key={partner.alt} className="flex justify-center items-center">
              <div className="h-16 sm:h-20 md:h-24 w-28 sm:w-32 md:w-40 flex items-center justify-center px-1 sm:px-2">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain transition-all duration-300 mx-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Bottom row: moves right (reverseDirection) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={4000}
          className="w-full"
        >
          {bottomRow.map((partner) => (
            <SwiperSlide key={partner.alt} className="flex justify-center items-center">
              <div className="h-16 sm:h-20 md:h-24 w-28 sm:w-32 md:w-40 flex items-center justify-center px-1 sm:px-2">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="object-contain transition-all duration-300 mx-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
} 