import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';

const VampireNamePage = () => {
    const [textValue, setTextValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setTextValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (!form.checkValidity()) {
            alert("Please fill out the required fields.")
        }
        alert(`You entered: ${textValue}`);
        navigate('/create/characters');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Vampire Name</h1>
            <p>Enter a sentence containing a name, setting, and one experience that encapsulates their history for your vampire. Example: &quot;I am Ada, a Slavic woman living on the edge of the wild Tatra Mountains.&quot;</p>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
                <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">Enter your vampire&apos;s origin:</label>
                <textarea
                    id="description"
                    name="description"
                    value={textValue}
                    onChange={handleChange}
                    placeholder="Enter name, setting, and experience"
                    required
                    rows="6"
                    className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="flex justify-center">
                <NextButton onClick={handleSubmit} />
            </div>
        </form>
        </div>
    )
}

export default VampireNamePage;