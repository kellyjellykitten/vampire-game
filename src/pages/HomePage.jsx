import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import characterCreationBg from '../assets/images/character-creation-bg.png'
import survivalMechanicsBg from '../assets/images/survival-mechanics-bg.png';
import storyBranchesBg from '../assets/images/story-branches-bg.png';

const HomePage = () => {
    const gameSections = [
        {
            id: 'chracter-creation',
            title: 'Craft Your Immortal Identity',
            description: 'You begin as a mortal, living a life you’ve created for yourself. You have possessions, be they valuable items or useful assets. You have skills that demonstrate your capabilities and characteristics. You have people around you that you’ve formed some sort of relationship with, whether friend or foe. And in an instance, everything changes as immortality claims you. By the imparting of another immortal, you are a vampire now – and you must survive as one.',
            backgroundImage: characterCreationBg
        },
        {
            id: 'survival-mechanics',
            title: 'Navigate the Mortal World',
            description: 'You see the world around you with devoid, pale eyes, and know you must hide your true nature. But how will you feed your ever-growing, tormenting hunger? How will you ensure your survival? Or do you aspire beyond, to the possibility of endless power and domination over all mortals? Events occur and each one brings its own challenges. You will meet new people and kill others once precious to you. Gather found items and discard old ones. Discover new skills and forget others. ',
            backgroundImage: survivalMechanicsBg
        },
        {
            id: 'story-branches',
            title: 'Forge Your Dark Legacy',
            description: 'Your journeys take you through murky waters and misty lands. How are you progressing? You may be a ruthless ruler of civilization with an endless supply of fresh blood at your feet and spawns to fulfill your darkest demands. Perhaps you kill all your past loved ones, lose all items of importance to you, and wither away as a sorry soul thirsting for your old life. Along either path, you will leave your mark on society from your time as a vampire, experiencing erratic encounters and weaving your immortal story.',
            backgroundImage: storyBranchesBg
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            <Hero />
            
            {/* Game info sections */}
            <div className="bg-gradient-to-b from-black to-gray-900">
                {gameSections.map((section, index) => (
                    <section key={section.id} className="py-20 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Image container w/ title overlay */}
                            <div className="relative bg-cover bg-top bg-no-repeat pt-72 pb-2.5 rounded-lg overflow-hidden" style={{ backgroundImage: `url(${section.backgroundImage})` }}>
                                {/* Fallback gradient if images don't appear */}
                                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black/60 to-gray-900/80"></div>
                                {/* Title overlay */}
                                <div className="relative z-10">
                                    <h2 className="font-trade-winds text-3xl md:text-4xl font-bold text-white leading-tight px-6">
                                        <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                                            {section.title}
                                        </span>
                                    </h2>
                                </div>
                            </div>

                            {/* Description below image */}
                            <div className="mt-8 space-y-4">
                                <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"></div>
                                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                                    {section.description}
                                </p>
                            </div>
                        </div>

                        {/* Section separator */}
                        {index < gameSections.length - 1 && (
                            <div className="flex justify-center mt-16">
                                <div className="w-px h-20 bg-gradient-to-b from-red-600/50 to-transparent"></div>
                            </div>
                        )}
                    </section>
                ))}
            </div>

            {/* Call to action section */}
            <div className="bg-gradient-to-b from-gray-900 to-black py-20">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="font-trade-winds text-3xl md:text-4xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Your Journey Awaits
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
                        What kind of vampire are you destined to become?
                    </p>
                    <div className="flex flex-col gap-6 justify-center items-center">
                        <NavLink to="/create" className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300 min-w-[200px]">
                            Create Your Vampire
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;