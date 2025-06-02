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
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-semibold mb-6">Create Three Side Characters</h1>
            <p className="mb-6">In one sentence each, create three mortal characters that have some relationship to your soon-to-be-vampire. Describe their name and relationship.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-600 text-white p-6 rounded-lg shadow-md">
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
            content="Enter the three characters blach bderkeb blah ablach blah blah blah"
        />
        </div>
    )
}

export default SideCharactersPage;