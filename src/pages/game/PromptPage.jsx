import { useNavigate } from 'react-router-dom';

const PromptPage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/')
    }

    const handleBack = () => {
        navigate('/game/roll')
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">prompt</h1>
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">instructions</h2>
                    <div className="flex flex-wrap bg-gray-700 rounded p-4 mb-4">
                        
                        <p>Answer in one sentence. This creates an experience, which you will need to add to a memory of similar vein. Edit your other attributes as the prompt necessitates.</p>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">entry 1</h2>
                    <div className="mt-4 bg-gray-600 rounded-lg p-6">
                        <p className="text-center">You are recognized for what you are by another creature like yourself. Create an immortal character, lose a Resource, and gain a Skill. What did you lose to them?</p>
                        <div className="mb-10">
                            <label className="block pt-6 mb-2">Experience</label>
                            <textarea
                                placeholder="Answer prompt here..."
                                required
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows="3"
                            />
                            <label className="block mb-2">Select which Memory to add this Experience to:
                                <select name="selectedMemory" className="border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-2">
                                    <option value="memory1">Memory 1</option>
                                    <option value="memory2">Memory 2</option>
                                    <option value="memory3">Memory 3</option>
                                    <option value="memory4">Memory 4</option>
                                    <option value="memory5">Memory 5</option>
                                </select>
                            </label>
                        </div>
                        <div className="mb-10">
                            <label className="block mb-2">Immortal Character</label>
                            <textarea
                                placeholder="Create new immortal..."
                                required
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                rows="1"
                            />
                        </div>
                        <div className="mb-10">
                            <label htmlFor="conversionExperience" className="block mb-2 ">New Skill</label>
                            <input
                                type="text"
                                placeholder="Enter new skill here...."
                                required
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2">Select a Skill to lose:
                                <select name="selectedSkill" className="border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block p-2">
                                    <option value="skill1">Skill 1</option>
                                    <option value="skill2">Skill 2</option>
                                    <option value="skill3">Skill 3</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between mt-8">
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Back to Dice Roll
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PromptPage;