import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSkills } from '../vampireSlice';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireSkillsPage = () => {
    const dispatch = useDispatch();
    const vampire = useSelector((state) => state.vampire)

    // ensure skills exists before accessing
    const skills = vampire.skills || ["", "", ""];

    const [localSkills, setLocalSkills] = useState([...skills]);

    const navigate = useNavigate();

    // Handle change for each skill name input
    const handleSkillChange = (index, value) => {
        const updatedSkills = [...localSkills];
        updatedSkills[index] = value;
        setLocalSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localSkills.forEach((skill, index) => {
            dispatch(setSkills({ index, value: skill }));
        });
        navigate('/create/resources');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/characters')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Skills
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="text-base md:text-lg mb-6">Create three skills fitting for your vampire-to-be. These skills can be anything from beer-making to swordfighting.</p>
            </div>
            
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
            {localSkills.map((skill, index) => (
                <div key={index} className="mb-6">
                    <label htmlFor={`skill-name-${index}`} className="block text-lg font-medium mb-2">Skill {index + 1}</label>
                    <input
                        type="text"
                        id={`skill-name-${index}`}
                        name={`skillName-${index}`}
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        placeholder="Enter skill here"
                        required
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
            title="Skills Help"
            content={
                    <div>
                        <p className="mb-3">
                            Skills  
                        </p>
                        <p className="mb-3">
                            For example: <span className="text-red-300 italic">Persuasion</span> - or - <span className="text-red-300 italic">Cooking Krabby Patties</span>
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

export default VampireSkillsPage;