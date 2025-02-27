import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import { setMemoryExperience } from '../vampireSlice';

const VampireMemoriesPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const memories = useSelector(state => state.vampire?.memories);

    // initialize local state for the 3 experiences
    const [memoryInputs, setMemoryInputs] = useState({
        memory2: '',
        memory3: '',
        memory4: ''
    });

    // update local state when Redux state changes
    useEffect(() => {
        if (memories?.length >= 4) {
            setMemoryInputs({
                memory2: memories[1]?.experiences[0] || '',
                memory3: memories[2]?.experiences[0] || '',
                memory4: memories[3]?.experiences[0] || ''
            });
        }
    }, [memories]);

    const handleInputChange = (field, value) => {
        setMemoryInputs(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // save to memory 2 (index 1)
        if (memoryInputs.memory2) {
            dispatch(setMemoryExperience({
                memoryId: "2",
                experienceIndex: 0,
                value: memoryInputs.memory2
            }));
        }
        // save to memory 3 (index 2)
        if (memoryInputs.memory3) {
            dispatch(setMemoryExperience({
                memoryId: "3",
                experienceIndex: 0,
                value: memoryInputs.memory3
            }));
        }
        // save to memory 4 (index 3)
        if (memoryInputs.memory4) {
            dispatch(setMemoryExperience({
                memoryId: "4",
                experienceIndex: 0,
                value: memoryInputs.memory4
            }));
        }

        navigate('/create/conversion');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/resources')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Experiences</h1>
            <p className="mb-6">Create experiences for your vampire-to-be.</p>
            
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                {/* Memory 2 Input */}
                <div className="mb-6 p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Memory 2</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Experience:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={memoryInputs.memory2}
                            onChange={(e) => handleInputChange('memory2', e.target.value)}
                            placeholder="Enter an experience..."
                        />
                    </div>
                </div>
                
                {/* Memory 3 Input */}
                <div className="mb-6 p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Memory 3</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Experience:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={memoryInputs.memory3}
                            onChange={(e) => handleInputChange('memory3', e.target.value)}
                            placeholder="Enter an experience..."
                        />
                    </div>
                </div>
                
                {/* Memory 4 Input */}
                <div className="mb-6 p-4 bg-white rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Memory 4</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Experience:
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded"
                            value={memoryInputs.memory4}
                            onChange={(e) => handleInputChange('memory4', e.target.value)}
                            placeholder="Enter an experience..."
                        />
                    </div>
                </div>
                
                <div className="flex justify-between mt-6">
                    <BackButton onClick={handleBack} />
                    <NextButton onClick={handleSubmit} />
                </div>
            </form>
            
            <HelpModal
                content="Enter experiences for your vampire character's memories."
            />
        </div>
    )
}

export default VampireMemoriesPage;