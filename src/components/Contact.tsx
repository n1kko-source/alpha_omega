import { Film, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-purple-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
            Contact With Us
          </h2>
          <p className="text-xl text-gray-300">
            Para consultas de prensa, distribución o colaboraciones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-sm border border-purple-900/30">
                  <div className="bg-purple-900/30 p-3 rounded-full border border-purple-800/50">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">contact@alphaomega-film.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-sm border border-purple-900/30">
                  <div className="bg-purple-900/30 p-3 rounded-full border border-purple-800/50">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg shadow-sm border border-purple-900/30">
                  <div className="bg-purple-900/30 p-3 rounded-full border border-purple-800/50">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Ubication</div>
                    <div className="text-gray-300">Los Angeles, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-full text-white hover:scale-110 transition-transform border border-red-500/30">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-full text-white hover:scale-110 transition-transform border border-red-500/30">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-full text-white hover:scale-110 transition-transform border border-red-500/30">
                  <Film className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Credits */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-purple-900/30">
            <h3 className="text-2xl font-bold text-white mb-6">Credits</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Direction</h4>
                <p className="text-gray-300">Principal Director</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Production</h4>
                <p className="text-gray-300">Productor Ejecutivo</p>
                <p className="text-gray-300">Productor Asociado</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Cinematographic</h4>
                <p className="text-gray-300">Director de Fotografía</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Reparto Principal</h4>
                <p className="text-gray-300">Actor Principal</p>
                <p className="text-gray-300">Actriz Principal</p>
                <p className="text-gray-300">Actor de Reparto</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Post-production</h4>
                <p className="text-gray-300">Editor</p>
                <p className="text-gray-300">Compositor de Música</p>
                <p className="text-gray-300">Diseñador de Sonido</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-yellow-300/30 text-center">
          <p className="text-gray-400">
            © 2025 Alpha & Omega. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Alpha & Omega - Esteban Cardozo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;