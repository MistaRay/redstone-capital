function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-800 to-red-600 text-white py-4 w-full">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-2">
        <div className="flex gap-4 mb-2">
          <a href="#" className="hover:opacity-80 transition" title="WeChat">
            <img src="/wechat-removebg-preview.png" alt="WeChat Logo" className="w-7 h-7 rounded shadow-md object-contain bg-white" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition" title="LinkedIn">
            <img src="/linkedin-removebg-preview.png" alt="LinkedIn Logo" className="w-7 h-7 rounded shadow-md object-contain bg-white" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} 红石厚峰. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 