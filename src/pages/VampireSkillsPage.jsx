import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireSkillsPage = () => {
    const [name, setName] = useState("")
    const [sideCharacters, setSideCharacters] = useState([])

    const [skills, setSkills] = useState([
        { name: '' },
        { name: '' },
        { name: '' }
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem("vampireName");
        const storedSideCharacters = localStorage.getItem("vampireSideCharacters");

        if (storedName) {
            setName(storedName);
        }
        if (storedSideCharacters) {
            setSideCharacters(JSON.parse(storedSideCharacters));
        }
    }, [])

    // Handle change for each skill name input
    const handleChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].name = value;
        setSkills(updatedSkills);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("vampireSkills", JSON.stringify(skills));
        console.log('Skills:', skills);
        navigate('/create/resources');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/characters')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="p-4">
                <h2 className="font-semibold">Character Info</h2>
                <p className="mt-2">Character Name: {name || "No name provided"}</p>
                <h3>Side Characters:</h3>
                <ul className="mt-2">
                    {sideCharacters.length > 0 ? (
                        sideCharacters.map((sideCharacter, index) => (
                            <li key={index} className="p-2 border-b">{sideCharacter.description}</li>
                        ))
                    ) : (
                        <li>No side characters provided</li>
                    )}
                </ul>
            </div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Three Skills</h1>
            <p>Create three skills fitting for your vampire-to-be.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                    <label htmlFor={`skill-name-${index}`} className="block text-lg font-medium text-gray-700 mb-2">Skill {index + 1}</label>
                    <input
                        type="text"
                        id={`skill-name-${index}`}
                        name={`skillName-${index}`}
                        value={skill.name}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="Enter skill here"
                        required
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
            content="Enter the name of your vampire blach bderkeb blah ablach blah blah blah"
        />
        </div>
    )
}

export default VampireSkillsPage;