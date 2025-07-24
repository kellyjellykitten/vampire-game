import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setConversion, setMemoryExperience } from '../vampireSlice';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import ProgressTracker from '../components/ProgressTracker';
import CharacterInfoPanel from '../components/CharacterInfoPanel';

const VampireConversionPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get current conversion state from redux (if any)
    const currentConversion = useSelector(state =>
        state.vampire.vampire?.conversion?.[0] || {
            immortal: "",
            mark: "",
            conversionExperience: ""
        }
    );

    // Local state to manage form inputs
    const [conversionDetails, setConversionDetails] = useState({
        immortal: currentConversion.immortal,
        mark: currentConversion.mark,
        conversionExperience: currentConversion?.conversionExperience
    });

    const handleInputChange = (field, value) => {
        setConversionDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dispatch action to update conversion state
        dispatch(setConversion({
            immortal: conversionDetails.immortal,
            mark: conversionDetails.mark,
            conversionExperience: conversionDetails.conversionExperience
        }));

        // Dispatch action to set the conversion experience in memories index 4
        dispatch(setMemoryExperience({
            index: 4,
            value: conversionDetails.conversionExperience
        }));

        navigate('/create/summary');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/resources')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <div className="mt-8">
                <ProgressTracker currentStep="conversion" />
            </div>
            <CharacterInfoPanel currentStep="conversion" />
            <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-4 md:mt-10 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Conversion
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="md:text-lg mb-6">Conversion refers to the event in which your character turned into a vampire.</p>
                <p className="md:text-lg mb-1">Enter a name and short description for the Immortal that turned your character. They may be any kind of supernatural being, such as a demon or another vampire.</p>
                <p className="md:text-lg mb-6">Example: <span className="text-red-300 italic">Ryzeth, a plumpy demon living amongst the shadows</span></p>
                <p className="md:text-lg mb-1">Describe the Mark the Immortal left on your vampire. This is a visible indication of their vampiric state, any kind of physical alteration that sets them apart from mortals.</p>
                <p className="md:text-lg mb-6">Example: <span className="text-red-300 italic">My eyes are hypotic so I must wear smoked glasses</span></p>
                <p className="md:text-lg">Finally, create a Memory that encapsulates the event.</p>
                <p className="md:text-lg mb-6">Example: <span className="text-red-300 italic">I am lured into the shadows by the hypnotic gaze of the demon Ryzeth, who drinks my blood and imparts his hypotic sight onto my own eyes.</span></p>
                <p className="md:text-lg mb-6">Visit the <a href="/help" className="text-blue-400 hover:text-blue-300 underline" target="_blank">help page</a> for more examples.</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="immortal" className="block text-lg font-medium mb-2">Immortal Name</label>
                    <input
                        id="immortal"
                        type="text"
                        value={conversionDetails.immortal}
                        onChange={(e) => handleInputChange('immortal', e.target.value)}
                        placeholder="Enter Immortal's name"
                        required
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="mark" className="block text-lg font-medium mb-2">Mark</label>
                    <input
                        id="mark"
                        type="text"
                        value={conversionDetails.mark}
                        onChange={(e) => handleInputChange('mark', e.target.value)}
                        placeholder="Describe the Mark left behind"
                        required
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="conversionExperience" className="block text-lg font-medium mb-2">Conversion Memory</label>
                    <textarea
                        id="conversionExperience"
                        value={conversionDetails.conversionExperience}
                        onChange={(e) => handleInputChange('conversionExperience', e.target.value)}
                        placeholder="Describe the event"
                        required
                        className="w-full text-black p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="3"
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

export default VampireConversionPage;
