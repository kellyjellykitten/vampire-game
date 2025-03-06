// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireSummaryPage = () => {
    const navigate = useNavigate();

    const vampire = useSelector((state) => state.vampire.vampire);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/game');
    }

    const handleBack = (e) => {
        e.preventDefault();
        navigate('/create/conversion')
    }

    const exportVampire = () => {
        // Get vampire from redux state
        const vampireData = JSON.stringify(vampire, null, 2);
        // Create a blob with the JSON data
        const blob = new Blob([vampireData], { type: 'applicatioin/json' });
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        // Create a temp anchor element
        const a = document.createElement('a');
        a.href = url;
        a.download = `${vampire.origin[0].name || 'vampire'}_character.json`;
        // Trigger a click on the anchor to start download
        document.body.appendChild(a);
        a.click();
        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Vampire Character Summary</h1>
                
                {/* Origin Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Origin</h2>
                    {vampire.origin.map((origin, index) => (
                        <div key={index}>
                            <p className="text-lg mb-2">
                                <strong>Name:</strong> {origin.name || 'No name provided'}
                            </p>
                            <p className="text-lg">
                                <strong>Origin Experience:</strong> {origin.originExperience || 'Not specified'}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Side Characters Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Side Characters</h2>
                    <ul className="list-disc pl-5">
                        {vampire.sideCharacters.map((character, index) => (
                            <li key={index} className="text-lg">
                                {character || `Side Character ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Skills Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
                    <ul className="list-disc pl-5">
                        {vampire.skills.map((skill, index) => (
                            <li key={index} className="text-lg">
                                {skill || `Skill ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Resources Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Resources</h2>
                    <ul className="list-disc pl-5">
                        {vampire.resources.map((resource, index) => (
                            <li key={index} className="text-lg">
                                {resource || `Resource ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Memories Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Memories</h2>
                    {vampire.memories.map((memory, memoryIndex) => (
                        <div key={memory.id} className="mb-4">
                            <h3 className="text-xl font-medium mb-2">Memory {memoryIndex + 1}</h3>
                            <ul className="list-disc pl-5">
                                {memory.experiences.map((experience, expIndex) => (
                                    <li key={expIndex} className="text-lg">
                                        {experience || `Experience ${expIndex + 1}: Not specified`}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* Conversion Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Conversion</h2>
                    {vampire.conversion.map((conversion, index) => (
                        <div key={index}>
                            <p className="text-lg mb-2">
                                <strong>Immortal:</strong> {conversion.immortal || 'Not specified'}
                            </p>
                            <p className="text-lg mb-2">
                                <strong>Mark:</strong> {conversion.mark || 'Not specified'}
                            </p>
                            <p className="text-lg">
                                <strong>Conversion Experience:</strong> {conversion.conversionExperience || 'Not specified'}
                            </p>
                        </div>
                    ))}
                </section>

                <div className="flex justify-between mt-8">
                    <BackButton onClick={handleBack} />
                    <button
                        onClick={exportVampire}
                        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                    >
                        Export Vampire
                    </button>
                    <NextButton onClick={handleSubmit} text="Start Game" />
                </div>
            </div>
        </div>
    )
}

export default VampireSummaryPage;