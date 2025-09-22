import { Camera, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - replace with actual content
  const slides = [
    {
      id: 1,
      type: 'image',
      title: 'Detrás de las Sombras',
      description: 'Un vistazo perturbador al proceso de filmación',
      content: 'Descubre cómo se crearon las escenas más aterradoras y siniestras del cortometraje',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg'
    },
    {
      id: 2,
      type: 'quote',
      title: 'Visión  del Director',
      description: 'La visión detrás de Alpha & Omega',
      content: '"Alpha & Omega representa el ciclo macabro de la existencia, donde cada final es el comienzo de una pesadilla. Queríamos crear una experiencia visual y psicológica que perturbara profundamente a la audiencia."',
      author: 'Esteban Cardozo'
    },
    {
      id: 3,
      type: 'image',
      title: 'Reparto ',
      description: 'El talentoso equipo detrás de la producción ',
      content: 'Conoce a los actores y el equipo técnico que dieron vida a esta historia de terror',
      image: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg'
    },
    {
      id: 4,
      type: 'text',
      title: 'Notas de Producción ',
      description: 'Datos perturbadores sobre la producción',
      content: 'Alpha & Omega fue filmado durante 15 noches en locaciones abandonadas y siniestras. El proyecto involucró a más de 30 profesionales del cine de terror y utilizó técnicas innovadoras de cinematografía oscura para crear su estética inquietante y perturbadora.'
    },
    {
      id: 5,
      type: 'image',
      title: 'Efectos Visuales',
      description: 'Los efectos visuales que dan terror a la historia',
      content: 'Explora los efectos especiales macabros y la post-producción perturbadora',
      image: 'https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 border-t border-purple-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent mb-6 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
            Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore disturbing images, director commentary, and dark moments from production
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-900 border border-purple-900/30">
            
            {/* Slides */}
            <div className="relative h-96 md:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  {slide.type === 'image' ? (
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover filter brightness-75 contrast-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-yellow-900/30 to-transparent"></div>
                      </div>
                      <div className="p-8 flex flex-col justify-center bg-gray-900">
                        <div className="flex items-center mb-4">
                          <Camera className="h-6 w-6 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 font-medium">{slide.description}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">{slide.content}</p>
                      </div>
                    </div>
                  ) : slide.type === 'quote' ? (
                    <div className="h-full flex items-center justify-center p-8 bg-gradient-to-br from-black via-purple-900/50 to-purple-900/50">
                      <div className="text-center max-w-3xl">
                        <Quote className="h-12 w-12 text-yellow-300/70 mx-auto mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{slide.title}</h3>
                        <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 italic">
                          {slide.content}
                        </blockquote>
                        <cite className="text-yellow-300 font-medium">— {slide.author}</cite>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center p-8 bg-black">
                      <div className="text-center max-w-3xl text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                          {slide.title}
                        </h3>
                        <p className="text-purple-300 font-medium mb-6">{slide.description}</p>
                        <p className="text-lg leading-relaxed text-gray-300">{slide.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-900/30 backdrop-blur-sm hover:bg-purple-900/50 p-3 rounded-full transition-all duration-200 border border-purple-700/50"
            >
              <ChevronLeft className="h-6 w-6 text-purple-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-900/30 backdrop-blur-sm hover:bg-purple-900/50 p-3 rounded-full transition-all duration-200 border border-purple-700/50"
            >
              <ChevronRight className="h-6 w-6 text-purple-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-purple-600 to-purple-600 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;