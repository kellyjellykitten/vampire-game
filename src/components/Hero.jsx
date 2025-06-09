import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowArrow(window.scrollY < 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/src/assets/images/hero.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

            <div className="relative z-10 max-w-4xl mx-auto md:ml-36 md:mr-auto px-6">
                <h1 className="font-trade-winds text-5xl md:text-7xl lg:text-8xl mb-6 md:mb-12 tracking-wide text-left">
                    <span className="bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-2xl">Vampirebound</span>
                </h1>
                
                <p className="text-lg md:text-2xl lg:text-3xl text-gray-200 mb-12 md:mb-20 font-medium text-left">Murder mortals. Escape exposure. Indulge immortality.</p>

                <div className="flex flex-col gap-6 items-start mb-20">
                    <NavLink to="/create" className="bg-transparent border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-red-900/60  transition-colors duration-300">Create Your Vampire</NavLink>
                    <div className="text-left mt-2">
                        <p className="text-gray-300 md:text-base text-sm mb-6 font-medium">Already created your vampire?</p>
                        <NavLink to="/game" className="bg-transparent border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300">Begin/Continue Your Adventure</NavLink>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${ showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}>
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-gray-400 text-sm font-medium tracking-wide">Scroll for more</span>
                    <ChevronDown className="w-6 h-6 text-red-400 animate-bounce" />
                </div>
            </div>
        </div>
    );
};

export default Hero