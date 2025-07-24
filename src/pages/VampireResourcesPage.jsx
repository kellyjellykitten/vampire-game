import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setResources } from '../vampireSlice';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import ProgressTracker from '../components/ProgressTracker';
import CharacterInfoPanel from '../components/CharacterInfoPanel';

const VampireResourcesPage = () => {
    const dispatch = useDispatch();
    const vampire = useSelector((state) => state.vampire)

    // ensure resources exists before accessing
    const resources = vampire.resources || ["", "", ""];

    const [localResources, setLocalResources] = useState([...resources]);

    const navigate = useNavigate();

    // Handle change for each resource name input
    const handleResourceChange = (index, value) => {
        const updatedResources = [...localResources];
        updatedResources[index] = value;
        setLocalResources(updatedResources);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localResources.forEach((resource, index) => {
            dispatch(setResources({ index, value: resource }));
        })
        navigate('/create/conversion');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/skills')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <div className="mt-8">
                <ProgressTracker currentStep="resources" />
            </div>
            <CharacterInfoPanel currentStep="resources" />
            <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-4 md:mt-10 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Resources
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="md:text-lg mb-6">Create three Resources for your vampire to start out with. Resources are assets or structures that are useful to your vampire, or items they value. They can be items kept on person (such as a wedding ring or a dagger) or stationary (such as a castle or a fleet of warships). During your vampire&apos;s journey, they may lose and/or gain Resources.</p>
                <p className="md:text-lg mb-6">Examples: <span className="text-red-300 italic">A sack of silver coins, a business empire</span></p>
                <p className="md:text-lg mb-6">Visit the <a href="/help" className="text-blue-400 hover:text-blue-300 underline" target="_blank">help page</a> for more examples.</p>
            </div>
            
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 text-white p-6 rounded-lg shadow-md">
            {localResources.map((resource, index) => (
                <div key={index} className="mb-6">
                    <label htmlFor={`resource-name-${index}`} className="block text-lg font-medium mb-2">Resource {index + 1}</label>
                    <input
                        type="text"
                        id={`resource-name-${index}`}
                        name={`resourceName-${index}`}
                        value={resource}
                        onChange={(e) => handleResourceChange(index, e.target.value)}
                        placeholder="Enter resource here"
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
        </div>
    )
}

export default VampireResourcesPage;