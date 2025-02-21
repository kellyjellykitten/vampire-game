// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import HelpModal from '../components/HelpModal';
// import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';

const VampireMarkPage = () => {
    const navigate = useNavigate();

    const handleBack = (event) => {
        event.preventDefault();
        navigate('/create/conversion')
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">Summary
            <div className="flex justify-center">
                <BackButton onClick={handleBack} />
            </div>
        </div>
    )
}

export default VampireMarkPage;