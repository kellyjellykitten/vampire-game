/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const HelpModal = ({ content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Help Button */}
            <button onClick={toggleModal} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
                <FaQuestionCircle />
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg w-1/3 max-w-md">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-semibold">Help</h2>
                            <button onClick={toggleModal} className="text-gray-500 hover:text-gray-700 text-lg">
                                ✖
                            </button>
                        </div>
                        {/* Modal Content */}
                        <p className="mt-4">{content}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default HelpModal;