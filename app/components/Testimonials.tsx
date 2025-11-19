interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with was an amazing experience. They truly understood our brand vision and were able to translate it into a captivating website design.",
    author: "Sarah Johson"
  },
  {
    id: 2,
    quote: "Since using the website created by pressa we have seen a significant increase in user engagement. The design is responsive and attractive.",
    author: "Mark Gilbert"
  },
  {
    id: 3,
    quote: "We were very impressed by the attention to detail and quick response from the pressa team. Our website is now a valuable asset for our brand.",
    author: "James M."
  },
  {
    id: 4,
    quote: "pressa delivered the website we dreamed of. The process was smooth, communication was clear, and the final result exceeded our expectations.",
    author: "Crazy Dave"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40">
      <div className="container mx-auto px-6">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold mb-4 text-white/80 md:text-4xl text-2xl">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-white/20 bg-white/5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <p className="text-white/50 mb-6 md:text-base text-sm">{testimonial.quote}</p>
              <p className="text-white/80 text-right md:text-base text-sm">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}