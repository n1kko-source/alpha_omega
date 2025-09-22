import { Award, Calendar, Play } from 'lucide-react';
import bible from '../images/cristiandad.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="absolute left-1/2 transform -translate-x-1/2 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            {/* Logo */}
            <div className="flex items-center justify-center">
              <img
                src={bible}
                alt="bible"
                className="h-12 w-auto sm:h-14 md:h-20 object-contain mb-4 mx-auto"
              />
            </div>
            <p className="text-2xl md:text-3xl font-mono tracking-widest text-yellow-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] mb-8">
              ▓▒░ The beginning and the end ░▒▓
            </p>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed italic">
              <span className="text-pink-500">▮</span> A sinister short film that explores the boundaries between life and death,
              where <span className="text-yellow-300">shadows</span> hide disturbing secrets.
            </p>
          </div>

          {/* Awards/Recognition */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-20 font-mono">
            <div className="flex items-center space-x-2 text-yellow-300">
              <Award className="h-6 w-6" />
              <span className="text-gray-200">Film Festival</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Calendar className="h-5 w-5" />
              <span className="text-gray-200">2025 Release</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl border border-purple-500/30">
              <div className="flex items-center space-x-2">
                <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <a href='#trailer'>
                  <span className='font-mono tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]'>Watch Trailer</span>
                </a>
              </div>
            </button>
            <button className="border-2 border-purple-500 text-purple-300 hover:bg-white-900 hover:text-white px-8 py-4 rounded-full font-semibold text-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl font-mono tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;