// eslint-disable-next-line react/prop-types
const BackButton = ({ onClick, text = "Back", additionalClasses = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-7 py-3 text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl border border-gray-600 hover:border-gray-500 ${additionalClasses}`}
        >{text}</button>
    )
}

export default BackButton;

//onClick: function to handle click event to move to next step in vampire creation
//text: customizable button text; default is Next
//additionalClasses is an optional prop where you can pass additional classes if you want to style the button differently in specific instances