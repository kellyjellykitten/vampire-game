import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin, setMemoryExperience } from '../vampireSlice';
import NextButton from '../components/NextButton';
import HelpModal from '../components/HelpModal';

const VampireNamePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get current origin state from redux (if any)
    const currentOrigin = useSelector(state =>
        state.vampire?.origin?.[0] || {
            name: "",
            originExperience: ""
        }
    );
    
    // Local state to manage form inputs
    const [originDetails, setOriginDetails] = useState({
        name: currentOrigin.name,
        originExperience: currentOrigin.originExperience
    });

    const handleInputChange = (field, value) => {
        setOriginDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch action to update origin state
        dispatch(setOrigin({
            name: originDetails.name,
            originExperience: originDetails.originExperience
        }));

        // Dispatch action to set origin experience in first memory
        dispatch(setMemoryExperience({
            memoryId: "1",
            experienceIndex: 0,
            value: originDetails.originExperience
        }));

        navigate('/create/characters');
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Vampire Name and Origin</h1>
            <p className="mb-6">Name and first experience (&quot;origin experience&quot;) that is a broad summary of the your vampire&apos;s life before becoming undead -- when, where, who.</p>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={originDetails.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter name"
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="originExperience" className="block text-lg font-medium text-gray-700 mb-2">Origin Experience</label>
                    <textarea
                        id="originExperience"
                        value={originDetails.originExperience}
                        onChange={(e) => handleInputChange('originExperience', e.target.value)}
                        placeholder="Describe from where and when your vampire-to-be originates"
                        required
                        rows="6"
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-center">
                    <NextButton onClick={handleSubmit} />
                </div>
            </form>
            <HelpModal
                content="Enter the name of your vampire blach bderkeb blah ablach blah blah blah"
            />
        </div>
    )
}

export default VampireNamePage;