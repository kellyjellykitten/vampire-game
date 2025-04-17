// eslint-disable-next-line react/prop-types
const SidebarToggleButton = ({ isOpen, toggleSidebar }) => {
    return (
        <button
            onClick={toggleSidebar}
            className="fixed top-20 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg z-20"
            title="Toggle Character Sheet"
        >
            {isOpen ? "x" : "👤"}
        </button>
    );
};

export default SidebarToggleButton;