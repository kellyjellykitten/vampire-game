import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';

const CreatePage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/create/name');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Your Vampire</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed risus sit amet augue eleifend posuere at at nunc. In bibendum facilisis ante, ut tempus ex efficitur sollicitudin. Fusce euismod risus ac commodo rhoncus. Integer non lorem augue. Aliquam elementum luctus ex, eget imperdiet ante pellentesque in. Sed tristique lacinia sagittis. Quisque et tempor ante. Maecenas a tempus elit. Nulla facilisi. Cras dictum, magna ac venenatis vestibulum, libero mauris vehicula velit, sed ornare nisl nisl ut mi. Proin mollis varius est quis vulputate. Praesent at mi in neque tempor dignissim. Vivamus finibus nibh ut molestie auctor. Duis tincidunt id elit at blandit. Duis id quam ultrices, tincidunt arcu sed, aliquet ligula.</p>
            </div>
            <div className="flex justify-center">
                <NextButton onClick={handleSubmit} />
            </div>
        </div>
    )
};

export default CreatePage;