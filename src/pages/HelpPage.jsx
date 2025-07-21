import { MdOpenInNew } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const HelpPage = () => {
    const sections = [
        { id: 'rules', title: 'General rules' },
        { id: 'origin', title: 'Origin' },
        { id: 'side-characters', title: 'Side characters' },
        { id: 'skills', title: 'Skills' },
        { id: 'resources', title: 'Resources' },
        { id: 'conversion', title: 'Conversion' },
        { id: 'completed-vampires', title: 'Completed vampires' },
        { id: 'credits', title: 'Credits' }
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
                            Rules & Inspiration
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        This page is designed to help you along the vampire creation process and gameplay. While each page during vampire creation will have instructions, below are some general guidelines and rules, along with examples for each aspect of the creation process for inspiration. Examples of completed vampire characters are included at the bottom of the page.
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
                        <div className="text-left">
                            {section.id === 'rules' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="text-gray-200 leading-relaxed">
                                        
                                            Content for {section.title} will be added here. will be added here. will be added here. will be added here.
                                        
                                        
                                    </p>
                                </div>
                            )}
                            {section.id === 'origin' && (
                                <div className="max-w-5xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-2 leading-relaxed">
                                        Your origin is the story of your life as a mortal. Who were you? When and where were you born? What did you used to do? 
                                    </p>
                                    <p className="mb-2 leading-relaxed">
                                        Start by imagining a person in the distant past. You can draw upon real history, fantasize your own, or weave the two together. This person will become your vampire. 
                                    </p>
                                    <p className="mb-2 leading-relaxed">
                                        In character creation, you will create your &quot;origin experience&quot; -- a sentence encapsulating your mortal history. State your name, then briefly describe your background. Examples include:
                                    </p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li className="italic">I am Ava, a quilt-maker living in the hills of the Czech Republic in the 19th century.</li>
                                            <li className="italic">I am Frodo, a hobbit hailing from Bag&apos;s End in the Shire year of 1400.</li>
                                        </ul>
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
                            {section.id === 'credits' && (
                                <div className="space-y-6">
                                    <p className="text-gray-200 leading-relaxed">
                                        This game is inspired by the solo role-playing journaling game Thousand Year Old Vampire by Tim Hutchings. You can find more information about Thousand Year Old Vampire <a className="underline text-red-300 hover:text-red-400" href="https://thousandyearoldvampire.com/" target="_blank">here</a> (https://thousandyearoldvampire.com/).
                                    </p>
                                    <p className="text-gray-200">
                                        Website made by <a className="underline text-red-300 hover:text-red-400" href="https://kellylloyd.kiwi/" target="_blank" title="View my Portfolio">Kelly Lloyd</a> <FaRegCopyright className="inline text-gray-300 text-xl" /> 2025. GitHub <a href="https://github.com/kellyjellykitten" target="_blank" title="View my GitHub"><MdOpenInNew className="inline text-red-300 hover:text-red-400 text-2xl" /></a>
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

export default HelpPage;