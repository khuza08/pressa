export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-white/80 font-bold text-[8vw] md:text-8xl leading-none">GET IN TOUCH</h2>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-3xl text-white/80 font-semibold mb-2 md:text-3xl text-xl">SOCIAL MEDIA</h3>
              <div className="space-y-2">
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex justify-between items-center md:text-2xl text-lg">
                  <span>INSTAGRAM</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex justify-between items-center md:text-2xl text-lg">
                  <span>FACEBOOK</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex justify-between items-center md:text-2xl text-lg">
                  <span>TIKTOK</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-white/80 font-semibold mb-4 md:text-3xl text-xl">CONTACT INFO</h3>
              <div className="text-white/50 mb-6">
                <p className="md:text-base text-sm">Address:</p>
                <p className="md:text-base text-sm">Ngawi Sebelah Barat</p>
                <p className="md:text-base text-sm">Dari Selatan Ke Sunda</p>
                <p className="md:text-base text-sm">Blok. Jawa. No, Rekening</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
}