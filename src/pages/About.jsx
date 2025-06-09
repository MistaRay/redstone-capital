import { FaChartPie, FaUserTie, FaStar, FaHandshake, FaMapMarkerAlt } from 'react-icons/fa';
import { useEffect } from 'react';

// Add custom keyframes for fade-in-up
const fadeInUpStyle = `
@keyframes fadeinup {
  0% { opacity: 0; transform: translateY(32px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeinup {
  animation: fadeinup 1.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}
`;

function FadeInUpStyle() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = fadeInUpStyle;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  return null;
}

function About({ language }) {
  const sections = [
    {
      icon: <FaChartPie className="text-red-700 text-2xl mb-2" />, bg: 'bg-white',
      title: language === 'en' ? 'Overview' : '公司简介',
      content: language === 'en'
        ? `Redstone Capital is a diversified alternative investment management firm with a strong focus on the healthcare sector. Its investment strategies span across equity investments, fixed income and special situations, and secondary market investments. The firm is committed to supporting companies throughout their entire life cycle—from growth stages to maturity, including mergers and acquisitions, and structured financing.`
        : `红石资本是一家深耕医疗领域的多元化另类投资管理机构，投资策略覆盖股权投资、固定收益及特殊机会投资、以及二级市场投资三大方向。该机构专注于通过私募股权、债务工具和市场投资等多样化方式，为企业提供从成长期到成熟期甚至并购重组和结构性融资阶段的资金支持。`
    },
    {
      icon: <FaChartPie className="text-red-700 text-2xl mb-2" />, bg: 'bg-red-50',
      title: language === 'en' ? 'Investment Focus' : '投资重点',
      content: (
        <ul className="text-left ml-4 list-disc">
          {language === 'en' ? (
            <>
              <li>70% in biopharmaceuticals (partners: Yuanda Pharmaceuticals, Sirtex Medical)</li>
              <li>30% in high-end manufacturing & next-gen IT (partners: China State Construction Group)</li>
              <li>Special opportunities with Cinda Asset Management</li>
              <li>Capital sources: sovereign wealth funds, family offices, corporations, investment institutions, insurance, banks</li>
              <li>60% domestic, 40% overseas investments</li>
            </>
          ) : (
            <>
              <li>约70%资金投入生物医药领域（战略伙伴：远大医药、社泰医药）</li>
              <li>30%投资高端制造与新一代信息技术（战略伙伴：中建集团）</li>
              <li>与信达资产在特殊机会投资方面紧密合作</li>
              <li>资金来源多元：主权基金、家族办公室、企业、投资机构、险资、银行</li>
              <li>投资策略涵盖境内（60%）和境外（40%）市场</li>
            </>
          )}
        </ul>
      )
    },
    {
      icon: <FaHandshake className="text-red-700 text-2xl mb-2" />, bg: 'bg-white',
      title: language === 'en' ? 'Landmark Deals' : '标志性交易',
      content: language === 'en'
        ? `Among Redstone's landmark projects is the $1.5 billion acquisition of Sirtex Medical, one of only two companies globally offering targeted internal radiation therapy for liver cancer. Sirtex has product approvals in 70+ countries, direct operations in China, the US, Singapore, and Germany, 300+ employees, distribution in 1,200+ medical centers, and over 120,000 doses sold.`
        : `红石资本主导的Sirtex并购案为总规模达15亿美元的重大医疗行业跨境并购。Sirtex是全球仅有的两家拥有靶向内放射肝癌治疗产品的公司之一，产品覆盖70+国家，1200+医学中心，累计售出12万剂，在中国、美国、新加坡、德国设有基地，全球员工约300人。`
    },
    {
      icon: <FaMapMarkerAlt className="text-red-700 text-2xl mb-2" />, bg: 'bg-red-50',
      title: language === 'en' ? 'Contact' : '联系方式',
      content: (
        <div className="">
          <div>{language === 'en' ? 'Redstone Houfeng' : '红石厚峰'}</div>
          <div>{language === 'en'
            ? '101, Building 1, and 201, Floor 2, No. 19, Lane 505, Zhongshan South Road, Huangpu District, Shanghai'
            : '地址：上海市黄浦区中山南路505弄19号楼一幢一层101、二层201'}</div>
          <div>{language === 'en' ? 'Tel: 021-63121030' : '电话：021-63121030'}</div>
          <div>{language === 'en' ? 'Email: ' : '邮箱：'}
            <a href="mailto:investor_relations@redstonecapital.cc" className="text-red-800 hover:underline">investor_relations@redstonecapital.cc</a>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <FadeInUpStyle />
      <div className="flex flex-col items-center min-h-[60vh] bg-white text-center p-4 pt-32 pb-64">
        <img src="/redstone1.jpg" alt="Redstone Capital Alternate Logo" className="w-60 h-58 mb-4 rounded-lg opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.1s]"/>
        <h2 className="text-2xl font-bold text-red-800 mb-6 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.2s]">
          {language === 'en' ? 'About Us' : '关于我们'}
        </h2>
        <div className="w-full max-w-3xl grid gap-6">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className={`relative ${section.bg} rounded-xl shadow-lg p-6 text-left flex flex-col items-start border-l-8 border-red-200 hover:border-red-700 transition-all duration-300 opacity-0 translate-y-8 animate-fadeinup`}
              style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
            >
              <div className="flex items-center mb-2 w-full">
                <span className="mr-2">{section.icon}</span>
                <h3 className="text-lg font-bold text-red-800">{section.title}</h3>
              </div>
              <div className="pl-0 w-full">{section.content}</div>
            </div>
          ))}
        </div>
        <a href="/contact" className="mt-8 inline-block bg-red-800 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-black transition text-base opacity-0 translate-y-8 animate-fadeinup [animation-delay:1.2s]">
          {language === 'en' ? 'Contact Us' : '联系我们'}
        </a>
      </div>
    </>
  );
}

export default About; 