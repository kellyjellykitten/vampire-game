import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bloodline from '../../assets/images/bloodline.png'

const GameOverPage = () => {
    const navigate = useNavigate();

    const vampire = useSelector((state) => state.vampire.vampire);

    const handleRestart = () => {
        // Clear prompt # from session storage
        sessionStorage.removeItem('promptNumber');
        sessionStorage.removeItem('previousPromptNumber');
        navigate('/game')
    }

    const handleNewGame = () => {
        // Clear prompt # from session storage
        sessionStorage.removeItem('promptNumber');
        sessionStorage.removeItem('previousPromptNumber');
        navigate('/create')
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <h1 className="font-trade-winds text-4xl font-bold mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Game Over
                </span>
            </h1>
            <div className="flex items-center justify-center">
                <img src={bloodline} alt="Blood drop" className="h-36"></img>
            </div>
            <div className="max-w-xl mx-auto bg-gray-700 p-6 rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Final Character Sheet</h2>
                {/* Origin Section */}
                    <section className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Origin</h3>
                        {vampire.origin.map((origin, index) => (
                            <div key={index} className="mb-4">
                                <p><strong>Name:</strong> {origin.name || 'No name provided'}</p>
                                <p><strong>Experience:</strong> {origin.originExperience || 'Not specified'}</p>
                            </div>
                        ))}
                    </section>

                    {/* Side Characters Section */}
                    <section className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Side Characters</h3>
                        <ul className="list-disc pl-5">
                            {vampire.sideCharacters.map((character, index) => (
                                character && <li key={index}>{character}</li>
                            ))}
                            {!vampire.sideCharacters.some(char => char) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Skills Section */}
                    <section className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Skills</h3>
                        <ul className="list-disc pl-5">
                            {vampire.skills.map((skill, index) => (
                                skill && <li key={index}>{skill}</li>
                            ))}
                            {!vampire.skills.some(skill => skill) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Resources Section */}
                    <section className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Resources</h3>
                        <ul className="list-disc pl-5">
                            {vampire.resources.map((resource, index) => (
                                resource && <li key={index}>{resource}</li>
                            ))}
                            {!vampire.resources.some(resource => resource) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>

                    {/* Memories Section */}
                    <section className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 border-b border-red-300 pb-1 text-red-300">Memories</h3>
                        <ul className="list-disc pl-5">
                            {vampire.memories.map((mem, index) => (
                                mem && <li key={index}>{mem}</li>
                            ))}
                            {!vampire.memories.some(mem => mem) && <li className="text-gray-500">None</li>}
                        </ul>
                    </section>
            </div>
            <div className="max-w-xl mx-auto flex justify-between mt-4">
                <button onClick={handleRestart} className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">Restart</button>
                <button onClick={handleNewGame} className="bg-purple-800 hover:bg-purple-900 text-white px-7 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">Create New Vampire</button>
            </div>
        </div>
    )
}

export default GameOverPage;