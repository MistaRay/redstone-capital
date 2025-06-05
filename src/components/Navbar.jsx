import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-red-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <img src="/redstone1.jpg" alt="Redstone Capital Logo" className="h-12 w-12 rounded-full border-2 border-red-800" />
          <span className="text-2xl font-bold text-red-800 tracking-wide">Redstone Capital</span>
        </div>
        <div className="space-x-8">
          <Link to="/" className="text-black hover:text-red-800 font-semibold transition">Home</Link>
          <Link to="/about" className="text-black hover:text-red-800 font-semibold transition">About Us</Link>
          <Link to="/contact" className="text-black hover:text-red-800 font-semibold transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 