import React from 'react';
import { MessageCircle, Lightbulb, Rocket, BarChart3, Users } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Product',
      subtitle: 'Discovery & site survey',
      description: 'We start with a comprehensive consultation to understand your specific needs and conduct a detailed site survey.',
      color: 'orange'
    },
    {
      icon: Lightbulb,
      title: 'Design',
      subtitle: 'Prototyping & testing',
      description: 'Our engineering team creates custom prototypes and conducts rigorous testing to ensure optimal performance.',
      color: 'amber'
    },
    {
      icon: Rocket,
      title: 'Deploy',
      subtitle: 'On-site drone operation',
      description: 'Professional deployment with on-site training and support to ensure seamless integration into your operations.',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Maintain',
      subtitle: 'Analytics & service reports',
      description: 'Ongoing maintenance with detailed analytics and regular service reports to maximize efficiency and longevity.',
      color: 'amber'
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Workflow</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A streamlined 4-step process that takes your project from concept to successful deployment
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 rounded-full"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center group">
                  {/* Step Number Circle */}
                  <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-${step.color}-600 to-${step.color}-400 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 group-hover:scale-125 transition-transform duration-300`}>
                    {index + 1}
                  </div>

                  {/* Content Card */}
                  <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105 mt-12">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-600 to-${step.color}-400 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-orange-400 font-semibold mb-4">{step.subtitle}</p>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start space-x-6">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-32 bg-gradient-to-b from-orange-600 to-amber-600 rounded-full"></div>
              )}
              
              {/* Step Circle */}
              <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-600 to-${step.color}-400 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10`}>
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center space-x-3 mb-3">
                  <span className={`w-8 h-8 bg-gradient-to-br from-${step.color}-600 to-${step.color}-400 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-orange-400 font-semibold mb-3">{step.subtitle}</p>
                <p className="text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <a
                href="https://discord.gg/tVFKqABj"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-orange-500 hover:bg-orange-500 text-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Join Our Discord Community</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;