import { MdOpenInNew } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { useState } from "react";

const HelpPage = () => {
    const [openAccordionItem, setOpenAccordionItem] = useState(null);

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

    const toggleAccordion = (itemId) => {
        setOpenAccordionItem(openAccordionItem === itemId ? null : itemId);
    }

    // eslint-disable-next-line react/prop-types
    const AccordionItem = ({ id, title, children }) => {
        const isOpen = openAccordionItem === id;

        return (
            <div className="border border-stone-400 rounded-lg overflow-hidden mb-4">
                <button
                    onClick={() => toggleAccordion(id)}
                    className="w-full px-6 py-4 bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-left flex justify-between items-center"
                    aria-expanded={isOpen}
                >
                    <span className="text-lg font-medium text-gray-200">{title}</span>
                    <span className={`text-red-400 text-xl transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        ▼
                    </span>
                </button>
                {isOpen && (
                    <div className="px-6 py-4 bg-zinc-900 border-t border-stone-400">
                        <div className="leading-relaxed">
                            {children}
                        </div>
                    </div>
                )}
            </div>
        );
    };

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
                                    <p className="mb-4 leading-relaxed">
                                        Your origin is the story of your life as a mortal. Who were you? When and where were you born? What did you used to do? 
                                    </p>
                                    <p className="mb-4 leading-relaxed">
                                        Start by imagining a person in the distant past. You can draw upon real history, fantasize your own, or weave the two together. This person will become your vampire. 
                                    </p>
                                    <p className="mb-2 leading-relaxed">
                                        In character creation, you will create your &quot;origin experience&quot; -- a sentence encapsulating your mortal history. State your name, then describe your background. Feel free to include as many details as you like. Examples include:
                                    </p>
                                    <div className="ml-12 mt-4">
                                        <ul className="list-disc">
                                            <li className="italic pb-2">I am Ava, a Slavic woman living on the edge of the wild Sudeten Mountains in the 1800s</li>
                                            <li className="italic">I am Pierre, son of Garnier, born near the Ubaye Valley in the 13th Century Kingdom of France; I am a poor knight swindled out of my inhertiance</li>
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
                                <div className="max-w-6xl">
                                    <AccordionItem id="frodo" title="Frodo Baggins">
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Origin</h2>
                                            <p>
                                                I am Frodo Baggins, a hobbit from Bag End in the Shire-reckoning year 1400.
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Side Characters</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Samewise Gamgee, my most loyal companion, who has vowed to always look after me</li>
                                                <li>Gandalf, trusted friend and grand wizard, who passes to me wisdom and knowledge</li>
                                                <li>Gollum, a once-hobbit creature consumed by his shackling thirst for his precious: my ring</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Skills</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Samewise Gamgee...</li>
                                                <li>Gandalf...</li>
                                                <li>Bilbo Baggins...</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Resources</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Sting</li>
                                                <li>The One Ring</li>
                                                <li>Lembas bread</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Memories</h2>
                                            <ul className="list-disc pl-5">
                                                <li>I am Frodo Baggins, a hobbit from Bag End in the Shire-reckoning year 1400.</li>
                                                <li>Sam...</li>
                                                <li>Gandalf...</li>
                                                <li>Gollum...</li>
                                                <li>Sauron...</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Conversion</h2>
                                            <p>
                                                <strong>Immortal:</strong> Sauron
                                            </p>
                                            <p>
                                                <strong>Conversion Experience:</strong> Sauron...
                                            </p>
                                            <p>
                                                <strong>Mark:</strong> The Eye of Sauron burned into my flesh 
                                            </p>
                                        </div>
                                    </AccordionItem>
                                    <AccordionItem id="spongebob" title="Spongebob Squarepants">
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Origin</h2>
                                            <p>
                                                I am Spongebob Squarepants, a fry-cooking sponge from 20th century Bikini Bottom.
                                            </p>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Side Characters</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Patrick, a pink starfish and my best friend, with whom I get into all sorts of shenanigans</li>
                                                <li>Squidward, my neighbor, who enjoys playing clarinet and often frowns at my antics</li>
                                                <li>Sandy, a squirrel from Texas that practices karate with me</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Skills</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Making Krabby Patties</li>
                                                <li>Jellyfishing</li>
                                                <li>Blowing bubbles</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Resources</h2>
                                            <ul className="list-disc pl-5">
                                                <li>Spatula</li>
                                                <li>Jellyfishing net</li>
                                                <li>The Krusty Krab</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Memories</h2>
                                            <ul className="list-disc pl-5">
                                                <li>I am Spongebob Squarepants, a fry-cooking sponge from 20th century Bikini Bottom.</li>
                                                <li>Patrick and I are tasked with painting the inside of Mr. Krabs&apos;s house, but the walls are crowded with frames; panic erupts as paint drips onto his precious first dollar, only for us to learn it was a prank.</li>
                                                <li>Squidward asks for help blowing bubbles, so I show him the technique; he ends up blowing a bubble so large, it absorbs his home and floats away</li>
                                                <li>I visit Sandy in her dome for the first time; the lack of water almost killed me as I began to shrivel and crackle in dryness</li>
                                                <li>Plankton...</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Conversion</h2>
                                            <p>
                                                <strong>Immortal:</strong> Plankton
                                            </p>
                                            <p>
                                                <strong>Conversion Experience:</strong> Plankton...
                                            </p>
                                            <p>
                                                <strong>Mark:</strong> Plankton... 
                                            </p>
                                        </div>
                                    </AccordionItem>
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