function Footer() {
  return (
    <footer className="bg-red-800 text-white py-4 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Redstone Capital. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 