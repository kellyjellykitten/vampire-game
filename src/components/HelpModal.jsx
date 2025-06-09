/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const HelpModal = ({ content, title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    };

    // Close modal on esc key press
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            // Prevent body scroll in background
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Function to render formatted content for simple string content
    const renderContent = () => {
        if (typeof content === 'string') {
            // Split by line breaks and render as paragraphs
            return content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3 last:mb-0">
                    {paragraph}
                </p>
            ));
        }
        return content;
    }

    return (
        <>
            {/* Help Button */}
            <button onClick={toggleModal} className="absolute top-6 right-8 text-red-300 hover:text-red-800 text-2xl transition-colors duration-200 z-10" aria-label="Open help">
                <FaQuestionCircle />
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4" onClick={handleBackdropClick}>
                    <div className="bg-gray-700 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-600">
                            <h1 className="text-xl font-semibold text-white pr-4">{title}</h1>
                            <button onClick={toggleModal} className="text-gray-400 hover:text-white text-xl transition-colors duration-200 flex-shrink-0" aria-label="Close modal">
                                ✖
                            </button>
                        </div>
                        {/* Modal Content */}
                        <div className="p-6 overflow-y-auto flex-1">
                            <div className="text-gray-100 leading-relaxed">
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default HelpModal;