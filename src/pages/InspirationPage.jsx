const InspirationPage = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen p-4">
            <div className="max-w-4xl mx-auto mt-12">
                <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-6 text-center">Inspiration/Help</h1>
                <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">Use this page to explore examples of the different aspects of character creation. You will find examples for your character&apos;s origin, mortal side characters, skills, resources, and conversion, in addition to completed character sheets. For further help, examples of experience entries and how they fit into memories have been included. A help modal is provided on each page of chracter creation to provide instructions. //// This page is designed to help you along the vampire creation process. While each page during  vampire creation will have a help modal, below are some general instructions and rules, along with examples for each aspect of the creation process are included as inspiration for your vampire. Examples of completed vampire characters are included at the bottom of the page.</p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="mt-6">                                          
                    <h2>Jump to:</h2>
                    <ul className="m-2">
                        <li><a href="#origin">Origin</a></li>
                        <li><a href="#sides">Side characters</a></li>
                        <li>Skills</li>
                        <li>Resources</li>
                        <li>Conversion</li>
                        <li>Memories</li>
                        <li>Completed vampires</li>
                    </ul>
                </div>
                <div className="mt-6">
                    {/* Origin section */}
                    <section id="origin">
                        <h2 className="font-trade-winds text-3xl md:text-4xl px-6">Origin</h2>  
                    </section>
                    {/* Side character section */}
                    <section id="sides">
                        <h2>Side Characters</h2>
                    </section>
                </div>
            </div>
        </div>
    )
};

export default InspirationPage;