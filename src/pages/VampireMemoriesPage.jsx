import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { setMemoryExperience } from '../vampireSlice';
// import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { setMemoryExperience } from '../vampireSlice';

const VampireMemoriesPage = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const memories = useSelector((state) => state.vampire?.memories || []);

    const [localMemories, setLocalMemories] = useState(() => {
        return memories.map((memory) => [...memory.experiences]);
    });

    const handleMemoryChange = (memoryIndex, experienceIndex, value) => {
        // prevent modifying protected slots
        if (
            (memoryIndex === 0 && experienceIndex === 0) || // Reserved experience
            (memoryIndex === 4 && experienceIndex === 2) // Reserved slot
        ) {
            return;
        }

        const updatedMemories = [...localMemories];
        updatedMemories[memoryIndex][experienceIndex] = value;
        setLocalMemories(updatedMemories);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localMemories.forEach((experiences, memoryIndex) => {
            experiences.forEach((experience, experienceIndex) => {
                if (
                    experience &&
                    !(
                        (memoryIndex === 0 && experienceIndex === 0) || // Prevent overwriting initial memory
                        (memoryIndex === 4 && experienceIndex === 2) // Prevent overwriting reserved slot
                    )
                ) {
                    dispatch(
                        setMemoryExperience({
                            memoryId: (memoryIndex + 1).toString(),
                            experienceIndex,
                            value: experience,
                        })
                    );
                }
            });
        });

        navigate('/create/conversion');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/resources')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Three Resources</h1>
            <p>Create three resources for your vampire-to-be.</p>
        <form onSubmit={handleSubmit}>
            {localMemories.map((experiences, memoryIndex) => {
            // Define experience limits per memory slot
            const requiredExperiences = [1, 2, 3, 3, 2]; // Amount needed per memory

            return (
                <div key={memoryIndex} className="mb-6">
                    <h3 className="text-lg font-semibold">
                        Memory {memoryIndex + 1}
                    </h3>
                    {experiences.map((experience, experienceIndex) => {
                        if (experienceIndex >= requiredExperiences[memoryIndex]) {
                            return null; // Don't render extra input fields
                        }

                        const isDisabled =
                            (memoryIndex === 0 && experienceIndex === 0) || // Locked slot
                            (memoryIndex === 4 && experienceIndex === 2); // Reserved slot

                        return (
                            <div key={experienceIndex} className="mb-2">
                                <label className="block text-sm font-medium">
                                    Experience {experienceIndex + 1}:
                                </label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    value={experience}
                                    onChange={(e) =>
                                        handleMemoryChange(memoryIndex, experienceIndex, e.target.value)
                                    }
                                    disabled={isDisabled}
                                />
                            </div>
                        );
                    })}
                </div>
            );
            })}
        </form>
            <div className="flex justify-center">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </div>
        
    )
}

export default VampireMemoriesPage;