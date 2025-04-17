import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const CharacterSheetSidebar = ({ isOpen, onClose }) => {
    const vampire = useSelector((state) => state.vampire.vampire);

    return (
        <div className={`fixed top-0 right-0 h-full bg-gray-900 text-white overflow-y-auto transition-all duration-300 shadow-lg z-10 ${isOpen ? 'w-80' : 'w-0'}`}>
            {isOpen && (
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Character Sheet</h2>
                        <button 
                            onClick={onClose}
                            className="text-gray-400 hover:text-white"
                        >
                            &times;
                        </button>
                    </div>

                    {/* Origin Section */}
                    <section className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 border-b pb-1">Origin</h3>
                        {vampire.origin.map((origin, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm"><strong>Name:</strong> {origin.name || 'No name provided'}</p>
                                <p className="text-sm"><strong>Experience:</strong> {origin.originExperience || 'Not specified'}</p>
                            </div>
                        ))}
                    </section>

                    {/* Side Characters Section */}
                    <section className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 border-b pb-1">Side Characters</h3>
                        <ul className="list-disc pl-5 text-sm">
                            {vampire.sideCharacters.map((character, index) => (
                                character && <li key={index}>{character}</li>
                            ))}
                            {!vampire.sideCharacters.some(char => char) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 border-b pb-1">Skills</h3>
                        <ul className="list-disc pl-5 text-sm">
                            {vampire.skills.map((skill, index) => (
                                skill && <li key={index}>{skill}</li>
                            ))}
                            {!vampire.skills.some(skill => skill) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Resources Section */}
                    <section className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 border-b pb-1">Resources</h3>
                        <ul className="list-disc pl-5 text-sm">
                            {vampire.resources.map((resource, index) => (
                                resource && <li key={index}>{resource}</li>
                            ))}
                            {!vampire.resources.some(resource => resource) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Memories Section */}
                    <section className="mb-4">
                        <h3 className="text-lg font-semibold mb-1 border-b pb-1">Memories</h3>
                        {vampire.memories.map((memory) => (
                            <div key={memory.id} className="mb-2">
                                <h4 className="text-sm font-medium">Memory {memory.id}</h4>
                                <ul className="list-disc pl-5 text-sm">
                                    {memory.experiences.map((exp, index) => (
                                        exp && <li key={index}>{exp}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </div>
    );
};

export default CharacterSheetSidebar;