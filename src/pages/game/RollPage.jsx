import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const RollPage = () => {
    const navigate = useNavigate();

    const [d6Result, setD6Result] = useState(null);
    const [promptNumber, setPromptNumber] = useState(null);
    const [isRolling, setIsRolling] = useState(false);
    const [currentPromptNumber, setCurrentPromptNumber] = useState(null);

    // Load stored prompt # from session storage on component mount
    useEffect(() => {
        const storedPromptNumber = parseInt(sessionStorage.getItem('promptNumber'));
        if (storedPromptNumber) {
            setCurrentPromptNumber(storedPromptNumber);
        }
    }, []);

    const rollDice = (sides) => {
        return Math.floor(Math.random() * sides) + 1;
    };

    const handleD6Roll = () => {
        setIsRolling(true);

        const rollInterval = setInterval(() => {
            const tempRoll = rollDice(6);
            setD6Result(tempRoll);
        }, 50);

        setTimeout(() => {
            clearInterval(rollInterval);
            const finalResult = rollDice(6);
            setD6Result(finalResult);
            setIsRolling(false);

            calculatePromptNumber(finalResult);
            
        }, 1000);
    };

    const calculatePromptNumber = (d6) => {
        let result;
        if (currentPromptNumber) {
            result = currentPromptNumber + (d6);
            setPromptNumber(result);
        } else {
            result = d6;
        }
        setPromptNumber(result);
    };

    const handlePromptNav = () => {
        // Store new prompt # in session storage for PromptPage to access
        sessionStorage.setItem('promptNumber', promptNumber);
        // Store current prompt # to revert to if user goes back
        sessionStorage.setItem('previousPromptNumber', currentPromptNumber || 0);
        navigate('/game/prompt');
    }

    const resetRolls = () => {
        setD6Result(null);
        setPromptNumber(null);
    };

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-trade-winds text-4xl font-bold mb-8 mt-16 text-center">
                    <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                        Determine Prompt Number
                    </span>
                </h1>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Roll the Dice</h2>
                    <div className="bg-gray-700 rounded p-4 mb-4">
                        <p>Your first prompt number is determined by the result of a d6 roll. From then on, your d6 result will be added to your current prompt number to determine your next prompt. Once the dice has been rolled, your prompt number will appear on screen, along with a button to be taken to the prompt.</p>
                    </div>
                    {currentPromptNumber ? (
                        <div className="mt-8 p-6 bg-gray-700 rounded-lg text-center">
                            <h3 className="text-xl mb-2">Your last prompt number was:</h3>
                            <p className="text-6xl font-bold text-red-400 mb-6">{currentPromptNumber}</p>
                            <p>Click below to roll the dice for your next prompt number</p>
                        </div>
                    ) : (
                        <div className="mt-8 p-6 bg-gray-700 rounded-lg text-center">
                            <h3 className="text-xl mb-2">Click below to roll the dice for your first prompt number</h3>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-6 justify-center mt-8">
                        {/* d6 roll section */}
                        <div className="text-center">
                            <button
                                onClick={handleD6Roll}
                                className={`bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-6 rounded-lg text-xl transition-colors duration-300 ${isRolling || d6Result !== null ? 'opacity-75 cursor-not-allowed' : ''}`}
                                disabled={isRolling || d6Result !== null}
                            >
                                {isRolling ? 'Rolling...' : 'Roll d6'}
                            </button>
                            {d6Result !==null && (
                                <div className="mt-4 bg-gray-600 rounded-lg p-6 text-center">
                                    <p className="text-lg mb-2">d6 Result:</p>
                                    <p className="text-5xl font-bold text-emerald-500">{d6Result}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Prompt # result */}
                    {promptNumber !== null && (
                        <div className="mt-8 p-6 bg-gray-700 rounded-lg text-center">
                            <h3 className="text-xl mb-2">Your Prompt Number is:</h3>
                            <p className="text-6xl font-bold text-red-400 mb-6">{promptNumber}</p>
                            <button
                                onClick={handlePromptNav}
                                className="bg-purple-800 hover:bg-purple-900 text-white px-7 py-3 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                Go To Prompt
                            </button>
                        </div>
                    )}
                    {/* Reset button */}
                    {(d6Result !== null) && (
                        <div className="mt-6 text-center">
                            <button
                                onClick={resetRolls}
                                className="mt-4 px-5 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg  transition-colors duration-300 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500"
                                disabled={isRolling}
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