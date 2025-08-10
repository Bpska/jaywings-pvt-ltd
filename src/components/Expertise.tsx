import React from 'react';
import { Cpu, Cog, Brain } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: Cpu,
      title: 'Flight Control Systems',
      description: 'FMU design, sensor fusion, real-time telemetry',
      features: [
        'Custom flight management units',
        'Multi-sensor data fusion',
        'Real-time telemetry systems',
        'Autonomous navigation algorithms'
      ],
      gradient: 'from-orange-600 to-orange-400'
    },
    {
      icon: Cog,
      title: 'Micro-Drone Builds',
      description: '20 mm to 250 mm platforms, rapid prototyping',
      features: [
        'Ultra-compact drone designs',
        'Rapid prototyping capabilities',
        'Custom airframe engineering',
        'Miniaturized component integration'
      ],
      gradient: 'from-amber-600 to-amber-400'
    },
    {
      icon: Brain,
      title: 'Data & Autonomy',
      description: 'AI-powered obstacle avoidance, cloud analytics',
      features: [
        'Computer vision systems',
        'Machine learning algorithms',
        'Cloud-based analytics',
        'Intelligent mission planning'
      ],
      gradient: 'from-orange-600 to-amber-400'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Three core areas where we deliver cutting-edge solutions that push the boundaries of what's possible
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ 
                background: 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.3), transparent)',
                maskImage: 'linear-gradient(0deg, transparent 0%, black 2%, black 98%, transparent 100%)'
              }}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-slate-800 px-6 py-3 rounded-full border border-slate-600">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-slate-300">Ready to innovate with us?</span>
            <button className="text-orange-400 hover:text-orange-300 font-semibold ml-2 transition-colors duration-200">
              Let's talk →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;