export default function Footer() {
  return (
    <footer 
      className="py-6 relative overflow-hidden"
      data-aos="zom-in-up"
    >
      <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[50vh]">
        {/* Centered, maximum size PRESSA text */}
        <p 
          className="text-white/80 font-extrabold tracking-tight leading-none "
          data-aos="zoom-out-up"
          data-aos-delay="200"
        >
          <span className="block text-[12vw] md:text-[15rem] lg:text-[20rem] xl:text-[25rem]">
            PRESSA
          </span>
        </p>
        <p 
          className="text-white/50 text-sm mt-2 py-8"
          data-aos="fade-up"        >
          2K25 PRESSA | All Rights Reserved | Design by elza
        </p>
      </div>
    </footer>
  );
}