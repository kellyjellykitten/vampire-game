import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    setSkills,
    setResources,
    setMemoryExperience,
    setSideCharacters
} from '../../vampireSlice';
import { getPromptById } from './PromptList';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';
import NextButton from '../../components/NextButton';

const PromptPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get vampire data from redux store
    const vampire = useSelector((state) => state.vampire.vampire);

    // Get prompt from session storage
    const [promptNumber, setPromptNumber] = useState(1);
    const [prompt, setPrompt] = useState(null);



    // Local state for form inputs
    const [newMemory, setNewMemory] = useState('');
    const [newSkill, setNewSkill] = useState('');
    const [newResource, setNewResource] = useState('');
    const [newSideCharacter, setNewSideCharacter] = useState('');

    //Multi-select states
    const [resourcesToLose, setResourcesToLose] = useState([]);
    const [skillsToLose, setSkillsToLose] = useState([]);
    const [sideCharactersToLose, setSideCharactersToLose] = useState([]);

    // Config for multi-selects set based on prompt instructions
    const [resourceLoseCount, setResourceLoseCount] = useState(1);
    const [skillLoseCount, setSkillLoseCount] = useState(1);
    const [sideCharacterLoseCount, setSideCharacterLoseCount] = useState(1);

    const [showSummary, setShowSummary] = useState(false);

    const [showCharacterSheet, setShowCharacterSheet] = useState(false);

    // Effect to load prompt number from session storage
    useEffect(() => {
        const storedPromptNumber = parseInt(sessionStorage.getItem('promptNumber')) || 1;
        setPromptNumber(storedPromptNumber);
        const loadedPrompt = getPromptById(storedPromptNumber);
        setPrompt(loadedPrompt);

        // Set multi-select counts based on prompt instructions
        if (loadedPrompt) {
            setResourceLoseCount(loadedPrompt.instructions.loseResourceCount || 1);
            setSkillLoseCount(loadedPrompt.instructions.loseSkillCount || 1);
            setSideCharacterLoseCount(loadedPrompt.instructions.loseSideCharacterCount || 1);
        }
    }, []);

    // Filter out empty resources, skills, & characters for dropdowns
    const availableResources = vampire.resources.filter(resource => resource);
    const availableSkills = vampire.skills.filter(skill => skill);
    const availableSideCharacters = vampire.sideCharacters.filter(sideCharacter => sideCharacter);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hide character sheet when submitting
        setShowCharacterSheet(false);

        // Add new memory to memories array
        const emptyMemoryIndex = vampire.memories.findIndex(mem => !mem);
        if (emptyMemoryIndex !== -1) {
            dispatch(setMemoryExperience({
                index: emptyMemoryIndex,
                value: newMemory
            }));
        } else {
            dispatch(setMemoryExperience({
                index: vampire.memories.length,
                value: newMemory
            }))
        }

        // Apply changes based on prompt instructions
        if (prompt) {
            // Add new skill if required
            if (prompt.instructions.addSkill && newSkill) {
                const emptySkillIndex = vampire.skills.findIndex(skill => !skill);
                if (emptySkillIndex !== -1) {
                    dispatch(setSkills({
                        index: emptySkillIndex,
                        value: newSkill
                    }));
                } else {
                    dispatch(setSkills({
                        index: vampire.skills.length,
                        value: newSkill
                    }));
                }
            }
            // Add a new resource if required
            if (prompt.instructions.addResource && newResource) {
                const emptyResourceIndex = vampire.resources.findIndex(resource => !resource);
                if (emptyResourceIndex !== -1) {
                    dispatch(setResources({
                        index: emptyResourceIndex,
                        value: newResource
                    }));
                } else {
                    dispatch(setResources({
                        index: vampire.resources.length,
                        value: newResource
                    }));
                }
            }
            // Add new character if required
            if (prompt.instructions.addSideCharacter && newSideCharacter) {
                const emptyCharacterIndex = vampire.sideCharacters.findIndex(char => !char);
                if (emptyCharacterIndex !== -1) {
                    dispatch(setSideCharacters({
                        index: emptyCharacterIndex,
                        value: newSideCharacter
                    }));
                } else {
                    dispatch(setSideCharacters({
                        index: vampire.sideCharacters.length,
                        value: newSideCharacter
                    }));
                }
            }
            // Handle multiple resource losses
            if (prompt.instructions.loseResource && resourcesToLose > 0) {
                resourcesToLose.forEach(resourceToLose => {
                    const resourceIndex = vampire.resources.findIndex(res => res === resourceToLose);
                    if (resourceIndex !== -1) {
                        dispatch(setResources({
                            index: resourceIndex,
                            value: '' // Clear the resource
                        }));
                    }
                });
            }
            // Handle multiple skill losses
            if (prompt.instructions.loseSkill && skillsToLose.length > 0) {
                skillsToLose.forEach(skillToLose => {
                    const skillIndex = vampire.skills.findIndex(skill => skill === skillToLose);
                    if (skillIndex !== -1) {
                        dispatch(setSkills({
                            index: skillIndex,
                            value: ''
                        }));
                    }
                });
            }
            // Handle multiple character losses
            if (prompt.instructions.loseSideCharacter && sideCharactersToLose.length > 0) {
                sideCharactersToLose.forEach(sideCharacterToLose => {
                    const sideCharIndex = vampire.sideCharacters.findIndex(char => char === sideCharacterToLose);
                    if (sideCharIndex !== -1) {
                        dispatch(setSideCharacters({
                            index: sideCharIndex,
                            value: ''
                        }));
                    }
                });
            }
        }
        
        // Show updated vampire summary
        setShowSummary(true);
        if (promptNumber >= 25) {
            navigate('/game/gameover')
        }
    };
    const toggleCharacterSheet = () => {
            setShowCharacterSheet(!showCharacterSheet);
    }

    const handleBack = () => {
        // Revert to previous prompt #
        const previousPromptNumber = sessionStorage.getItem('previousPromptNumber');
        if (previousPromptNumber && previousPromptNumber !== '0') {
            sessionStorage.setItem('promptNumber', previousPromptNumber);
        } else {
            sessionStorage.removeItem('promptNumber')
        }
        sessionStorage.removeItem('previousPromptNumber');
        navigate('/game/roll');
    };

    const handleContinue = () => {
        navigate('/game/roll');
    };

    if (!prompt) {
        return <div className="">
            <p className="text-xl">Loading prompt...</p>
        </div>;
    };

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-16 text-center"> 
                    <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">Prompt #{promptNumber}</span>
                </h1>

                {!showSummary ? (
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        
                        <div className="flex flex-wrap bg-gray-700 rounded p-4 mb-4">
                            <p className="text-center m-6 text-lg">{prompt.text}</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mt-4 bg-gray-600 rounded-lg p-6">
                                
                                {/* Memory input - always required */}
                                <div className="mb-10">
                                    <label className="block pt-6 mb-2">Memory</label>
                                    <textarea
                                        value={newMemory}
                                        onChange={(e) => setNewMemory(e.target.value)}
                                        placeholder="Answer prompt here..."
                                        required
                                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        rows="4"
                                    />
                                </div>

                                {/* New Character input */}
                                {prompt.instructions.addSideCharacter && (
                                    <div className="mb-10">
                                        <label className="block mb-2">New Side Character</label>
                                        <input
                                            type="text"
                                            value={newSideCharacter}
                                            onChange={(e) => setNewSideCharacter(e.target.value)}
                                            placeholder="Enter new side character..."
                                            className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                )}

                                {/* New Skill input */}
                                {prompt.instructions.addSkill && (
                                    <div className="mb-10">
                                        <label className="block mb-2">New Skill</label>
                                        <input
                                            type="text"
                                            value={newSkill}
                                            onChange={(e) => setNewSkill(e.target.value)}
                                            placeholder="Enter new skill here..."
                                            className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                )}

                                {/* New Resource input */}
                                {prompt.instructions.addResource && (
                                    <div className="mb-10">
                                        <label className="block mb-2">New Resource</label>
                                        <input
                                            type="text"
                                            value={newResource}
                                            onChange={(e) => setNewResource(e.target.value)}
                                            placeholder="Enter new resource here..."
                                            className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                )}

                                {/* Resource(s) to lose section */}
                                {prompt.instructions.loseResource && availableResources.length > 0 && (
                                    <MultiSelectDropdown
                                        items={availableResources}
                                        selectedItems={resourcesToLose}
                                        onChange={setResourcesToLose}
                                        label={`Select Resource${resourceLoseCount > 1 ? 's' : ''} to lose`}
                                        placeholder="Select resources to lose"
                                        required={prompt.instructions.loseResource}
                                        max={resourceLoseCount}
                                    />
                                )}

                                {/* Skill(s) to lose section */}
                                {prompt.instructions.loseSkill && availableSkills.length > 0 && (
                                    <MultiSelectDropdown
                                        items={availableSkills}
                                        selectedItems={skillsToLose}
                                        onChange={setSkillsToLose}
                                        label={`Select Skill${skillLoseCount > 1 ? 's' : ''} to lose`}
                                        placeholder="Select skills to lose"
                                        required={prompt.instructions.loseSkill}
                                        max={skillLoseCount}
                                    />
                                )}

                                {/* Character(s) to lose section */}
                                {prompt.instructions.loseSideCharacter && availableSideCharacters.length > 0 && (
                                    <MultiSelectDropdown
                                        items={availableSideCharacters}
                                        selectedItems={sideCharactersToLose}
                                        onChange={setSideCharactersToLose}
                                        label={`Select Character${sideCharacterLoseCount > 1 ? 's' : ''} to lose`}
                                        placeholder="Select characters to lose"
                                        required={prompt.instructions.loseSideCharacter}
                                        max={sideCharacterLoseCount}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-8">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="w-full sm:w-auto px-6 py-4 text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500 font-medium"
                                >
                                    Back to Dice Roll
                                </button>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-purple-800 hover:bg-purple-900 text-white px-6 py-4 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                onClick={toggleCharacterSheet}
                                className="px-6 py-3 text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl border border-emerald-600 hover:border-emerald-500"
                            >
                                {showCharacterSheet ? "Hide Character Sheet" : "Show Character Sheet"}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Show character summary after submitting
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Updated Character Sheet</h2>

                        {/* Origin Section */}
                        <section className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Origin</h3>
                            {vampire.origin.map((origin, index) => (
                                <div key={index} className="mb-4">
                                    <p><strong>Name:</strong> {origin.name || 'No name provided'}</p>
                                    <p><strong>Origin Experience:</strong> {origin.originExperience || 'Not specified'}</p>
                                </div>
                            ))}
                        </section>

                        {/* Side Characters Section */}
                        <section className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Side Characters</h3>
                            <ul className="list-disc pl-5">
                                {vampire.sideCharacters.map((character, index) => (
                                    <li key={index} className={`
                                        ${character === newSideCharacter ? 'text-green-400' : ''}
                                        ${sideCharactersToLose.includes(character) ? 'line-through text-red-400' : ''}
                                    `}>
                                        {character || 'Empty character slot'}
                                        {character === newSideCharacter && ' (New)'}
                                        {sideCharactersToLose.includes(character) && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Skills Section */}
                        <section className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Skills</h3>
                            <ul className="list-disc pl-5">
                                {vampire.skills.map((skill, index) => (
                                    <li key={index} className={`
                                        ${skill === newSkill ? 'text-green-400' : ''}
                                        ${skillsToLose.includes(skill) ? 'line-through text-red-400' : ''}
                                    `}>
                                        {skill || 'Empty skill slot'}
                                        {skill === newSkill && ' (New)'}
                                        {skillsToLose.includes(skill) && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Resources Section */}
                        <section className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Resources</h3>
                            <ul className="list-disc pl-5">
                                {vampire.resources.map((resource, index) => (
                                    <li key={index} className={`
                                        ${resource === newResource ? 'text-green-400' : ''}
                                        ${resourcesToLose.includes(resource) ? 'line-through text-red-400' : ''}
                                    `}>
                                        {resource || 'Empty resource slot'}
                                        {resource === newResource && ' (New)'}
                                        {resourcesToLose.includes(resource) && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Memories Section */}
                        <section className="mb-6">
                            <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Memories</h3>
                            <ul className="list-disc pl-5">
                                {vampire.memories.map((mem, index) => (
                                    <li key={index} className={`${mem === newMemory ? 'text-green-400' : ''}`}>
                                        {mem || 'Empty memory slot'}
                                        {mem === newMemory && ' (New)'}
                                    </li>
                                ))}
                            </ul>
                        </section>      
                        <div className="flex justify-center mt-8">
                            <NextButton text="Continue" onClick={handleContinue} />
                        </div>
                        
                    </div>
                )}
                
                {/* Character sheet; only show during prompt, not after submission */}
                {showCharacterSheet && !showSummary && (
                <div className="bg-gray-800 rounded-lg p-6 animate-fadeIn">
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Character Sheet</h2>
            
                    {/* Origin Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Origin</h2>
                        {vampire.origin.map((origin, index) => (
                            <div key={index}>
                                <p className="text-base md:text-lg">
                                    <strong>Name:</strong> {origin.name || 'No name provided'}
                                </p>
                                <p className="text-base md:text-lg">
                                    <strong>Origin Experience:</strong> {origin.originExperience || 'Not specified'}
                                </p>
                            </div>
                        ))}
                    </section>

                    {/* Side Characters Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Side Characters</h2>
                        <ul className="list-disc pl-5">
                            {vampire.sideCharacters.map((character, index) => (
                                <li key={index} className="text-base md:text-lg">
                                    {character || `Side Character ${index + 1}: Not specified`}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Skills</h2>
                        <ul className="list-disc pl-5">
                            {vampire.skills.map((skill, index) => (
                                <li key={index} className="text-base md:text-lg">
                                    {skill || `Skill ${index + 1}: Not specified`}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Resources Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Resources</h2>
                        <ul className="list-disc pl-5">
                            {vampire.resources.map((resource, index) => (
                                <li key={index} className="text-base md:text-lg">
                                    {resource || `Resource ${index + 1}: Not specified`}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Memories Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Memories</h2>
                        <ul className="list-disc pl-5">
                            {vampire.memories.map((mem, index) => (
                                <li key={index} className="text-base md:text-lg">
                                    {mem || `Memory ${index + 1}: Not specified`}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conversion Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Conversion</h2>
                        {vampire.conversion.map((conversion, index) => (
                            <div key={index}>
                                <p className="text-base md:text-lg">
                                    <strong>Immortal:</strong> {conversion.immortal || 'Not specified'}
                                </p>
                                <p className="text-base md:text-lg">
                                    <strong>Mark:</strong> {conversion.mark || 'Not specified'}
                                </p>
                                <p className="text-base md:text-lg">
                                <strong>Conversion Experience:</strong> {conversion.conversionExperience || 'Not specified'}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            )}
            </div>
            
        </div>
    )
};

export default PromptPage;