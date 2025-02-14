import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVampire } from '../VampireContext';
import VampireProgress from '../components/VampireProgress';
import NextButton from '../components/NextButton';
import HelpModal from '../components/HelpModal';

const VampireNamePage = () => {
    const { vampire, setVampire } = useVampire();

    const [name, setName] = useState(vampire.name || "");
    const [origin, setOrigin] = useState(vampire.memories[0].experiences[0] || "");

    const navigate = useNavigate();

    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setVampire((prev) => ({
            ...prev,
            name,
            memories: prev.memories.map((memory, index) =>
                index === 0 ? { ...memory, experiences: [origin, ...memory.experiences.slice(1)] } : memory
            ),
        }));
        navigate('/create/characters');
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Character Name and Origin</h1>
            <p className="mb-3">Enter a sentence containing a name, setting, and one experience that encapsulates their history for your vampire. Example: &quot;I am Ada, a Slavic woman living on the edge of the wild Tatra Mountains.&quot;</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name here"
                    required
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Origin Experience</label>
                <textarea
                    id="origin"
                    name="origin"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="This will be the first experience slotted into the first memory container"
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
        <VampireProgress />
        </div>
    )
}

export default VampireNamePage;