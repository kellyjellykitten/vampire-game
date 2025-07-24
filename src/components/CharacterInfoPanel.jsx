import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ChevronDown } from 'lucide-react';

// eslint-disable-next-line react/prop-types
const CharacterInfoPanel = ({ currentStep }) => {
    const [isOpen, setIsOpen] = useState(false);
    const vampire = useSelector(state => state.vampire.vampire);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const renderOriginInfo = () => {
        if (!vampire.origin?.[0]) return null;

        return (
            <div className="mb-4">
                <h4 className="text-red-300 font-semibold mb-2">Origin</h4>
                <p><span className="text-gray-300">Name:</span> {vampire.origin[0].name}</p>
                <p><span className="text-gray-300">Origin Experience:</span> {vampire.origin[0].originExperience}</p>
            </div>
        );
    };

    const renderSideCharactersInfo = () => {
        if (!vampire.sideCharacters || vampire.sideCharacters.every(char => !char)) return null;

        return (
            <div className="mb-4">
                <h4 className="text-red-300 font-semibold mb-2">Side Characters</h4>
                {vampire.sideCharacters.map((character, index) => (
                    character && (
                        <div key={index} className="mb-2">
                            <p><span className="text-gray-300">Character {index + 1}:</span> {character}</p>
                            {vampire.memories?.[index + 1] && (
                                <p className="text-sm text-gray-400 ml-2">Memory: {vampire.memories[index + 1]}</p>
                            )}
                        </div>
                    )
                ))}
            </div>
        );
    };

    const renderSkillsInfo = () => {
        if (!vampire.skills || vampire.skills.every(skill => !skill)) return null;

        return (
            <div className="mb-4">
                <h4 className="text-red-300 font-semibold mb-2">Skills</h4>
                <ul className="list-disc list-inside">
                    {vampire.skills.map((skill, index) => (
                        skill && <li key={index} className="text-gray-300">{skill}</li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderResourcesInfo = () => {
        if (!vampire.resources || vampire.resources.every(resource => !resource)) return null;

        return (
            <div className="mb-4">
                <h4 className="text-red-300 font-semibold mb-2">Resources</h4>
                <ul className="list-disc list-inside">
                    {vampire.resources.map((resource, index) => (
                        resource && <li key={index} className="text-gray-300">{resource}</li>
                    ))}
                </ul>
            </div>
        );
    };

    // Determine what info to show based on current step of creation
    const getVisibleSections = () => {
        const sections = [];

        // ALways show origin if it exists & user is past this step
        if (currentStep !== 'origin' && vampire.origin?.[0]) {
            sections.push(renderOriginInfo());
        }

        // Show side characters if user past step
        if (['skills', 'resources', 'conversion', 'summary'].includes(currentStep)) {
            sections.push(renderSideCharactersInfo());
        }

        // Show skills if user past step
        if (['resources', 'conversion', 'summary'].includes(currentStep)) {
            sections.push(renderSkillsInfo());
        }

        // Show resources if past step
        if (['conversion', 'summary'].includes(currentStep)) {
            sections.push(renderResourcesInfo());
        }
        
        return sections.filter(section => section !== null);
    };

    const visibleSections = getVisibleSections();

    // Don't show panel if there's no info or if on summary page
    if (visibleSections.length === 0 || currentStep === 'summary') return null;

    return (
        <div className="absolute top-6 xl:top-20 left-1/2 transform -translate-x-1/2 xl:left-auto xl:right-48 xl:transform-none z-20">
            <button
                onClick={togglePanel}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
            >
                <span className="text-sm font-medium">Your Character So Far</span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none bg-gray-800 border border-gray-600 rounded-lg shadow-xl p-4 w-80 max-w-[calc(100vw-2rem)] max-h-96 overflow-y-auto">
                    <div className="space-y-4">
                        {visibleSections.map((section, index) => (
                            <div key={index}>{section}</div>
                        ))}
                    </div>
                    {visibleSections.length === 0 && (
                        <p className="text-gray-400 text-sm text-center">No character information yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default CharacterInfoPanel;