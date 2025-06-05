function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center p-8">
      <img src="/redstone2.jpg" alt="Redstone Capital Alternate Logo" className="w-40 h-40 mb-6 rounded-lg border-4 border-red-800 shadow-lg" />
      <h2 className="text-3xl font-bold text-red-800 mb-4">About Us</h2>
      <p className="text-lg text-black max-w-2xl mb-6">
        Founded on the principles of integrity, innovation, and partnership, Redstone Capital has become a trusted name in investment across Asia. Our team combines deep local knowledge with global perspective, enabling us to identify unique opportunities and deliver exceptional results for our clients and partners.
      </p>
      <p className="text-md text-black max-w-2xl">
        We believe in building strong, long-term relationships and supporting the growth of visionary companies. Our expertise spans multiple sectors, including technology, finance, and real estate.
      </p>
    </div>
  );
}

export default About; 