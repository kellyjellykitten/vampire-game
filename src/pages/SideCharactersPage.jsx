import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSideCharacters } from '../vampireSlice';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const SideCharactersPage = () => {
    const dispatch = useDispatch();
    const vampire = useSelector((state) => state.vampire)

    // ensure sideCharacters exists before accessing
    const sideCharacters = vampire.sideCharacters || ["", "", ""];

    const [localSideCharacters, setLocalSideCharacters] = useState([...sideCharacters]);
    
    const navigate = useNavigate();

    const handleSideCharacterChange = (index, value) => {
        const updatedSideCharacters = [...localSideCharacters];
        updatedSideCharacters[index] = value;
        setLocalSideCharacters(updatedSideCharacters);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localSideCharacters.forEach((sideCharacter, index) => {
            dispatch(setSideCharacters({ index, value: sideCharacter }));
        });
        navigate('/create/skills');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/name')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Side Characters
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="text-base md:text-lg mb-6">In one sentence each, create three mortal characters that have some relationship to your vampire-to-be. Give their name and a brief description of the nature of their relationship to you. Don&apos;t get too attached -- some of these characters may end up your victims later on!</p>
            </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
            {/* map loops over each sideCharacter & creates a section with input for the description. Each text area is tied to its own specific side character */}
            {localSideCharacters.map((sideCharacter, index) => (
                <div key={index} className="mb-6">
                    {/* "for" references each textarea's unique id (description-0m description-1, description-2) for screen readers */}
                    <label htmlFor={`description-${index}`} className="block text-lg font-medium mb-2">Side Character {index + 1}</label>
                    {/* name attribute is added in case need to submit form data to backend */}
                    <textarea
                        id="sideCharacter"
                        name="sideCharacter"
                        value={sideCharacter}
                        onChange={(e) => handleSideCharacterChange(index, e.target.value)}
                        placeholder="Enter description here"
                        required
                        rows="3"
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            ))}
            <div className="flex justify-around">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </form>
        <HelpModal
            title="Side Character Help"
            content={
                <div>
                    <p className="mb-3">
                        Your three side characters can be of any relation to you, so long as there is a connection to you in your mortal life. They could be a family member, a friend, or even a rival. Describe them in one sentence each.
                    </p>
                    <p className="mb-3">
                        For example: <span className="text-red-300 italic">Greta, the owner of the general store from which I buy my fruits.</span> - or - <span className="text-red-300 italic">Patrick, my trusted best friend and starfish with whom I go jelly-fishing.</span>
                    </p>
                    <p>
                        Visit the <a href="/help" className="text-blue-400 hover:text-blue-300 underline" target="_blank">help page</a> for more examples.
                    </p>
                </div>
            }
        />
        </div>
    )
}

export default SideCharactersPage;