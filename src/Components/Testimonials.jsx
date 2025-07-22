import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Regular Client",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Hazard Kutz has completely transformed my grooming experience. The attention to detail and professional service is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Business Professional",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The best barbershop in town! Their precision cuts and friendly atmosphere keep me coming back. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Williams",
    role: "Bold-driver",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Great value for money. The barbers here are true artists who take pride in their work. Always leave looking sharp!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-4 text-xs sm:text-sm font-medium tracking-widest text-amber-300 uppercase border border-amber-400 cinzel">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold cinzel text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 bellefair text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have
            to say about their experience at Hazard Kutz.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-xl"
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-xl"></div>

            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 right-0">
                <FaQuoteRight className="text-4xl text-amber-400/20" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Client Image */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/30">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                    <FaQuoteRight className="text-black text-sm" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-300 text-base sm:text-lg bellefair leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </p>

                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div>
                      <h4 className="text-amber-400 font-bold cinzel text-base sm:text-lg">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-400 bellefair text-sm sm:text-base">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map(
                        (_, i) => (
                          <FaStar key={i} className="text-amber-400 text-sm" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-amber-400 w-8"
                  : "bg-gray-600 hover:bg-amber-400/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
