import React, { useState } from 'react';
import { Sun, Building, Wrench, ChevronRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Sun,
      title: 'Drone Exterior Cleaning',
      subtitle: 'Solar panels, building facades',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Solar panel efficiency restoration',
        'Building facade deep cleaning',
        'Environmentally safe solutions',
        'Minimal water usage technology',
        '95% efficiency improvement',
        'Scheduled maintenance programs'
      ],
      description: 'Our drone-powered exterior cleaning services revolutionize how buildings and solar installations are maintained, delivering superior results with zero scaffolding required.'
    },
    {
      icon: Building,
      title: 'Automated Window Cleaning',
      subtitle: 'High-rise glass, zero scaffolding',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'High-rise window cleaning',
        'Zero scaffolding required',
        'Crystal-clear streak-free results',
        'Weather-resistant operations',
        'Real-time quality monitoring',
        'Insurance-backed service'
      ],
      description: 'Transform your building maintenance with our automated window cleaning systems that reach every floor safely and efficiently, regardless of building height.'
    },
    {
      icon: Wrench,
      title: 'Custom Drone Builds & Support',
      subtitle: 'Hardware, firmware, pilot training',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      features: [
        'Bespoke drone engineering',
        'Custom firmware development',
        'Comprehensive pilot training',
        'Ongoing technical support',
        'Hardware optimization',
        'Regulatory compliance guidance'
      ],
      description: 'From concept to deployment, we create custom drone solutions tailored to your specific needs, complete with training and ongoing support.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive drone solutions that transform how you approach cleaning, maintenance, and custom applications
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/3 space-y-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-orange-900/50 to-amber-900/50 border-orange-500 shadow-lg shadow-orange-500/20'
                    : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeTab === index
                      ? 'bg-gradient-to-br from-orange-600 to-amber-600'
                      : 'bg-slate-600'
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold mb-1 ${
                      activeTab === index ? 'text-white' : 'text-slate-300'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400">{service.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-200 ${
                    activeTab === index ? 'rotate-90 text-orange-400' : 'text-slate-500'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3">
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-slate-300">{services[activeTab].subtitle}</p>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-8">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {services[activeTab].description}
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                    Request Quote
                  </button>
                  <button className="flex-1 border border-slate-600 hover:border-orange-500 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-orange-500/10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;