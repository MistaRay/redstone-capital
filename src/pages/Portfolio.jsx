import React from 'react';

const companies = [
  {
    name: { en: 'Company A', zh: '公司A' },
    sector: { en: 'Biopharmaceuticals', zh: '生物医药' },
    info: {
      en: 'A leading biotech company focused on innovative therapies.',
      zh: '专注于创新疗法的领先生物技术公司。',
    },
    img: '', // Placeholder for image
  },
  {
    name: { en: 'Company B', zh: '公司B' },
    sector: { en: 'High-end Manufacturing', zh: '高端制造' },
    info: {
      en: 'Advanced manufacturing solutions for the healthcare industry.',
      zh: '为医疗行业提供先进制造解决方案。',
    },
    img: '',
  },
  {
    name: { en: 'Company C', zh: '公司C' },
    sector: { en: 'Information Technology', zh: '信息技术' },
    info: {
      en: 'Next-gen IT services empowering digital transformation.',
      zh: '赋能数字化转型的新一代信息技术服务。',
    },
    img: '',
  },
  {
    name: { en: 'Company D', zh: '公司D' },
    sector: { en: 'Healthcare Services', zh: '医疗服务' },
    info: {
      en: 'Comprehensive healthcare service provider.',
      zh: '综合性医疗服务提供商。',
    },
    img: '',
  },
  {
    name: { en: 'Company E', zh: '公司E' },
    sector: { en: 'Medical Devices', zh: '医疗器械' },
    info: {
      en: 'Innovative medical device manufacturer.',
      zh: '创新型医疗器械制造商。',
    },
    img: '',
  },
  {
    name: { en: 'Company F', zh: '公司F' },
    sector: { en: 'AI & Data', zh: '人工智能与数据' },
    info: {
      en: 'AI-driven data analytics for medical research.',
      zh: '面向医学研究的AI数据分析。',
    },
    img: '',
  },
];

export default function Portfolio({ language = 'en' }) {
  return (
    <div className="min-h-screen bg-white pt-36 pb-16 px-4">
      <h2 className="text-3xl font-bold text-red-800 mb-10 text-center">
        {language === 'en' ? 'Portfolio Companies' : '投资组合企业'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {companies.map((company, idx) => (
          <div
            key={company.name.en}
            className="relative group rounded-xl shadow-lg border border-red-200 bg-white overflow-hidden h-64 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center bg-red-50">
              <span className="text-2xl text-red-300 font-bold">{company.name[language === 'en' ? 'en' : 'zh']}</span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
              <div className="text-lg font-semibold mb-2">{company.sector[language === 'en' ? 'en' : 'zh']}</div>
              <div className="text-sm text-center">{company.info[language === 'en' ? 'en' : 'zh']}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 