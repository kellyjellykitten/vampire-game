/* eslint-disable react/prop-types */

import { FaQuestionCircle } from 'react-icons/fa';

const HelpModal = ({ content, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-1/3 max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Help</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FaQuestionCircle className="text-2xl" />
                    </button>
                </div>
                <p className="mt-4">{content}</p>
            </div>
        </div>
    )
}

export default HelpModal;