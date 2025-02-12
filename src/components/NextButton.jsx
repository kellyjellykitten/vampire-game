// eslint-disable-next-line react/prop-types
const NextButton = ({ onClick, text = "Next", additionalClasses = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${additionalClasses}`}
        >{text}</button>
    )
}

export default NextButton;

//onClick: function to handle click event to move to next step in vampire creation
//text: customizable button text; default is Next
//additionalClasses is an optional prop where you can pass additional classes if you want to style the button differently in specific instances