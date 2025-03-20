import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const RollPage = () => {
    const navigate = useNavigate();

    const [d10Result, setD10Result] = useState(null);
    const [d6Result, setD6Result] = useState(null);
    const [promptNumber, setPromptNumber] = useState(null);

    const rollDice = (sides) => {
        return Math.floor(Math.random() * sides) + 1;
    };

    const handleD10Roll = () => {
        const result = rollDice(10);
        setD10Result(result);

        // If d6 has already been rolled, calculate prompt #
        if (d6Result !== null) {
            calculatePromptNumber(result, d6Result);
        }
    };

    const handleD6Roll = () => {
        const result = rollDice(6);
        setD6Result(result);

        // If d10 has already been rolled, calculate prompt #
        if (d10Result !== null) {
            calculatePromptNumber(d10Result, result);
        }
    };

    const calculatePromptNumber = (d10, d6) => {
        const result = d10 - d6;
        setPromptNumber(result);
    };

    const handlePromptNav = () => {
        navigate('/game/roll/prompt');
    }

    const resetRolls = () => {
        setD10Result(null);
        setD6Result(null);
        setPromptNumber(null);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Determine Prompt #</h1>
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Roll the Dice</h2>
                    <div className="h-30 bg-gray-700 rounded p-4 mb-4">
                        <p>Click on the d10 and the d6 to roll the die. Your prompt number is determined by subtracting the result of the d6 from the result of the d10. Once both die have been rolled, your prompt number will appear on screen, along with a button to be taken to the prompt.</p>
                    </div>
                    <div className="flex flex-wrap gap-6 justify-center mt-8">
                        {/* d10 roll section */}
                        <div className="text-center">
                            <button
                                onClick={handleD10Roll}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-200"
                                disabled={d10Result !== null}
                            >
                                Roll d10
                            </button>
                            {d10Result !== null && (
                                <div className="mt-4 bg-gray-600 rounded-lg p-6 text-center">
                                    <p className="text-lg mb-2">d10 Result:</p>
                                    <p className="text-5xl font-bold text-blue-400">{d10Result}</p>
                                </div>
                            )}
                        </div>
                        {/* d6 roll section */}
                        <div className="text-center">
                            <button
                                onClick={handleD6Roll}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-200"
                                disabled={d6Result !== null}
                            >
                                Roll d6
                            </button>
                            {d6Result !==null && (
                                <div className="mt-4 bg-gray-600 rounded-lg p-6 text-center">
                                    <p className="text-lg mb-2">d6 Result:</p>
                                    <p className="text-5xl font-bold text-green-400">{d6Result}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Prompt # result */}
                    {promptNumber !== null && (
                        <div className="mt-8 p-6 bg-gray-700 rounded-lg text-center">
                            <h3 className="text-xl mb-2">Your Prompt Number is:</h3>
                            <p className="text-6xl font-bold text-yellow-400 mb-6">{promptNumber}</p>
                            <button
                                onClick={handlePromptNav}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-200"
                            >
                                Go To Prompt
                            </button>
                        </div>
                    )}
                    {/* Reset button */}
                    {(d10Result !== null || d6Result !== null) && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={resetRolls}
                                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                            >
                                Reset Rolls
                            </button>
                        </div>
                    )}
                </div>
        </div>
    </div>
    )
};

export default RollPage;

// import { useNavigate } from 'react-router-dom';
// import NextButton from '../../components/NextButton';

// const RollPage = () => {
//     const navigate = useNavigate();

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         navigate('/game/roll');
//     }

//     return (
//         <div className="min-h-screen bg-gray-900 text-white p-4">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-4xl font-bold mb-6 text-center">Determine Prompt #</h1>
//                 <div className="bg-gray-800 rounded-lg p-6 mb-6">
//                     <h2 className="text-2xl font-semibold mb-4">Roll the Dice</h2>
//                     <div className="h-30 bg-gray-700 rounded p-4 mb-4">
//                         <p>Click on the d10 and the d6 to roll the die. Your prompt number is determined by subtracting the result of the d6 from the result of the d10. Once both die have been rolled, your prompt number will appear on screen, along with a button to be taken to the prompt.</p>
//                     </div>
//                     <div className="flex justify-center mt-9">
//                             <NextButton onClick={handleSubmit} text="Go To Prompt" />
//                     </div>
//                 </div>
//         </div>
//     </div>
//     )
// };

// export default RollPage;