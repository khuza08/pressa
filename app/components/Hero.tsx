export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      <div className="text-center z-10 max-w-4xl px-6 flex-grow flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Where <span className="text-purple-400">Fashion</span> Meets <br />
          Digital Elevation
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          We craft websites that are not only visually stunning but also strengthen your fashion brand's identity and make it easier for customers to find you online.
        </p>
      </div>
      <div className="z-10 pb-16 animate-bounce">
        <p className="text-sm mb-2">Scroll Down</p>
        <svg className="mx-auto w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
