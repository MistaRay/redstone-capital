import AMapMinimal from '../components/AMapMinimal';
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

function Contact({ language }) {
  return (
    <>
      <FadeInUpStyle />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-br from-red-50 via-white to-red-100 text-center p-4 pt-48 pb-64 gap-8">
        {/* Left: Contact Form & Details */}
        <div className="flex-1 max-w-md w-full flex flex-col items-center mb-8 md:mb-0">
          <h2 className="text-xl font-bold text-red-800 mb-2 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.1s]">
            {language === 'en' ? 'Contact Us' : '联系我们'}
          </h2>
          <p className="text-base text-black max-w-xl mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.2s]">
            {language === 'en'
              ? 'For more information, please contact us using the details below.'
              : '如需进一步了解红石资本，请通过以下方式联系我们。'}
          </p>
          <form className="bg-red-50 p-4 rounded-lg shadow-md w-full border border-red-200 mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.3s]">
            <input type="text" placeholder={language === 'en' ? 'Your Name' : '您的姓名'} className="w-full mb-2 p-1 border-b-2 border-red-800 focus:outline-none text-sm" required />
            <input type="email" placeholder={language === 'en' ? 'Your Email' : '您的邮箱'} className="w-full mb-2 p-1 border-b-2 border-red-800 focus:outline-none text-sm" required />
            <textarea placeholder={language === 'en' ? 'Your Message' : '您的留言'} className="w-full mb-2 p-1 border-b-2 border-red-800 focus:outline-none text-sm" rows="3" required></textarea>
            <button type="submit" className="bg-red-800 text-white px-4 py-1 rounded hover:bg-black transition text-sm">
              {language === 'en' ? 'Send' : '发送'}
            </button>
          </form>
          <div className="text-black text-xs opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.4s]">
            <p>
              {language === 'en'
                ? 'Redstone Houfeng'
                : '红石厚峰'}
            </p>
            <p>
              {language === 'en'
                ? '101, Building 1, and 201, Floor 2, No. 19, Lane 505, Zhongshan South Road, Huangpu District, Shanghai'
                : '地址：上海市黄浦区中山南路505弄19号楼一幢一层101、二层201'}
            </p>
            <p>
              {language === 'en'
                ? 'Tel: 021-63121030'
                : '电话：021-63121030'}
            </p>
            <p>
              {language === 'en'
                ? 'Email: '
                : '邮箱：'}
              <a href="mailto:investor_relations@redstonecapital.cc" className="text-red-800 hover:underline">investor_relations@redstonecapital.cc</a>
            </p>
          </div>
        </div>
        {/* Right: AMap Embed */}
        <div className="flex-1 w-full max-w-xl h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-md border-2 border-red-800 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.5s]">
          <AMapMinimal longitude={121.506176} latitude={31.218886} />
        </div>
      </div>
      <style>{fadeInUpStyle}</style>
    </>
  );
}

export default Contact;   