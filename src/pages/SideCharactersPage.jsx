import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const SideCharactersPage = () => {
    // State for the 3 side characters. Initialize array w/ 3 objects
    const [sideCharacters, setSideCharacters] = useState([
        { description: '' },
        { description: '' },
        { description: '' }
    ]);

    const navigate = useNavigate();

    const handleChange = (index, value) => {
        const updatedSideCharacters = [...sideCharacters];
        updatedSideCharacters[index].description = value;
        setSideCharacters(updatedSideCharacters);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Side characters:', sideCharacters)
        navigate('/create/skills');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/name')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Three Mortal Characters</h1>
            <p>In one sentence each, create three characters that have some relationship to your soon-to-be-vampire. Describe their name and relationship.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            {/* map loops over each sideCharacter & creates a section with input for the description. Each text area is tied to its own specific side character */}
            {sideCharacters.map((sideCharacter, index) => (
                <div key={index} className="mb-6">
                    {/* "for" references each textarea's unique id (description-0m description-1, description-2) for screen readers */}
                    <label htmlFor={`description-${index}`} className="block text-lg font-medium text-gray-700 mb-2">Character {index + 1}</label>
                    {/* name attribute is added in case need to submit form data to backend */}
                    <textarea
                        id={`description-${index}`}
                        name={`sideCharacterDescription-${index}`}
                        value={sideCharacter.description}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="Enter description here"
                        required
                        rows="3"
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            ))}
            <div className="flex justify-center">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </form>
        </div>
    )
}

export default SideCharactersPage;