import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setConversion, setMemoryExperience } from '../vampireSlice';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import HelpModal from '../components/HelpModal';

const VampireConversionPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get current conversion state from redux (if any)
    const currentConversion = useSelector(state =>
        state.vampire?.conversion?.[0] || {
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

        // Dispatch action to set the conversion experience in the final memory
        dispatch(setMemoryExperience({
            memoryId: "5",
            experienceIndex: 0,
            value: conversionDetails.conversionExperience
        }));

        navigate('/create/summary');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/experiences')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-4">
            <h1 className="text-3xl font-semibold mb-6">Create an Immortal, Mark, and Conversion Experience</h1>
            <p className="mb-6">Create the immortal that turned your vampire-to-be into a vampire, the mark it left, and a sentence encapsulating the experience.</p>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-600 text-white p-6 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="immortal" className="block text-lg font-medium mb-2">Immortal Name</label>
                    <input
                        id="immortal"
                        type="text"
                        value={conversionDetails.immortal}
                        onChange={(e) => handleInputChange('immortal', e.target.value)}
                        placeholder="Enter immortal's name"
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
                        placeholder="Describe the mark left behind"
                        required
                        className="w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="conversionExperience" className="block text-lg font-medium mb-2">Conversion Experience</label>
                    <textarea
                        id="conversionExperience"
                        value={conversionDetails.conversionExperience}
                        onChange={(e) => handleInputChange('conversionExperience', e.target.value)}
                        placeholder="Describe the moment of conversion in one sentence"
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
            <HelpModal
                content="Instructions for conversion"
            />
        </div>
        
    )
}

export default VampireConversionPage;
