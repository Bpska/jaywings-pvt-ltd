import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo and Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Jaywings Technologys</h2>
                <p className="text-slate-400">PVT LTD</p>
              </div>
            </div>

            <div className="prose prose-lg text-slate-300">
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-xl leading-relaxed">
                Empowering industries with precision UAV systems and turnkey cleaning solutions. 
                We bridge the gap between cutting-edge drone technology and practical applications 
                that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                <Target className="w-8 h-8 text-orange-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Precision Focus</h4>
                <p className="text-sm text-slate-400">Custom solutions for unique challenges</p>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                <Award className="w-8 h-8 text-amber-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Quality Assured</h4>
                <p className="text-sm text-slate-400">ISO-standard processes and delivery</p>
              </div>
            </div>
          </div>

          {/* Key Facts */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Why Choose Jaywings?</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">5+ Years R&D Excellence</h4>
                </div>
                <p className="text-slate-400">Continuous innovation in drone technology and autonomous systems</p>
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">In-house PX4 & ArduPilot Expertise</h4>
                </div>
                <p className="text-slate-400">Deep technical knowledge of leading flight control platforms</p>
              </div>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-white">ISO-Quality High-Rise Cleaning</h4>
                </div>
                <p className="text-slate-400">Professional-grade cleaning services with safety standards</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 p-6 rounded-xl border border-orange-500/30">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-orange-400" />
                <h4 className="text-lg font-semibold text-white">Trusted by Industry Leaders</h4>
              </div>
              <p className="text-slate-300">From Fortune 500 companies to innovative startups, we deliver results that matter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;