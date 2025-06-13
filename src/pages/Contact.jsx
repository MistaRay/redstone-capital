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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-center p-2 pt-32 pb-10 sm:pt-48 sm:pb-24">
        {/* Title & Subtitle */}
        <h2 className="text-xl sm:text-2xl font-bold text-red-800 mb-2 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.1s]">
          {language === 'en' ? 'Contact Us' : '联系我们'}
        </h2>
        <p className="text-base sm:text-lg text-black max-w-xl mx-auto mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.2s]">
          {language === 'en'
            ? 'For more information, please contact us using the details below.'
            : '如需进一步了解红石资本，请通过以下方式联系我们。'}
        </p>
        {/* Main Content: Form + Info + Map */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full gap-6 md:gap-8 mt-2">
          {/* Left: Contact Form & Details */}
          <div className="flex-1 w-full max-w-md flex flex-col items-center mb-4 md:mb-0">
            <form 
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="bg-red-50/80 p-4 sm:p-6 rounded-2xl shadow-lg w-full border border-red-200 mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.3s]"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <input name="name" type="text" placeholder={language === 'en' ? 'Your Name' : '您的姓名'} className="w-full mb-3 p-2 border-b-2 border-red-800 focus:outline-none text-sm rounded bg-white/80" required />
              <input name="email" type="email" placeholder={language === 'en' ? 'Your Email' : '您的邮箱'} className="w-full mb-3 p-2 border-b-2 border-red-800 focus:outline-none text-sm rounded bg-white/80" required />
              <textarea name="message" placeholder={language === 'en' ? 'Your Message' : '您的留言'} className="w-full mb-3 p-2 border-b-2 border-red-800 focus:outline-none text-sm rounded bg-white/80" rows="3" required></textarea>
              <button type="submit" className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-black transition text-sm w-full font-semibold shadow">
                {language === 'en' ? 'Send' : '发送'}
              </button>
            </form>
            <div className="text-black text-xs sm:text-sm text-center leading-relaxed opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.4s] mb-2">
              <p className="font-bold text-red-800 mb-1">{language === 'en' ? 'Redstone Houfeng' : '红石厚峰'}</p>
              <p className="mb-1">
                {language === 'en'
                  ? '101, Building 1, and 201, Floor 2, No. 19, Lane 505, Zhongshan South Road, Huangpu District, Shanghai'
                  : '地址：上海市黄浦区中山南路505弄19号楼一幢一层101、二层201'}
              </p>
              <p className="mb-1">
                {language === 'en'
                  ? 'Tel: 021-63121030'
                  : '电话：021-63121030'}
              </p>
              <p>
                {language === 'en'
                  ? 'Email: '
                  : '邮箱：'}
                <a href="mailto:investor_relations@redstonecapital.cc" className="text-red-800 hover:underline break-all">investor_relations@redstonecapital.cc</a>
              </p>
            </div>
          </div>
          {/* Right: AMap Embed */}
          <div className="flex-1 w-full max-w-xl h-[260px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border-2 border-red-800 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.5s] mb-4 md:mb-0">
            <AMapMinimal longitude={121.506176} latitude={31.218886} />
          </div>
        </div>
      </div>
      <style>{fadeInUpStyle}</style>
    </>
  );
}

export default Contact;   