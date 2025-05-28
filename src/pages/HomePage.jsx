import Hero from '../components/Hero';

const HomePage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Hero />
            {/* Additional content section to demonstrate scroll */}
            <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 p-8">
                <div className="max-w-4xl mx-auto text-center pt-20">
                    <h2 className="text-4xl font-bold text-red-500 mb-6">Enter the Darkness</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Your journey into the vampire underworld begins here. Create your immortal persona, 
                        navigate the shadows of mortal society, and embrace the eternal hunger that drives you. 
                        Every choice matters in this world where survival depends on cunning, stealth, and the 
                        delicate balance between your humanity and your monstrous nature.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;