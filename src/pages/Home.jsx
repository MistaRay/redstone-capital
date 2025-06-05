function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center p-8">
      <img src="/redstone1.jpg" alt="Redstone Capital Logo" className="w-40 h-40 mb-6 rounded-full border-4 border-red-800 shadow-lg" />
      <h1 className="text-4xl font-extrabold text-red-800 mb-4">Welcome to Redstone Capital</h1>
      <p className="text-lg text-black max-w-2xl mb-6">
        Redstone Capital is a premier Chinese investment firm dedicated to building lasting value and fostering growth across Asia and beyond. Our mission is to empower businesses and entrepreneurs with strategic capital and deep expertise.
      </p>
    </div>
  );
}

export default Home; 