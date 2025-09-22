import { Film, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: 'Duración', value: '24 min' },
    { icon: Users, label: 'Equipo', value: '30+ personas' },
    { icon: Award, label: 'Selecciones', value: '5 festivales' },
    { icon: Film, label: 'Formato', value: '4K Digital' }
  ];

  return (
    <section id="about" className="py-20 border-t border-purple-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-6">
            The Consciousness of Alpha & Omega
          </h2>
          <p className="text-xl text-white leading-relaxed">
            A short film that explores the disturbing themes of beginning and end,
            intertwining macabre narratives with visually unsettling cinematography.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full p-4 w-fit mx-auto mb-4 group-hover:bg-purple-900/30 transition-colors border border-purple-800/30">
                <stat.icon className="h-8 w-8 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">La Historia Siniestra</h3>
            <p className="text-gray-300 leading-relaxed">
              Alpha & Omega follows the psychological descent of its protagonists as they navigate
              terrifying moments that define the beginning and end of their sanity.
              Through a non-linear and disturbing narrative, we explore how endings
              can be the beginning of nightmares.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The cinematography uses unsettling shadows and a dark color palette
              to represent the sinister duality of the title, creating a visual experience
              that perfectly complements the psychological depth and terror of the story.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Production</h3>
            <div className="space-y-4">
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-800/30">
                <h4 className="text-purple-400 font-semibold mb-2">Dirección</h4>
                <p className="text-gray-300">Visión y dirección artística </p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-800/30">
                <h4 className="text-purple-400 font-semibold mb-2">Cinematografía</h4>
                <p className="text-gray-300">Técnicas y composición visual </p>
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-800/30">
                <h4 className="text-purple-400 font-semibold mb-2">Post-producción</h4>
                <p className="text-gray-300">Edición y efectos visuales </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-purple-800/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Upcoming Releases
            </h3>
            <p className="text-gray-300 mb-6">
              Stay up to date on upcoming night screenings and participation
              in horror film festivals.
            </p>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-white-900 hover:text-white px-8 py-3 rounded-full font-semibold text-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Receive Alerts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;