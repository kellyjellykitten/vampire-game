import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSideCharacters, setMemoryExperience } from '../vampireSlice';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import ProgressTracker from '../components/ProgressTracker';
import CharacterInfoPanel from '../components/CharacterInfoPanel';

const SideCharactersPage = () => {
    const dispatch = useDispatch();
    const vampire = useSelector((state) => state.vampire)

    // ensure sideCharacters exists before accessing
    const sideCharacters = vampire.sideCharacters || ["", "", ""];
    // ensure memories exist & get relevant indices (1, 2, 3)
    const memories = vampire.memories || ["", "", "", "", ""]
    const characterMemories = [memories[1] || "", memories[2] || "", memories[3] || ""];

    const [localSideCharacters, setLocalSideCharacters] = useState([...sideCharacters]);
    const [localCharMemories, setLocalCharMemories] = useState([...characterMemories]);
    
    const navigate = useNavigate();

    const handleSideCharacterChange = (index, value) => {
        const updatedSideCharacters = [...localSideCharacters];
        updatedSideCharacters[index] = value;
        setLocalSideCharacters(updatedSideCharacters);
    };

    const handleCharMemoriesChange = (index, value) => {
        const updatedCharMemories = [...localCharMemories];
        updatedCharMemories[index] = value;
        setLocalCharMemories(updatedCharMemories);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        localSideCharacters.forEach((sideCharacter, index) => {
            dispatch(setSideCharacters({ index, value: sideCharacter }));
        });

        localCharMemories.forEach((charMemory, index) => {
            dispatch(setMemoryExperience({ index: index + 1, value: charMemory }));
        });

        navigate('/create/skills');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/name')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <div className="mt-8">
                <ProgressTracker currentStep="characters" />
            </div>
            <CharacterInfoPanel currentStep="characters" />
            <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-4 md:mt-10 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Side Characters
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="md:text-lg mb-6">Create three mortal Characters that have some relationship with your vampire-to-be. Write each Character&apos;s name and description in a sentence fragment. Are they a friend? Foe? Family? Then, create a Memory your vampire-to-be has with that Character. This Memory can be of any experience or relation with that Character.</p>
                <p className="md:text-lg mb-6">Example: <span className="text-red-300 italic">Rosa, my elderly mother, who lives in my homestead</span>  | <span className="text-red-300 italic">All day, Rosa sits quietly by the beer vat; she says it sings sweet songs to her, and she carves what she hears onto a walking staff.</span></p>
                <p className="md:text-lg mb-6">Visit the <a href="/help" className="text-blue-400 hover:text-blue-300 underline" target="_blank">help page</a> for more examples.</p>
            </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
            {/* map loops over each sideCharacter & creates a section with inputs for character and memory */}
            {localSideCharacters.map((sideCharacter, index) => (
                <div key={index} className="mb-8">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600 mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-red-300">
                            Side Character {index + 1}
                        </h3>
                        <div className="mb-4">
                            <label htmlFor={`character-${index}`} className="block text-lg font-medium mb-2">Character Name & Description</label>
                            <textarea
                                id={`character-${index}`}
                                name={`character-${index}`}
                                value={sideCharacter}
                                onChange={(e) => handleSideCharacterChange(index, e.target.value)}
                                placeholder="Enter character name and description here"
                                required
                                rows="2"
                                className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        
                        <div className="mb-2">
                            <label htmlFor={`memory-${index}`} className="block text-lg font-medium mb-2">
                                Memory with Character {index + 1}
                            </label>
                            <textarea
                                id={`memory-${index}`}
                                name={`memory-${index}`}
                                value={localCharMemories[index]}
                                onChange={(e) => handleCharMemoriesChange(index, e.target.value)}
                                placeholder="Describe a memory you have with this character"
                                required
                                rows="3"
                                className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    {/* Divider line b/w characters except after last one */}
                    {index < localSideCharacters.length - 1 && (
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex-grow border-t border-gray-500"></div>
                            <div className="px-4 text-gray-400 text-sm">*</div>
                            <div className="flex-grow border-t border-gray-500"></div>
                        </div>
                    )}
                </div>
            ))}
            <div className="flex justify-around">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </form>
        </div>
    )
}

export default SideCharactersPage;