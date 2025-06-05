function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center p-8">
      <h2 className="text-3xl font-bold text-red-800 mb-4">Contact Us</h2>
      <p className="text-lg text-black max-w-2xl mb-6">
        Interested in working with Redstone Capital or have questions? Reach out to us below.
      </p>
      <form className="bg-red-50 p-6 rounded-lg shadow-md w-full max-w-md border border-red-200 mb-6">
        <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border-b-2 border-red-800 focus:outline-none" required />
        <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border-b-2 border-red-800 focus:outline-none" required />
        <textarea placeholder="Your Message" className="w-full mb-4 p-2 border-b-2 border-red-800 focus:outline-none" rows="4" required></textarea>
        <button type="submit" className="bg-red-800 text-white px-6 py-2 rounded hover:bg-black transition">Send</button>
      </form>
      <div className="text-black">
        <p>Email: <a href="mailto:info@redstonecapital.com" className="text-red-800 hover:underline">info@redstonecapital.com</a></p>
        <p>Phone: <span className="text-red-800">+86 123 4567 8901</span></p>
        <p>Address: <span className="text-red-800">Beijing, China</span></p>
      </div>
    </div>
  );
}

export default Contact; 