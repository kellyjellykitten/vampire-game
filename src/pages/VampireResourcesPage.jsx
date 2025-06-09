import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setResources } from '../vampireSlice';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

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
        navigate('/create/experiences');
    };

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/skills')
    }

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-black to-slate-900 text-white p-4">
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Resources
                </span>
            </h1>
            <div className="max-w-2xl ml-4 mr-4 md:mx-auto">
                <p className="text-base md:text-lg mb-6">Create three resources for your vampire-to-be. Resources are items that your character owns in some way, or has access to. Resources can be lost later, and new ones found!</p>
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
        <HelpModal
            title="Resources Help"
            content={
                <div>
                    <p className="mb-3">
                        Resources can be almost anything and of any quantity or scale.
                    </p>
                    <p className="mb-3">
                        For example: <span className="text-red-300 italic">A fleet of ships</span> - or - <span className="text-red-300 italic">a spatula</span>.
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

export default VampireResourcesPage;