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
        navigate('/game/roll');
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
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <ToastContainer />

            <div className="max-w-4xl mx-auto">
                <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-16 text-center">
                    <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                        Begin Your Adventure
                    </span>
                </h1>
        
                {/* Game interface */}
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
                    {/* Game content here */}
                    <div className="bg-gray-700 rounded p-4 mb-4">
                        <p><strong>If you are coming straight from character creation,</strong> you may click on the Show Character Sheet button to review your vampire&apos;s details, then click Start to begin.</p>
                        <p className="pt-6"><strong>If you exported your character,</strong> import the file clicking the Import Character button below. Once imported, your character sheet will display.</p>
                        <p className="pt-6">On the next page, you will roll dice to determine your first prompt number.</p>
                    </div>
                    {/* Character import section */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-8">
                        <input
                            type="file"
                            accept=".json"
                            onChange={importVampire}
                            className="hidden"
                            id="import-vampire"
                        />
                        <label
                            htmlFor="import-vampire"
                            className="w-full sm:w-auto px-6 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-center rounded-lg  transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                        Import Character
                        </label>
            
                        <button
                            onClick={toggleCharacterSheet}
                            className="w-full sm:w-auto px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500"
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
                    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Character Sheet</h2>
            
                    {/* Origin Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Origin</h2>
                        {vampire.origin.map((origin, index) => (
                            <div key={index}>
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
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Side Characters</h2>
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
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Skills</h2>
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
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Resources</h2>
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
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Memories</h2>
                        <ul className="list-disc pl-5">
                            {vampire.memories.map((mem, index) => (
                                <li key={index} className="text-base md:text-lg">
                                    {mem || `Memory ${index + 1}: Not specified`}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conversion Section */}
                    <section className="mb-6">
                        <h2 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Conversion</h2>
                        {vampire.conversion.map((conversion, index) => (
                            <div key={index}>
                                <p className="text-base md:text-lg">
                                    <strong>Immortal:</strong> {conversion.immortal || 'Not specified'}
                                </p>
                                <p className="text-base md:text-lg">
                                    <strong>Mark:</strong> {conversion.mark || 'Not specified'}
                                </p>
                                <p className="text-base md:text-lg">
                                <strong>Conversion Experience:</strong> {conversion.conversionExperience || 'Not specified'}
                                </p>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </div>
    </div>
    )
};

export default StartPage;