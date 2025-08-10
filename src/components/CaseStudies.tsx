import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';

const CaseStudies = () => {
  const [currentStudy, setCurrentStudy] = useState(0);

  const caseStudies = [
    {
      title: 'Solar Farm Maintenance Revolution',
      client: 'GreenPower Solutions',
      industry: 'Renewable Energy',
      beforeImage: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
      dashboardImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['95% efficiency improvement', '70% cost reduction', '10x faster cleaning'],
      quote: "Jaywings transformed our solar farm maintenance. The efficiency gains exceeded all expectations.",
      clientName: 'Sarah Chen',
      clientTitle: 'Operations Director, GreenPower Solutions'
    },
    {
      title: 'High-Rise Window Cleaning Innovation',
      client: 'Metropolitan Towers',
      industry: 'Commercial Real Estate',
      beforeImage: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      dashboardImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['Zero scaffolding required', '50% time savings', 'Perfect safety record'],
      quote: "The automated window cleaning system eliminated all safety concerns while delivering superior results.",
      clientName: 'Michael Rodriguez',
      clientTitle: 'Facility Manager, Metropolitan Towers'
    },
    {
      title: 'Custom Surveillance Drone System',
      client: 'SecureWatch Industries',
      industry: 'Security & Surveillance',
      beforeImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      dashboardImage: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      results: ['24/7 autonomous monitoring', '90% faster incident response', 'AI-powered threat detection'],
      quote: "The custom drone solution revolutionized our security operations with unmatched reliability.",
      clientName: 'David Park',
      clientTitle: 'Security Director, SecureWatch Industries'
    }
  ];

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const study = caseStudies[currentStudy];

  return (
    <section id="case-studies" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real results from real clients - see how our solutions transform businesses
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevStudy}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-600 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextStudy}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center border border-slate-600 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Study Content */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
            {/* Header */}
            <div className="p-8 pb-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <span className="font-semibold">{study.client}</span>
                    <span>•</span>
                    <span>{study.industry}</span>
                  </div>
                </div>
                <ExternalLink className="w-6 h-6 text-slate-400 hover:text-orange-400 cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid md:grid-cols-3 gap-6 px-8 mb-8">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Before</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src={study.beforeImage} alt="Before" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Dashboard</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src={study.dashboardImage} alt="Dashboard" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">After</h4>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src={study.afterImage} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Results and Quote */}
            <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">
              {/* Results */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Key Results</h4>
                <div className="space-y-3">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-slate-300 font-semibold">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 p-6 rounded-xl border border-orange-500/30">
                <Quote className="w-8 h-8 text-orange-400 mb-4" />
                <blockquote className="text-slate-300 mb-4 italic">
                  "{study.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{study.clientName}</div>
                  <div className="text-sm text-slate-400">{study.clientTitle}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStudy(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentStudy ? 'bg-orange-400' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;