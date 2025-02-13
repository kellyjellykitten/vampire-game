import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireResourcesPage = () => {
    const [resources, setResources] = useState([
        { name: '' },
        { name: '' },
        { name: '' }
    ]);

    const navigate = useNavigate();

    // Handle change for each resource name input
    const handleChange = (index, value) => {
        const updatedResources = [...resources];
        updatedResources[index].name = value;
        setResources(updatedResources);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (!form.checkValidity()) {
            alert("Please fill out the required fields.")
        }
        console.log('Resources:', resources);
        navigate('/create/experiences');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/skills')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Three Resources</h1>
            <p>Create three resources for your vampire-to-be.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            {resources.map((resource, index) => (
                <div key={index} className="mb-6">
                    <label htmlFor={`resource-name-${index}`} className="block text-lg font-medium text-gray-700 mb-2">Resource {index + 1}</label>
                    <input
                        type="text"
                        id={`resource-name-${index}`}
                        name={`resourceName-${index}`}
                        value={resource.name}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="Enter resource here"
                        required
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            ))}
            
            <div className="flex justify-center">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </form>
        <HelpModal
            content="Enter the name of your vampire blach bderkeb blah ablach blah blah blah"
        />
        </div>
    )
}

export default VampireResourcesPage;