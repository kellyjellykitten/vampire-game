const InspirationPage = () => {
    const sections = [
        { id: 'origin', title: 'Origin' },
        { id: 'side-characters', title: 'Side characters' },
        { id: 'skills', title: 'Skills' },
        { id: 'resources', title: 'Resources' },
        { id: 'conversion', title: 'Conversion' },
        { id: 'memories', title: 'Memories' },
        { id: 'completed-vampires', title: 'Completed vampires' }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen pb-12">
            <div className="max-w-4xl mx-auto pt-12 pb-8 px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                            Inspiration
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        Use this page to explore examples of the different aspects of character creation. You will find examples for your character&apos;s origin, mortal side characters, skills, resources, and conversion, in addition to completed character sheets. For further help, examples of experience entries and how they fit into memories have been included. A help modal is provided on each page of chracter creation to provide instructions. //// This page is designed to help you along the vampire creation process. While each page during  vampire creation will have a help modal, below are some general instructions and rules, along with examples for each aspect of the creation process are included as inspiration for your vampire. Examples of completed vampire characters are included at the bottom of the page.
                    </p>
                </div>
                {/* Jump To nav box */}
                <div className="bg-black/50 border border-red-800/30 rounded-lg p-6 mb-12">
                    <h2 className="text-lg font-semibold text-red-400 mb-4 text-left">Jump to:</h2>
                    <ul className="space-y-2 text-left">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button onClick={() => scrollToSection(section.id)} className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Sections container */}
            <div className="max-w-7xl mx-auto px-6">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="mb-16">
                        {/* Header w/ preceding icon */}
                        <div className="flex items-center gap-4 mb-8">
                            <img src="/src/assets/images/logo.png" alt="Blood drop" className="w-8 h-8 flex-shrink-0"></img>
                            <h2 className="font-trade-winds text-2xl md:text-3xl font-bold text-left">
                                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                    {section.title}
                                </span>
                            </h2>
                        </div>
                        {/* Section content */}
                        <div className="text-left ml-12">
                            {section.id === 'origin' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Your origin consists of who you are and from whence you came. Thank about the time era, the part of the world (even imaginary), and the occupation or doing-so&apos;s of your vampire-to-be. Examples include: 
                                    </p>
                                    <div className="space-y-2 ml-4">
                                        <p className="text-gray-300">- I am Ava, a quilt-maker living in the hills of the Czech Republic in the 19th century.</p>
                                        <p className="text-gray-300">- I am Frodo, a hobbit hailing from Bag&apos;s End in the Shire year of 1400.</p>
                                    </div>
                                </div>
                            )}
                            {section.id === 'side-characters' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                            {section.id === 'skills' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                            {section.id === 'resources' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                            {section.id === 'conversion' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                            {section.id === 'memories' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                            {section.id === 'completed-vampires' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        Content for {section.title} will be added here.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
};

export default InspirationPage;