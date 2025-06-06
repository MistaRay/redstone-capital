import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PartnerCarousel from '../components/PartnerCarousel';
import { useRef, useEffect, useState } from 'react';

// Dynamically import all partner images as URLs
const partnerImages = import.meta.glob('../assets/partners/*.{png,jpg,jpeg}', { eager: true, as: 'url' });
const partnerImageList = Object.values(partnerImages);

function Home({ language }) {
  const carouselSectionRef = useRef(null);
  const [carouselInView, setCarouselInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setCarouselInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (carouselSectionRef.current) {
      observer.observe(carouselSectionRef.current);
    }
    return () => {
      if (carouselSectionRef.current) observer.unobserve(carouselSectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-red-50 via-white to-red-100 text-center p-4 pt-32 pb-64">
        {/* Abstract background shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-red-100 rounded-full blur-2xl opacity-30 -z-10" />
        {/* Animated logo */}
        <img
          src="/redstone1.jpg"
          alt="Redstone Capital Logo"
          className="w-48 h-48 mb-4 rounded-full border-4 border-red-800 shadow-xl opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.1s] bg-white"
        />
        <h1 className="text-4xl font-extrabold text-red-800 mb-2 drop-shadow-lg opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.2s]">
          {language === 'en' ? 'Welcome to 红石厚峰' : '欢迎来到红石厚峰'}
        </h1>
        <div className="w-20 h-1 bg-red-800 rounded mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.4s]"></div>
        <p className="text-xl text-black max-w-2xl mb-6 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.6s]">
          {language === 'en'
            ? 'Redstone Capital is a leading Chinese alternative investment firm, deeply focused on the healthcare sector and strategic industries. We specialize in empowering businesses and entrepreneurs through long-term capital and deep domain expertise. Our portfolio spans biopharmaceuticals, high-end manufacturing, and new-generation information technologies.\n\nOur mission is to be a creator of lasting value and a trusted partner for innovation-driven enterprises across China and globally'
            : '红石厚峰是中国领先的另类投资管理机构，深耕生物医药等战略性行业。我们致力于通过长期资本和专业赋能，助力企业家和创业公司在中国及全球实现可持续增长。\n\n我们的投资覆盖生物医药、高端制造、新一代信息技术等领域，并与多家战略伙伴建立了深入合作关系。\n\n我们的使命是成为推动价值创造的引领者，以及创新驱动型企业的长期合作伙伴。'}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <div className="card-modern bg-red-50 border-l-4 border-red-800 p-10 rounded shadow w-56 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.8s]">
            <h3 className="text-xl font-bold text-red-800 mb-1">
              {language === 'en' ? 'Integrity' : '诚信'}
            </h3>
            <p className="text-md text-black">
              {language === 'en'
                ? 'We uphold the highest standards of integrity in all our actions and decisions.'
                : '我们在所有行为和决策中坚持最高的诚信标准。'}
            </p>
          </div>
          <div className="card-modern bg-red-50 border-l-4 border-red-800 p-10 rounded shadow w-56 opacity-0 translate-y-8 animate-fadeinup [animation-delay:1s]">
            <h3 className="text-xl font-bold text-red-800 mb-1">
              {language === 'en' ? 'Innovation' : '创新'}
            </h3>
            <p className="text-md text-black">
              {language === 'en'
                ? 'We embrace innovation to drive growth and create new opportunities for our partners.'
                : '我们以创新驱动增长，为合作伙伴创造新机遇。'}
            </p>
          </div>
          <div className="card-modern bg-red-50 border-l-4 border-red-800 p-10 rounded shadow w-56 opacity-0 translate-y-8 animate-fadeinup [animation-delay:1.2s]">
            <h3 className="text-xl font-bold text-red-800 mb-1">
              {language === 'en' ? 'Partnership' : '合作'}
            </h3>
            <p className="text-md text-black">
              {language === 'en'
                ? 'We believe in building strong, long-term relationships with our clients and communities.'
                : '我们致力于与客户和社区建立稳固的长期关系。'}
            </p>
          </div>
        </div>
        <a href="/contact" className="inline-flex items-center gap-2 bg-red-800 text-white px-5 py-2 rounded-full font-semibold text-base shadow hover:bg-black transition opacity-0 translate-y-8 animate-fadeinup [animation-delay:1.4s]">
          {language === 'en' ? 'Contact Us' : '联系我们'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 12H6.75m0 0l5.25-5.25M6.75 12l5.25 5.25" />
          </svg>
        </a>
      </div>
      {/* Animated red gradient background as user scrolls to carousel */}
      <section
        ref={carouselSectionRef}
        className={`w-full bg-white relative py-16 transition-all duration-1000 ${carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        style={{ minHeight: 400 }}
      >
        <div className={`transition-all duration-1000 ${carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <PartnerCarousel language={language} />
        </div>
      </section>
      <style>{`
        @keyframes fadeinup {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeinup {
          animation: fadeinup 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </>
  );
}

export default Home; 