import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { importVampireCharacter } from '../../vampireSlice';
import NextButton from '../../components/NextButton';

const StartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const vampire = useSelector((state) => state.vampire.vampire);

    const [showCharacterSheet, setShowCharacterSheet] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/game');
    }

    const importVampire = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedVampire = JSON.parse(e.target.result);
                    // Dispatch to redux store or use imported data
                    dispatch(importVampireCharacter(importedVampire));
                    toast.success(`${importedVampire.origin[0].name || 'Vampire'} successfully imported!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
                    setShowCharacterSheet(true);
                } catch (error) {
                    console.error("Error importing vampire:", error);
                    toast.error("Invalid file format", {
                        position: "top-right",
                        autoClose: 3000,
                    });
                }
            };
            reader.readAsText(file);
        }
    };

    const toggleCharacterSheet = () => {
        setShowCharacterSheet(!showCharacterSheet);
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <ToastContainer />

            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Begin Your Adventure</h1>
        
                {/* Game interface */}
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Before You Begin</h2>
                    {/* Game content here */}
                    <div className="h-40 bg-gray-700 rounded p-4 mb-4">
                        <p>Import your character using the button below. Once imported, click the Show Character Sheet button to review your vampire&apos;s details.</p>
                        <p className="pt-6">On the next page...</p>
                    </div>
                    {/* Character import section */}
                    <div className="mb-6 flex items-center space-x-4">
                        <input
                            type="file"
                            accept=".json"
                            onChange={importVampire}
                            className="hidden"
                            id="import-vampire"
                        />
                        <label
                            htmlFor="import-vampire"
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
                        >
                        Import Character
                        </label>
            
                        <button
                            onClick={toggleCharacterSheet}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                        {showCharacterSheet ? "Hide Character Sheet" : "Show Character Sheet"}
                        </button>
                        
                    </div>
                    <div className="flex justify-center mt-9">
                            <NextButton onClick={handleSubmit} text="Start" />
                    </div>
    
                    
                </div>
        
                {/* Character sheet */}
                {showCharacterSheet && (
                <div className="bg-gray-800 rounded-lg p-6 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-center mb-8">Character Sheet</h2>
            
                    {/* Origin Section */}
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Origin</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Side Characters</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Skills</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Resources</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Memories</h2>
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
                        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-600 pb-2">Conversion</h2>
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
                </div>
            )}
        </div>
    </div>
        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        //     <h1 className="text-3xl font-semibold text-gray-800 mb-6">Begin Your Adventure</h1>
        //     <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed risus sit amet augue eleifend posuere at at nunc. In bibendum facilisis ante, ut tempus ex efficitur sollicitudin. Fusce euismod risus ac commodo rhoncus. Integer non lorem augue. Aliquam elementum luctus ex, eget imperdiet ante pellentesque in. Sed tristique lacinia sagittis. Quisque et tempor ante. Maecenas a tempus elit. Nulla facilisi. Cras dictum, magna ac venenatis vestibulum, libero mauris vehicula velit, sed ornare nisl nisl ut mi. Proin mollis varius est quis vulputate. Praesent at mi in neque tempor dignissim. Vivamus finibus nibh ut molestie auctor. Duis tincidunt id elit at blandit. Duis id quam ultrices, tincidunt arcu sed, aliquet ligula.</p>
        //     </div>
        //     <input
        //         type="file"
        //         accept=".json"
        //         onChange={importVampire}
        //         className="hidden"
        //         id="import-vampire"
        //     />
        //     <label
        //         htmlFor="import-vampire"
        //         className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors cursor-pointer"
        //     >
        //         Import Vampire
        //     </label>
        //     <div className="flex justify-center">
        //         <NextButton onClick={handleSubmit} />
        //     </div>
        // </div>
    )
};

export default StartPage;