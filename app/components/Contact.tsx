export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-6xl font-bold mb-4">GET IN TOUCH</h2>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">SOCIAL MEDIA</h3>
              <div className="space-y-4">
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">INSTAGRAM</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">FACEBOOK</div>
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">TIKTOK</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">CONTACT INFO</h3>
              <div className="text-gray-400 mb-6">
                <p>Address:</p>
                <p>Ngawi Sebelah Barat</p>
                <p>Dari Selatan Ke Sunda</p>
                <p>Blok. Jawa. No, Rekening</p>
              </div>
              <h3 className="text-xl font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
              <div className="flex">
                <input type="email" placeholder="Your email here..." className="flex-grow px-4 py-2 bg-black border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}