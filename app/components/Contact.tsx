export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-8xl text-white/80 font-bold">GET IN TOUCH</h2>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-3xl text-white/80 font-semibold mb-2">SOCIAL MEDIA</h3>
              <div className="space-y-2">
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex items-center">
                  INSTAGRAM
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex items-center">
                  FACEBOOK
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer flex items-center">
                  TIKTOK
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl text-white/80 font-semibold mb-4">CONTACT INFO</h3>
              <div className="text-white/50 mb-6">
                <p>Address:</p>
                <p>Ngawi Sebelah Barat</p>
                <p>Dari Selatan Ke Sunda</p>
                <p>Blok. Jawa. No, Rekening</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
}