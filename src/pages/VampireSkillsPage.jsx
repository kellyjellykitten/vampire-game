import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireSkillsPage = () => {
    const [skills, setSkills] = useState([
        { name: '' },
        { name: '' },
        { name: '' }
    ]);

    const navigate = useNavigate();

    // Handle change for each skill name input
    const handleChange = (index, value) => {
        const updatedSkills = [...skills];
        updatedSkills[index].name = value;
        setSkills(updatedSkills);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (!form.checkValidity()) {
            alert("Please fill out the required fields.")
        }
        console.log('Skills:', skills);
        navigate('/create/resources');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/characters')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
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
        </div>
    )
}

export default VampireSkillsPage;