interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl text-white/80 font-bold">PRESSA</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-white/50 hover:text-white/80 transition-colors">About</a>
          <a href="#services" className="text-white/50 hover:text-white/80 transition-colors">Services</a>
          <a href="#testimonials" className="text-white/50 hover:text-white/80 transition-colors">Testimonial</a>
        </div>
        <button className="bg-white/80 text-black/80 px-6 py-2 rounded-full font-medium hover:bg-white transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
}