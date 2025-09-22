import { Maximize, Play, Volume2 } from "lucide-react";
import { useState } from "react";

const TrailerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="trailer" className="py-20 border-t border-purple-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
            Official Trailer 
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in the darkness and terror of Alpha & Omega in this exclusive trailer.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-purple-900/30 group">
            {/* Video Placeholder / YouTube Iframe */}
            <div className="aspect-video bg-gradient-to-br from-black via-purple-900/50 to-red-900/50 relative flex items-center justify-center">
              {!isPlaying ? (
                <>
                  <div className="absolute inset-0 bg-black/70"></div>
                  <div
                    className="relative z-10 text-center cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="bg-purple-600/30 backdrop-blur-sm rounded-full p-6 mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300 border border-purple-500/50">
                      <Play className="h-12 w-12 text-purple-300" fill="currentColor" />
                    </div>
                    <h3 className="text-white text-2xl font-semibold mb-2">
                      Alpha & Omega - Sinister Trailer
                    </h3>
                    <p className="text-purple-300">
                      Click to enter the darkness
                    </p>
                  </div>

                  {/* Video Controls Overlay (Solo visible en hover antes de reproducir) */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-4">
                      <button className="text-white hover:text-red-300 transition-colors">
                        <Volume2 className="h-6 w-6" />
                      </button>
                    </div>
                    <button className="text-white hover:text-red-300 transition-colors">
                      <Maximize className="h-6 w-6" />
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MV_3Dpw-BRY?autoplay=1&controls=1&rel=0&modestbranding=1"
                  title="Alpha & Omega - Trailer Siniestro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>

            {/* Video Info (NO SE TOCA) */}
            <div className="p-6 bg-gray-900 border-t border-red-900/30">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Alpha & Omega - Official trailer
                  </h4>
                  <p className="text-gray-400">
                    Duration: 2:30 | Quality: HD | Language: Spanish with subtitles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-gray-400 leading-relaxed">
                        This trailer will immerse you in the sinister atmosphere, disturbing cinematography, and intense performances that make Alpha & Omega an unforgettable horror experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
