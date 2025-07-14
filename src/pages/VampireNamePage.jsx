import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOrigin, setMemoryExperience } from '../vampireSlice';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
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
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Vampire Origin
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="text-base md:text-lg mb-6">Enter a name for your vampire-to-be and an encapsulating summary of their life before they lost mortality -- who they were, what time period they lived in, and where they resided (&quot;origin experience&quot;). Your experience should be one sentence in length and written in first-person, present tense (I am...).</p>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium  mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={originDetails.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ex: Frodo"
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
                        placeholder="Ex: I am Frodo, a hobbit hailing from Bag End in the Shire Reckoning year 1400"
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
            <HelpModal
                title="Origin Help"
                content={
                    <div>
                        <p className="mb-3">
                            Describe your vampire&apos;s life from when they were still a mortal. First, enter in a name for your character. Then, in one sentence, describe where you are from and from what time period. You can include your character&apos;s occupation if they have one, or any other defining details if you wish. 
                        </p>
                        <p className="mb-3">
                            For example: <span className="text-red-300 italic">I am Silvor, a Slavic man living on the edge of the mountains in 16th century Poland.</span> - or - <span className="text-red-300 italic">I am Spongebob, a fry-cooking sponge from modern-day Bikini Bottom.</span>
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

export default VampireNamePage;