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
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer">INSTAGRAM</div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer">FACEBOOK</div>
                <div className="text-2xl text-white/50 hover:text-white/80 transition-colors cursor-pointer">TIKTOK</div>
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