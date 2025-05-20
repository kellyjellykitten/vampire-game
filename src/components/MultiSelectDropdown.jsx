/* eslint-disable react/prop-types */
import { useState } from "react";

const MultiSelectDropdown = ({
    items,
    selectedItems,
    onChange,
    label,
    placeholder = "Select items",
    required = false,
    max = null 
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        let newSelection;

        if (selectedItems.includes(item)) {
            // Remove item if alreadt selected
            newSelection = selectedItems.filter(i => i !== item);
        } else {
            // Add item if not at max capacity
            if (max === null || selectedItems.length < max) {
                newSelection = [...selectedItems, item];
            } else {
                // At max capacity, replace the first item
                newSelection = [...selectedItems.slice(1), item];
            }
        }
        onChange(newSelection);
    };

    return (
        <div className="relative mb-6">
            <label className="block mb-2">
                {label} {max !== null && `(Select up to ${max})`}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            
            <div
                className="w-full p-3 text-black bg-white border border-gray-300 rounded-md cursor-pointer flex justify-between items-center"
                onClick={toggleDropdown}
            >
                <div className="truncate">
                    {selectedItems.length > 0
                        ? selectedItems.join(', ')
                        : placeholder}
                </div>
                <div className="ml-2">
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div
                                key={index}
                                className={`p-3 hover:bg-gray-100 cursor-pointer ${selectedItems.includes(item) ? 'bg-blue-100' : ''}`}
                                onClick={() => handleItemClick(item)}
                            >
                                <div className="flex items-center text-black">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item)}
                                        onChange={() => {}}
                                        className="mr-2"
                                    />
                                    {item}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-3 text-gray-500">No items available</div>
                    )}
                </div>
            )}
        </div>
    )
}


export default MultiSelectDropdown;