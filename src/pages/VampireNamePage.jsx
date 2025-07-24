import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin, setMemoryExperience } from '../vampireSlice';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import ProgressTracker from '../components/ProgressTracker';
import CharacterInfoPanel from '../components/CharacterInfoPanel';

const VampireNamePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get current origin state from redux (if any)
    const currentOrigin = useSelector(state =>
        state.vampire.vampire?.origin?.[0] || {
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
            index: 0,
            value: originDetails.originExperience
        }));

        navigate('/create/characters');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <div className="mt-8">
                <ProgressTracker currentStep="origin" />
            </div>
            <CharacterInfoPanel currentStep="origin" />
            <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-8 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Vampire Origin
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="md:text-lg mb-6">Your Origin a snapshot of your life as a mortal. Enter a name for your vampire-to-be and an encapsulating summary of their life before they lost mortality -- who they were, what time period they lived in, and where they resided. Your experience should be one sentence and written in first-person, present tense (I am...).</p>
                <p className="md:text-lg mb-6">Example: <span className="text-red-300 italic">I am Silvor, a Slavic man living on the edge of the mountains in 16th century Poland.</span></p>
                <p className="md:text-lg mb-6">Visit the <a href="/help" className="text-blue-400 hover:text-blue-300 underline" target="_blank">help page</a> for more examples.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium  mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={originDetails.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter name here"
                        required
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="originExperience" className="block text-lg font-medium mb-2">Origin Experience</label>
                    <textarea
                        id="originExperience"
                        value={originDetails.originExperience}
                        onChange={(e) => handleInputChange('originExperience', e.target.value)}
                        placeholder="Enter experience here"
                        required
                        rows="6"
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="flex justify-around">
                    <BackButton onClick={handleBack} />
                    <NextButton onClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default VampireNamePage;