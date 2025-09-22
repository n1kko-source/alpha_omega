import { useEffect, useState } from "react";

const BackgroundPattern = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Calculamos transformaciones dinámicas
    const parallax1 = {
        transform: `translateY(${scrollY * 0.2}px)`, // Se mueve un poco
    };

    const parallax2 = {
        transform: `translateY(${scrollY * 0.4}px) rotate(${scrollY * 0.05}deg)`,
        opacity: Math.min(1, 0.3 + scrollY / 500), // más opaco al bajar
    };

    const parallaxGradient = {
        opacity: Math.min(1, 0.5 + scrollY / 1000), // el gradiente se hace más intenso
    };
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/100"></div>
                <div className="absolute top-20 left-10 w-32 h-32 border border-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border border-fuchsia-600 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-20 w-16 h-16 border border-purple-500 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-fuchsia-900/20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900 opacity-80"></div>
                {/* Capa de ruido y textura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-900 to-transparent opacity-90"></div>

                {/* Elementos geométricos surrealistas */}
                <div className="absolute inset-0" style={parallax2}>
                    {/* Círculos flotantes */}
                    <div className="absolute top-20 left-10 w-32 h-32 border-2 border-pink-500 rounded-full opacity-20 animate-pulse" style={parallax1}></div>
                    <div className="absolute bottom-40 right-20 w-48 h-48 border border-cyan-400 rounded-full opacity-15 animate-spin" style={{ animationDuration: '20s'}} ></div>
                    <div className="absolute top-60 right-40 w-24 h-24 border-2 border-yellow-400 rounded-full opacity-25 animate-ping" style={{ animationDuration: '3s' }}></div>

                    {/* Líneas diagonales */}
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-30 transform rotate-12"></div>
                    <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-20 transform -rotate-6"></div>

                    {/* Formas abstractas */}
                    <div className="absolute top-32 right-10 w-16 h-32 bg-gradient-to-b from-pink-600 to-transparent opacity-40 transform rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500 to-transparent opacity-30 transform -rotate-12"></div>
                </div>

                {/* Símbolos Alpha y Omega principales */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Alpha - Izquierda */}
                    <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2" style={parallaxGradient}>
                        <div className="text-9xl font-bold text-red-500 opacity-10 animate-pulse select-none" style={{ fontFamily: 'serif', textShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}>
                            Α
                        </div>
                        <div className="absolute inset-0 text-9xl font-bold text-red-300 opacity-10 animate-ping select-none" style={{ fontFamily: 'serif', animationDuration: '4s' }}>
                            Α
                        </div>
                    </div>

                    {/* Omega - Derecha */}
                    <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 translate-x-1/2" style={parallaxGradient}>
                        <div className="text-9xl font-bold text-purple-500 opacity-10 animate-pulse select-none" style={{ fontFamily: 'serif', textShadow: '0 0 30px rgba(168, 85, 247, 0.5)', animationDelay: '1s' }}>
                            Ω
                        </div>
                        <div className="absolute inset-0 text-9xl font-bold text-purple-300 opacity-10 animate-ping select-none" style={{ fontFamily: 'serif', animationDuration: '4s', animationDelay: '2s' }}>
                            Ω
                        </div>
                    </div>
                </div>

                {/* Símbolos Alpha y Omega secundarios flotantes */}
                <div className="absolute inset-0" style={parallax2}>
                    {/* Alpha pequeños */}
                    <div className="absolute top-16 left-16 text-2xl text-red-400 opacity-30 animate-bounce select-none" style={{ fontFamily: 'serif', animationDuration: '3s' }}>Α</div>
                    <div className="absolute bottom-24 right-32 text-3xl text-red-300 opacity-25 animate-pulse select-none" style={{ fontFamily: 'serif' }}>Α</div>
                    <div className="absolute top-80 left-2/3 text-xl text-red-500 opacity-20 animate-bounce select-none" style={{ fontFamily: 'serif', animationDelay: '1s' }}>Α</div>

                    {/* Omega pequeños */}
                    <div className="absolute top-24 right-16 text-2xl text-purple-400 opacity-30 animate-bounce select-none" style={{ fontFamily: 'serif', animationDuration: '2.5s' }}>Ω</div>
                    <div className="absolute bottom-32 left-24 text-3xl text-purple-300 opacity-25 animate-pulse select-none" style={{ fontFamily: 'serif', animationDelay: '0.5s' }}>Ω</div>
                    <div className="absolute top-72 right-1/3 text-xl text-purple-500 opacity-20 animate-bounce select-none" style={{ fontFamily: 'serif', animationDelay: '2s' }}>Ω</div>
                </div>

                {/* Efectos de luz y resplandor */}
                <div className="absolute inset-0" style={parallax1}>
                    {/* Resplandores */}
                    <div className="absolute top-20 left-20 w-40 h-40 bg-red-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-700 rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                    {/* Rayos de luz */}
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-transparent to-pink-500 opacity-20 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-transparent to-red-500 opacity-15 transform -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundPattern;
