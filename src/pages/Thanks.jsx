import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

function Thanks({ language }) {
  return (
    <>
      <FadeInUpStyle />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-center p-2 pt-32 pb-10 sm:pt-48 sm:pb-24">
        <div className="max-w-xl mx-auto">
          {/* Icon */}
          <div className="mb-6 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.1s]">
            <svg className="w-16 h-16 mx-auto text-red-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Thank You Message */}
          <h2 className="text-2xl sm:text-3xl font-bold text-red-800 mb-4 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.2s]">
            {language === 'en' ? 'Thank You!' : '感谢您的留言！'}
          </h2>
          <p className="text-base sm:text-lg text-black mb-8 opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.3s]">
            {language === 'en' 
              ? 'Your message has been received. We will get back to you soon.'
              : '我们已收到您的留言，我们会尽快与您联系。'}
          </p>
          
          {/* Return Home Button */}
          <Link 
            to="/" 
            className="inline-block bg-red-800 text-white px-8 py-3 rounded-full hover:bg-black transition duration-300 text-sm font-semibold shadow opacity-0 translate-y-8 animate-fadeinup [animation-delay:0.4s]"
          >
            {language === 'en' ? 'Return to Homepage' : '返回首页'}
          </Link>
        </div>
      </div>
      <style>{fadeInUpStyle}</style>
    </>
  );
}

export default Thanks; 