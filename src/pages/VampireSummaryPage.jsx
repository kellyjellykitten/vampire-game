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
        const blob = new Blob([vampireData], { type: 'application/json' });
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
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mt-16 mb-6 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">Creation Complete!</span>
            </h1>
            <div className="max-w-xl mx-auto bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Vampire Character Summary</h2>
                
                {/* Origin Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Origin</h3>
                    {vampire.origin.map((origin, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-base md:text-lg">
                                <strong>Name:</strong> {origin.name || 'No name provided'}
                            </p>
                            <p className="text-base md:text-lg">
                                <strong>Origin Experience:</strong> {origin.originExperience || 'Not specified'}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Side Characters Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Side Characters</h3>
                    <ul className="list-disc pl-5">
                        {vampire.sideCharacters.map((character, index) => (
                            <li key={index} className="text-base md:text-lg">
                                {character || `Side Character ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Skills Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Skills</h3>
                    <ul className="list-disc pl-5">
                        {vampire.skills.map((skill, index) => (
                            <li key={index} className="text-base md:text-lg">
                                {skill || `Skill ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Resources Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Resources</h3>
                    <ul className="list-disc pl-5">
                        {vampire.resources.map((resource, index) => (
                            <li key={index} className="text-base md:text-lg">
                                {resource || `Resource ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Memories Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Memories</h3>
                    <ul className="list-disc pl-5">
                        {vampire.memories.map((memory, index) => (
                            <li key={index} className="text-base md:text-lg">
                                {memory || `Memory ${index + 1}: Not specified`}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Conversion Section */}
                <section className="mb-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Conversion</h3>
                    {vampire.conversion.map((conversion, index) => (
                        <div key={index}>
                            <p className="text-base md:text-lg">
                                <strong>Immortal:</strong> {conversion.immortal || 'Not specified'}
                            </p>
                            <p className="text-base md:text-lg">
                                <strong>Mark:</strong> {conversion.mark || 'Not specified'}
                            </p>
                            <p className="text-base md:text-lg">
                                <strong>Conversion Memory:</strong> {conversion.conversionExperience || 'Not specified'}
                            </p>
                        </div>
                    ))}
                </section>

                <div className="flex flex-col mt-8 md:justify-between md:flex-row">
                    <BackButton onClick={handleBack} />
                    <button
                        onClick={exportVampire}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl mb-2 mt-2 md:mb-0 md:mt-0"
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