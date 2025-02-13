// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import HelpModal from '../components/HelpModal';
import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireMarkPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        if (!form.checkValidity()) {
            alert("Please fill out the required fields.")
        }
        // console.log('Resources:', resources);
        navigate('/create/summary');
    };

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/experiences')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">Immortal, Experience, Mark
            <div className="flex justify-center">
                <BackButton onClick={handleBack} />
                <NextButton onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default VampireMarkPage;