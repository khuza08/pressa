export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center z-10 max-w-4xl px-6 flex-grow flex flex-col justify-center">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight md:text-6xl text-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Where <span className="text-white/50">Fashion</span> Meets <br />
          Digital Elevation
        </h1>
        <p 
          className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto md:text-xl text-base"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          We craft websites that are not only visually stunning but also strengthen your fashion brand's identity and make it easier for customers to find you online.
        </p>
      </div>
      <div 
        className="z-10 pb-16 animate-pulse"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <p className="text-sm mb-2 md:text-sm text-xs">Scroll Down</p>
        <svg className="mx-auto w-6 h-6 md:w-6 md:h-6 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}