import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVampire } from '../VampireContext';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const SideCharactersPage = () => {
    const { vampire, setVampire } = useVampire();
    const [sideCharacters, setSideCharacters] = useState(vampire.sideCharacters)

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setVampire((prev) => ({ ...prev, sideCharacters }));
        navigate('/create/skills');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/name')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="p-4 mb-6 border rounded bg-gray-100">
                <h2 className="text-lg font-bold">Vampire Info</h2>
                <p><strong>Name:</strong> {vampire.name || "Not entered"}</p>
                <p><strong>Origin:</strong> {vampire.memories[0].experiences[0] || "Not entered"}</p>
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Three Mortal Characters</h1>
            <p>In one sentence each, create three characters that have some relationship to your soon-to-be-vampire. Describe their name and relationship.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            {/* map loops over each sideCharacter & creates a section with input for the description. Each text area is tied to its own specific side character */}
            {sideCharacters.map((sideCharacter, index) => (
                <div key={index} className="mb-6">
                    {/* "for" references each textarea's unique id (description-0m description-1, description-2) for screen readers */}
                    <label htmlFor={`description-${index}`} className="block text-lg font-medium text-gray-700 mb-2">Side Character {index + 1}</label>
                    {/* name attribute is added in case need to submit form data to backend */}
                    <textarea
                        id="sideCharacter"
                        name="sideCharacter"
                        value={sideCharacter}
                        onChange={(e) => {
                            const updatedSideCharacters = [...sideCharacters];
                            updatedSideCharacters[index] = e.target.value;
                            setSideCharacters(updatedSideCharacters);
                        }}
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
        <HelpModal
            content="Enter the three characters blach bderkeb blah ablach blah blah blah"
        />
        </div>
    )
}

export default SideCharactersPage;