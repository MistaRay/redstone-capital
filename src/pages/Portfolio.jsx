import React, { useEffect, useState } from 'react';
import grandpharma from '../assets/partners/grandpharma.jpg';
import sirtex from '../assets/partners/sirtex.jpg';
import huadong from '../assets/partners/huadong.jpg';
import threeS from '../assets/partners/3s.jpg';
import simcere from '../assets/partners/simcere.jpg';
import baiduhealth from '../assets/partners/baiduhealth.jpg';
import meituan from '../assets/partners/meituan.png';
import smoore from '../assets/partners/smoore.jpg';
import manwah from '../assets/partners/manwah.jpg';
import './Portfolio.css';

const companies = [
  {
    name: { en: 'Grand Pharma', zh: '远大医药' },
    sector: { en: 'Biopharmaceuticals', zh: '生物医药' },
    info: {
      en: 'A leading biotech company focused on innovative therapies.',
      zh: '专注于创新疗法的领先生物技术公司。',
    },
    img: grandpharma,
    website: 'https://www.grandpharm.com/',
  },
  {
    name: { en: 'Sirtex', zh: '社泰' },
    sector: { en: 'High-end Manufacturing', zh: '高端制造' },
    info: {
      en: 'Advanced manufacturing solutions for the healthcare industry.',
      zh: '为医疗行业提供先进制造解决方案。',
    },
    img: sirtex,
    website: 'https://www.sirtex.com/',
  },
  {
    name: { en: 'Huadong Medicine', zh: '华东医药' },
    sector: { en: 'Healthcare', zh: '医药研发' },
    info: {
      en: 'A leading Chinese pharmaceutical company with strengths in innovative drug R&D,manufacturing, distribution, and medical aesthetics. ',
      zh: '中国领先的医药企业，专注于创新药物研发、生产、流通及医美领域',
    },
    img: huadong,
    website: 'https://www.eastchinapharm.com/',
  },
  {
    name: { en: '3S', zh: '三生制药' },
    sector: { en: 'Healthcare Services', zh: '医疗服务' },
    info: {
      en: 'Comprehensive healthcare service provider.',
      zh: '综合性医疗服务提供商。',
    },
    img: threeS,
    website: 'https://www.3sbio.com/',
  },
  {
    name: { en: 'Simcere', zh: '先声药业' },
    sector: { en: 'Medical Devices', zh: '医疗器械' },
    info: {
      en: 'Innovative medical device manufacturer.',
      zh: '创新型医疗器械制造商。',
    },
    img: simcere,
    website: 'https://www.simcere.com/',
  },
  {
    name: { en: 'Baidu Health', zh: '百度健康' },
    sector: { en: 'AI & Data', zh: '人工智能与数据' },
    info: {
      en: 'AI-driven data analytics for medical research.',
      zh: '面向医学研究的AI数据分析。',
    },
    img: baiduhealth,
    website: 'https://health.baidu.com/',
  },
  {
    name: { en: 'Meituan', zh: '美团' },
    sector: { en: 'Smart Retail', zh: '智慧零售' },
    info: {
      en: 'Leading e-commerce platform for services.',
      zh: '领先的服务电商平台。',
    },
    img: meituan,
    website: 'https://meituan.com/en',
  },
  {
    name: { en: 'Smoore', zh: '思摩尔' },
    sector: { en: 'Advanced Manufacturing', zh: '先进制造' },
    info: {
      en: 'Global leader in atomization technology.',
      zh: '全球领先的雾化科技企业。',
    },
    img: smoore,
    website: 'https://www.smooretech.com/',
  },
  {
    name: { en: 'Man Wah', zh: '敏华控股' },
    sector: { en: 'Furniture', zh: '家具' },
    info: {
      en: 'Top furniture manufacturer and retailer.',
      zh: '顶级家具制造商和零售商。',
    },
    img: manwah,
    website: 'https://www.manwahholdings.com/',
  },
];

export default function Portfolio({ language = 'en' }) {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    // Detect touch device (mobile/tablet)
    const checkTouch = () => {
      setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Close overlay when clicking outside (on mobile)
  useEffect(() => {
    if (!isTouch || openIndex === null) return;
    const handleClick = (e) => {
      if (!e.target.closest('.portfolio-card')) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isTouch, openIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 pt-36 pb-16 px-4">
      <h2 className="text-3xl font-bold text-red-800 mb-10 text-center">
        {language === 'en' ? 'Portfolio Companies' : '投资组合企业'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {companies.map((company, idx) => (
          <a
            key={company.name.en}
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`portfolio-card relative group rounded-xl shadow-lg bg-white overflow-hidden h-64 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer fade-in-up ${mounted ? 'fade-in-up-active' : ''}`}
            style={{ transitionDelay: `${idx * 80}ms` }}
            onClick={isTouch ? (e) => { e.preventDefault(); setOpenIndex(openIndex === idx ? null : idx); } : undefined}
          >
            <img 
              src={company.img} 
              alt={company.name[language === 'en' ? 'en' : 'zh']}
              className="w-full h-full object-contain p-6 bg-white"
            />
            {/* Overlay: hover for desktop, tap for mobile/tablet */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6
                ${isTouch && openIndex === idx ? '!opacity-100 z-20' : ''}`}
              style={{ pointerEvents: isTouch && openIndex === idx ? 'auto' : undefined }}
            >
              <div className="text-lg font-semibold mb-2">{company.sector[language === 'en' ? 'en' : 'zh']}</div>
              <div className="text-sm text-center">{company.info[language === 'en' ? 'en' : 'zh']}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 