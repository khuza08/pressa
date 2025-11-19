export default function About() {
  return (
    <section id="about" className="h-screen py-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-xl font-bold mb-2 text-white/50 md:text-xl text-lg"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            ABOUT
          </h2>
          <p 
            className="text-4xl text-white/80 mb-4 md:text-4xl text-xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            We bring fashion brands to life online, combining creative design with strategic functionality. Through our hands-on experience, we deliver thoughtful solutions that elevate your brand's digital presence.
          </p>
        </div>
      </div>
    </section>
  );
}