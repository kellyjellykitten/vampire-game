import React from 'react';
import { Check } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const ProgressTracker = ({ currentStep }) => {
    const steps = [
        { id: 'origin', label: 'Origin', path: '/create/name' },
        { id: 'characters', label:'Side Characters', path: '/create/characters' },
        { id: 'skills', label: 'Skills', path: '/create/skills' },
        { id: 'resources', label: 'Resources', path: '/create/resources' },
        { id: 'conversion', label: 'Conversion', path: '/create/conversion' }
    ];

    const getCurrentStepIndex = () => {
        return steps.findIndex(step => step.id === currentStep);
    };

    const currentIndex = getCurrentStepIndex();

    {/* React.Fragment used to group multiple elements (step circle w/ label & connector line) to avoid extra <div> wrap. Map returns a single element but we render 2 things. */}
    return (
        <div className="w-full max-w-4xl mx-auto mb-8 px-4">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Step circle */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`
                                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors duration-200
                                    ${index < currentIndex
                                        ? 'bg-red-500 text-white' // Completed
                                        : index === currentIndex
                                        ? 'bg-red-400 text-white ring-2 ring-red-300' // Current
                                        : 'bg-gray-600 text-gray-300' // Future
                                    }
                                `}
                            >
                                {index < currentIndex ? (
                                    // Checkmark for completed steps
                                    <Check className="w-4 h-4" />
                                ) : (
                                    index + 1
                                )}
                            </div>
                            {/* Step label */}
                            <span
                                className={`
                                    mt-2 text-xs font-medium text-center transition-colors duration-200
                                    ${index <= currentIndex
                                        ? 'text-red-300'
                                        : 'text-gray-400'
                                    }
                                `}
                            >
                                {step.label}
                            </span>
                        </div>
                        {/* Connector line */}
                        {index < steps.length - 1 && (
                            <div
                                className={`
                                    flex-1 h-0.5 mx-2 transition-colors duration-200
                                    ${index < currentIndex
                                        ? 'bg-red-500'
                                        : 'bg-gray-600'
                                    }
                                `}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default ProgressTracker;