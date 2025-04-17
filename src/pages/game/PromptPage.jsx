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
import CharacterSheetSidebar from '../../components/CharacterSheetSidebar';
import SidebarToggleButton from '../../components/SidebarToggleButton';

const PromptPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get vampire data from redux store
    const vampire = useSelector((state) => state.vampire.vampire);

    // Get prompt from session storage
    const [promptNumber, setPromptNumber] = useState(1);
    const [prompt, setPrompt] = useState(null);

    // Character sheet sidebar state
    const [showSidebar, setShowSidebar] = useState(false);

    // Local state for form inputs
    const [experience, setExperience] = useState('');
    const [selectedMemory, setSelectedMemory] = useState('1');
    const [newSkill, setNewSkill] = useState('');
    const [newResource, setNewResource] = useState('');
    const [newSideCharacter, setNewSideCharacter] = useState('');
    const [resourceToLose, setResourceToLose] = useState('');
    const [skillToLose, setSkillToLose] = useState('');
    const [sideCharacterToLose, setSideCharacterToLose] = useState('');
    const [showSummary, setShowSummary] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Effect to load prompt number from session storage
    useEffect(() => {
        const storedPromptNumber = parseInt(sessionStorage.getItem('promptNumber')) || 1;
        setPromptNumber(storedPromptNumber);
        setPrompt(getPromptById(storedPromptNumber));
    }, []);

    // Filter out empty resources, skills, & characters for dropdowns
    const availableResources = vampire.resources.filter(resource => resource);
    const availableSkills = vampire.skills.filter(skill => skill);
    const availableSideCharacters = vampire.sideCharacters.filter(sideCharacter => sideCharacter);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Find the first empty experience slot in the selected memory
        const memory = vampire.memories.find(mem => mem.id === selectedMemory);
        const emptyExperienceIndex = memory?.experiences.findIndex(exp => !exp) || 0;

        // Update memory experience
        dispatch(setMemoryExperience({
            memoryId: selectedMemory,
            experienceIndex: emptyExperienceIndex,
            value: experience
        }));

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
            // Remove resource if required
            if (prompt.instructions.loseResource && resourceToLose) {
                const resourceIndex = vampire.resources.findIndex(res => res === resourceToLose);
                if (resourceIndex !== -1) {
                    dispatch(setResources({
                        index: resourceIndex,
                        value: '' //Clear the resource
                    }));
                }
            }
            // Remove skill if required
            if (prompt.instructions.loseSkill && skillToLose) {
                const skillIndex = vampire.skills.findIndex(skill => skill === skillToLose);
                if (skillIndex !== -1) {
                    dispatch(setSkills({
                        index: skillIndex,
                        value: ''
                    }));
                }
            }
            // Remove character if required
            if (prompt.instructions.loseSideCharacter && sideCharacterToLose) {
                const sideCharIndex = vampire.sideCharacters.findIndex(char => char === sideCharacterToLose);
                if (sideCharIndex !== -1) {
                    dispatch(setSideCharacters({
                        index: sideCharIndex,
                        value: ''
                    }));
                }
            }
        }
        // Show updated vampire summary
        setShowSummary(true);
    };

    const handleReset = () => {
        setShowSummary(false);
        setExperience('');
        setNewSkill('');
        setNewResource('');
        setNewSideCharacter('');
    };

    const handleBack = () => {
        navigate('/game/roll')
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
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Prompt #{promptNumber}</h1>

                {/* Sidebar toggle button */}
                <SidebarToggleButton isOpen={showSidebar} toggleSidebar={toggleSidebar} />

                {/* Character sheet sidebar */}
                <CharacterSheetSidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />

                {!showSummary ? (
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                        <div className="flex flex-wrap bg-gray-700 rounded p-4 mb-4">
                            <p>Answer in one sentence. This creates an experience, which you will need to add to a memory of similar subject.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <h2 className="text-xl font-semibold mb-4">Prompt #{promptNumber}</h2>
                            <div className="mt-4 bg-gray-600 rounded-lg p-6">
                                <p className="text-center mb-6">{prompt.text}</p>

                                {/* Experience input - always required */}
                                <div className="mb-10">
                                    <label className="block pt-6 mb-2">Experience</label>
                                    <textarea
                                        value={experience}
                                        onChange={(e) => setExperience(e.target.value)}
                                        placeholder="Answer prompt here..."
                                        required
                                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        rows="3"
                                    />
                                    <label className="block mb-2 mt-4">
                                        Select which Memory to add this Experience to:
                                        <select
                                            value={selectedMemory}
                                            onChange={(e) => setSelectedMemory(e.target.value)}
                                            className="ml-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                        >
                                            {vampire.memories.map((memory) => (
                                                <option key={memory.id} value={memory.id}>
                                                    Memory {memory.id}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                </div>

                                {/* New Character input */}
                                {prompt.instructions.addSideCharacter && (
                                    <div className="mb-10">
                                        <label className="block mb-2">New Side Character</label>
                                        <input
                                            type="text"
                                            value={newSideCharacter}
                                            onChange={(e) => setNewSideCharacter(e.target.value)}
                                            placeholder="Enter new side character side..."
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

                                {/* Resource to lose section */}
                                {prompt.instructions.loseResource && availableResources.length > 0 && (
                                    <div className="mb-6">
                                        <label className="block mb-2">
                                            Select a Resource to lose:
                                            <select
                                                value={resourceToLose}
                                                onChange={(e) => setResourceToLose(e.target.value)}
                                                className="ml-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                                required
                                            >
                                                <option value="" disabled>Select a resource</option>
                                                {availableResources.map((resource, index) => (
                                                    <option key={index} value={resource}>
                                                        {resource}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                )}

                                {/* Skill to lose section */}
                                {prompt.instructions.loseSkill && availableSkills.length > 0 && (
                                    <div className="mb-6">
                                        <label className="block mb-2">
                                            Select a Skill to lose:
                                            <select
                                                value={skillToLose}
                                                onChange={(e) => setSkillToLose(e.target.value)}
                                                className="ml-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                                required
                                            >
                                                <option value="" disabled>Select a skill</option>
                                                {availableSkills.map((skill, index) => (
                                                    <option key={index} value={skill}>
                                                        {skill}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                )}

                                {/* Character to lose section */}
                                {prompt.instructions.loseSideCharacter && availableSideCharacters.length > 0 && (
                                    <div className="mb-6">
                                        <label className="block mb-2">
                                            Select a Character to lose:
                                            <select
                                                value={sideCharacterToLose}
                                                onChange={(e) => setSideCharacterToLose(e.target.value)}
                                                className="ml-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                                                required
                                            >
                                                <option value="" disabled>Select a character</option>
                                                {availableSideCharacters.map((sideCharacter, index) => (
                                                    <option key={index} value={sideCharacter}>
                                                        {sideCharacter}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between mt-8">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                                >
                                    Back to Dice Roll
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    // Show chracter summary after submitting
                    <div className="bg-gray-800 rounded-lg p-6 mb-6">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Updated Character Sheet</h2>

                        {/* Origin Section */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 border-b pb-2">Origin</h3>
                            {vampire.origin.map((origin, index) => (
                                <div key={index} className="mb-4">
                                    <p><strong>Name:</strong> {origin.name || 'No name provided'}</p>
                                    <p><strong>Origin Experience:</strong> {origin.originExperience || 'Not specified'}</p>
                                </div>
                            ))}
                        </section>

                        {/* Side Characters Section */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 border-b pb-2">Side Characters</h3>
                            <ul className="list-disc pl-5">
                                {vampire.sideCharacters.map((character, index) => (
                                    <li key={index} className={`
                                        ${character === newSideCharacter ? 'text-green-400' : ''}
                                        ${character === sideCharacterToLose ? 'line-through text-red-400' : ''}
                                    `}>
                                        {character || 'Empty character slot'}
                                        {character === newSideCharacter && ' (New)'}
                                        {character === sideCharacterToLose && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Skills Section */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 border-b pb-2">Skills</h3>
                            <ul className="list-disc pl-5">
                                {vampire.skills.map((skill, index) => (
                                    <li key={index} className={`
                                        ${skill === newSkill ? 'text-green-400' : ''}
                                        ${skill === skillToLose ? 'line-through text-red-400' : ''}
                                    `}>
                                        {skill || 'Empty skill slot'}
                                        {skill === newSkill && ' (New)'}
                                        {skill === skillToLose && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Resources Section */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 border-b pb-2">Resources</h3>
                            <ul className="list-disc pl-5">
                                {vampire.resources.map((resource, index) => (
                                    <li key={index} className={`
                                        ${resource === newResource ? 'text-green-400' : ''}
                                        ${resource === resourceToLose ? 'line-through text-red-400' : ''}
                                    `}>
                                        {resource || 'Empty resource slot'}
                                        {resource === newResource && ' (New)'}
                                        {resource === resourceToLose && ' (Lost)'}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Memories Section */}
                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 border-b pb-2">Memories</h3>
                            {vampire.memories.map((memory) => (
                                <div key={memory.id} className="mb-4">
                                    <h4 className="font-medium">Memory {memory.id} {memory.id === selectedMemory && '(Updated)'}</h4>
                                    <ul className="list-disc pl-5">
                                        {memory.experiences.map((exp, index) => (
                                            <li key={index} className={`${memory.id === selectedMemory && exp === experience ? 'text-green-400' : ''}`}>
                                                {exp || 'Empty experience slot'}
                                                {memory.id === selectedMemory && exp === experience && ' (New)'}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handleReset}
                                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                            >
                                Make Changes
                            </button>
                            <button
                                onClick={handleContinue}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default PromptPage;