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
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Conversion
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="text-base md:text-lg mb-6">Create the immortal that turned your vampire-to-be into a vampire, the mark it left, and a sentence encapsulating the experience.</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
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
                        placeholder="Describe how you were converted"
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
                title="Conversion Help"
                content={
                    <div>
                        <p className="mb-3">
                            instructions for conversioneinfefwefwef
                        </p>
                        <p className="mb-3">
                            For example: <span className="text-red-300 italic">I go fishing with George at Lake Yuru and catch the rare gumbraya fish with my bare hands.</span> - or - <span className="text-red-300 italic">I go to a jelly-fishing convention with Patrick where I win a golden jelly-fishing net.</span>
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

export default VampireConversionPage;
