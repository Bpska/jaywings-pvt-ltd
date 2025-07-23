import React from 'react';
import { Play, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Drone Orbit */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 border-2 border-teal-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute inset-4 border border-sky-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-4 h-4 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-teal-100 to-sky-100 bg-clip-text text-transparent">
              Jaywings Technologys
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
              Mastering Drone Flight Control & Automated Cleaning
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Custom autopilots • Micro-drone builds • Solar-panel & Window Cleaning
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-500 hover:to-sky-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="group border-2 border-slate-600 hover:border-teal-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-teal-400/10">
              <Play className="w-5 h-5" />
              <span>View Demo</span>
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">5+</div>
              <div className="text-slate-400">Years R&D</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">100+</div>
              <div className="text-slate-400">Drones Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">ISO</div>
              <div className="text-slate-400">Quality Standard</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;