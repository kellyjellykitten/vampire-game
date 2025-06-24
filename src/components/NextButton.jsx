// eslint-disable-next-line react/prop-types
const NextButton = ({ onClick, text = "Next" }) => {
    return (
        <button
            onClick={onClick}
            className="bg-purple-800 hover:bg-purple-900 text-white px-7 py-3 rounded-lg text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
        >{text}</button>
    )
}

export default NextButton;

//onClick: function to handle click event to move to next step in vampire creation
//text: customizable button text; default is Next
//additionalClasses is an optional prop where you can pass additional classes if you want to style the button differently in specific instances
