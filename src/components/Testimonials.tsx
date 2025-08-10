import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jaywings delivered beyond our expectations. Their drone cleaning solution increased our solar farm efficiency by 95% while reducing maintenance costs by 70%. The team's expertise and professionalism are unmatched.",
      name: "Sarah Chen",
      title: "Operations Director",
      company: "GreenPower Solutions",
      logo: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5
    },
    {
      quote: "The automated window cleaning system eliminated all our safety concerns for high-rise maintenance. We achieved 50% time savings and perfect results every time. Jaywings truly revolutionized our operations.",
      name: "Michael Rodriguez",
      title: "Facility Manager",
      company: "Metropolitan Towers",
      logo: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5
    },
    {
      quote: "From custom drone development to pilot training, Jaywings provided end-to-end solutions that transformed our security operations. Their technical expertise and ongoing support have been invaluable.",
      name: "David Park",
      title: "Security Director",
      company: "SecureWatch Industries",
      logo: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the industry leaders who trust Jaywings with their most critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 mb-8 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonial.title}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-slate-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
              <div className="text-slate-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;