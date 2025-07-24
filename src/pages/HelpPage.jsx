import { MdOpenInNew } from "react-icons/md";
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
                    <h1 className="font-trade-winds text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                            Rules & Inspiration
                        </span>
                    </h1>
                    <p className="md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
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
                        <div className="flex items-center gap-4 mb-4">
                            <img src="/src/assets/images/logo.png" alt="Blood drop" className="w-8 h-8 flex-shrink-0"></img>
                            <h2 className="font-trade-winds text-3xl font-bold text-left">
                                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                    {section.title}
                                </span>
                            </h2>
                        </div>
                        {/* Section content */}
                        <div className="text-left">
                            {section.id === 'rules' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <h3 className="underline mb-2">Your Vampire</h3>
                                    <p className="mb-8">Your vampire is represented by five different traits: characters, skills, resources, memories, and a mark. Almost every time you receive a Prompt, one of your traits will be modified. The Prompt may cause you to create, lose, and/or alter one or more traits.</p>
                                    <h3 className="underline mb-2">Answering Prompts</h3>
                                    <p className="mb-4">Your vampire&apos;s journey progresses semi-randomly through Prompts. Answer Prompts to learn about your vampire&apos;s wants and needs, to learn what challenges they face, and to chart their aging decline.</p>
                                    <p className="mb-4">Prompts are sparks for creativity and connection. Any amount of time can pass between Prompts, but consider the first five or six to be the first busy years after your character becomes a vampire.</p>
                                    <p className="mb-4">Your answer to a Prompt is called a Memory. Memories are important moments that have shaped your vampire. A Memory might describe a few secondes of impactful events, or it might cover two hundred years of lurking in an old castle. Each Memory you create is added to your vampire&apos;s Memory section.</p>
                                    <p className="mb-4">You will roll a d6 to determine your prompt number. Each subsequent dice roll is added to the previous result to move forward. For example, if you just answered Prompt 11 and then roll a 4, you move up to Prompt 15.</p>
                                    <p>The game ends when a Prompt tells you that the game has ended.</p>
                                </div>
                            )}
                            {section.id === 'origin' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        Your Origin is the story of your life as a mortal. Who were you? When and where were you born? What did you used to do? 
                                    </p>
                                    <p className="mb-4">
                                        Start by imagining a person in the distant past. You can draw upon real history, fantasize your own, or weave the two together. This person will become your vampire. 
                                    </p>
                                    <p className="mb-4">
                                        In character creation, you will create your &quot;origin experience&quot; -- a sentence encapsulating your mortal history. State your name, then describe your background. Feel free to include as many details as you like.
                                    </p>
                                    <p>Examples:</p>
                                    <div className="ml-12 mt-2">
                                        <ul className="list-disc">
                                            <li className="pb-2">I am Ava, a Slavic woman living on the edge of the wild Sudeten Mountains in the 1800s</li>
                                            <li>I am Pierre, son of Garnier, born near the Ubaye Valley in the 13th Century Kingdom of France; I am a poor knight swindled out of my inhertiance</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {section.id === 'side-characters' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        Side Characters are the people with whom your vampire has a relationship. They may be relatives, friends, lovers, enemies, debtors, or anything else appropriate for the time and place you have chosen. Each Character should be described in a sentence fragment. 
                                    </p>
                                    <p className="mb-4">When creating each of your Side Characters, you will also create a Memory you share with them. This Memory can be of any event that occurred between you and the Character that you feel important or essential to your vampire&apos;s core. </p>
                                    <p className="mb-4">If it makes sense to include a Character when resolving a Prompt, do so even if the Prompt doesn&apos;t tell you to include a Character. Your side characters are mortals, but a Prompt may instruct you to create an immortal Character. Immortals are undying supernatural beings. They may be other vampires, angels or demons, ghosts, animated corpses, or whatever you may conjure.</p>
                                    <p>Examples:</p>
                                    <div className="ml-12 mt-2">
                                        <ul className="list-disc">
                                            <li>Gundar, a Viking warrior, like a father to me</li>
                                            <p className="ml-2"><em className="italic">Memory:</em> Gundar takes me on my first voyage aboard the longship Skuldelev; his hug calms me when we first leave sight of land.</p>
                                            <li className="pt-2">Piotr, a shepherd boy who tends my flocks</li>
                                            <p className="ml-2"><em className="italic">Memory:</em> Piotr was orphaned during a bandit raid; I hold his family&apos;s silver coin until he comes of age -- in the meantime he works with the sheep.</p>
                                            <li className="pt-2">Hania, my neighbor, a friend and an enemy</li>
                                            <p className="ml-2"><em className="italic">Memory:</em> Hania complains when I walk my sheep through the stream, but she never says no to the banana bread I gift her.</p>
                                            <li className="pt-2">Callwyn, my younger brother who lives with me in a motorhome</li>
                                            <p className="ml-2"><em className="italic">Memory:</em> Callwyn and I construct an enclosed room in the back of our motorhome; at night he does not see the Moon and during the day I do not see the Sun.</p>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {section.id === 'skills' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        Skills describe the capabilities and characteristics of your vampire. They indicate what your vampire <strong>can do</strong> and what they <strong>might do</strong>.
                                    </p>
                                    <p className="mb-4">When instructed to create a new Skill, you should relate it to the content of the Prompt.</p>
                                    <p>Examples:</p>
                                    <div className="ml-12 mt-2">
                                        <ul className="list-disc">
                                            <li className="pb-2">Swordplay</li>
                                            <li className="pb-2">Relaxing Banter</li>
                                            <li className="pb-2">Operate Heavy Machinery</li>
                                            <li className="pb-2">Beermaking</li>
                                            <li className="pb-2">Deception</li>
                                            <li className="pb-2">Ballroom dancing</li>
                                            <li>Herblore</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {section.id === 'resources' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        Resources are assets or structures that are useful to your vampire, or items they value. They can be items your vampire carries around with them, or posessions that cannot be physically hauled away with the vampire when they leave an area. Big or small, a Resource is a Resource.
                                    </p>
                                    <p className="mb-4">When creating your vampire, the Resources you create should be Resources they obtained while still mortal.</p>
                                    <p className="mb-4">When a Prompt instructs you to create Resources, be sure to create ones that are contextually appropriate -- even if this leads to Resources that aren&apos;t necessarily the most exciting or useful.</p>
                                    <p>Examples:</p>
                                    <div className="ml-12 mt-2">
                                        <ul className="list-disc">
                                            <li className="pb-2">Diamon tiara</li>
                                            <li className="pb-2">A lucky penny</li>
                                            <li className="pb-2">A Roman legion</li>
                                            <li className="pb-2">A box of candles</li>
                                            <li className="pb-2">the Kenilworth Castle</li>
                                            <li className="pb-2">Ornate walking staff</li>
                                            <li>Large kine of cows</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {section.id === 'conversion' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        Conversion refers to the event in which your character turned into a vampire. It is comprised of three aspects: the Immortal, the Mark, and the Memory encapsulating the event. 
                                    </p>
                                    <p className="mb-4">The Immortal is the creature that gifted (or cursed) your vampire with unlife. Give your Immortal name and briefly describe them, as you would any character. To restate, Immortals are undying supernatural beings. They may be other vampires, angels or demons, ghosts, animated corpses, or whatever you may conjure.</p>
                                    <p className="mb-4">A Mark is a visible indication of your vampire&apos;s undying state, or any other thing that sets them apart from mortal people. A Mark is imparted by the Immortal and something your vampire carries for their entire existence. How your vampire received their Mark should be told through the Memory.</p>
                                    <p>Examples:</p>
                                    <div className="ml-12 mt-2">
                                        <ul className="list-disc">
                                            <li><em className="italic">Immortal:</em> Baron Hollmueller, an Austrian noble and vampire; he stole the deed to my land</li>
                                            <p><em className="italic">Mark:</em> My neck is permanently broken</p>
                                            <p><em className="italic">Memory:</em> I duel the Baron Hollmueller across the roof of the abbey; he nearly cuts my head from my shoulders but I do not die.</p>

                                            <li className="pt-2"><em className="italic">Immortal:</em> Vyri, a stick-thin demon that lives in a cave</li>
                                            <p><em className="italic">Mark:</em> Skin like ice; I am careful not to touch anyone</p>
                                            <p><em className="italic">Memory:</em> Wandering through the hills, I hear someone crying for help; it is a trick by the demon Vyri, who drinks my blood then casts me into a mountain stream -- Hania and her husband pull me from the water hours later, thinking me dead.</p>

                                            <li className="pt-2"><em className="italic">Immortal:</em> Qadir, an ancient vampire, stuck in bat-form for over one thousand years</li>
                                            <p><em className="italic">Mark:</em> A pair of great bat wings -- I sawed them off but the stubs remain</p>
                                            <p><em className="italic">Memory:</em> I am walking home after a night shift when the gigantic Qadir vampire-bat swoops down from the sky and sinks its talons into my back; I pass out, drained of blood, and wake up bat-winged.</p>

                                            <li className="pt-2"><em className="italic">Immortal: Diniel, a dark angel with alluring charisma</em> </li>
                                            <p><em className="italic">Mark:</em> A dark halo I cover with tall hats</p>
                                            <p><em className="italic">Memory:</em> I am visited by the angel Diniel and fall for their charm; as they drink my blood, a halo forms above my head, black as sin.</p>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {section.id === 'memories' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
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
                                                <li>Stealth</li>
                                                <li>Bravery</li>
                                                <li>Survival</li>
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
                                                <li>Sam journeys with me to Mordor and slays the spider Shelob, saving me.</li>
                                                <li>Gandalf visits the Shire and teaches me how to blow smoke rings.</li>
                                                <li>Gollum tries to steal my ring at Mount Doom by jumping on me and violently attacking.</li>
                                                <li>Slipping the ring onto my finger, I enter the spirit world where the blaze of Sauron&apos;s eye drains me of my blood, turning me into a vampire.</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Conversion</h2>
                                            <p>
                                                <strong>Immortal:</strong> Sauron
                                            </p>
                                            <p>
                                                <strong>Conversion Experience:</strong> Slipping the ring onto my finger, I enter the spirit world where the blaze of Sauron&apos;s eye drains me of my blood, turning me into a vampire.
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
                                                <li>Squidward asks for help blowing bubbles, so I show him the technique; he ends up blowing a bubble so large, it absorbs his home and floats away.</li>
                                                <li>I visit Sandy in her dome for the first time; the lack of water almost killed me as I began to shrivel and crackle in dryness.</li>
                                                <li>Plankton, revealing himself in his demon form, enters my brain using a brain-control device that turns me into a vampire, in the hopes of stealing the Krabby Patty secret formula.</li>
                                            </ul>
                                        </div>
                                        <div className="mb-6">
                                            <h2 className="font-semibold mb-2 border-b border-red-300 max-w-48 text-red-300">Conversion</h2>
                                            <p>
                                                <strong>Immortal:</strong> Plankton
                                            </p>
                                            <p>
                                                <strong>Conversion Experience:</strong> Plankton, revealing himself in his demon form, enters my brain using a brain-control device that turns me into a vampire, in the hopes of stealing the Krabby Patty secret formula. 
                                            </p>
                                            <p>
                                                <strong>Mark:</strong> The brain-control device remains stuck in my brain and causes me to sneeze bubbles. 
                                            </p>
                                        </div>
                                    </AccordionItem>
                                </div>
                            )}
                            {section.id === 'credits' && (
                                <div className="max-w-6xl bg-zinc-800 p-6 rounded-lg border border-solid border-stone-400">
                                    <p className="mb-4">
                                        This game is inspired by the solo role-playing journaling game Thousand Year Old Vampire by Tim Hutchings. You can find more information about Thousand Year Old Vampire <a className="underline text-red-300 hover:text-red-400" href="https://thousandyearoldvampire.com/" target="_blank">here</a>.
                                    </p>
                                    <p>
                                        Website made by <a className="underline text-red-300 hover:text-red-400" href="https://kellylloyd.kiwi/" target="_blank" title="View my Portfolio">Kelly Lloyd</a> | GitHub <a href="https://github.com/kellyjellykitten/vampire-game/tree/rework-memories" target="_blank" title="View GitHub Repository"><MdOpenInNew className="inline text-red-300 hover:text-red-400 text-2xl" /></a>
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