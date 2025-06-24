import { useNavigate } from 'react-router-dom';
import NextButton from '../components/NextButton';

const CreatePage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/create/name');
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <h1 className="font-trade-winds text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
                <span className="bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent">
                    Create Your Vampire
                </span>
            </h1>
            <div className="max-w-xl mx-auto bg-gray-700 p-6 rounded-lg">
                <p className="mt-2">On the next pages, you will create your vampire-to-be. There are six steps in the character creation:</p>
                <div className="max-w-sm mx-auto">
                    <ul className="list-decimal space-y-2 mt-4 ml-4 mr-4">
                        <li><span className="text-red-300">Origin:</span> The name of your mortal, where they&apos;re from, and who they are</li>
                        <li><span className="text-red-300">Side Characters:</span> Three mortals with whom your character has some relationship with</li>
                        <li><span className="text-red-300">Skills:</span> Three skills your mortal excels in</li>
                        <li><span className="text-red-300">Resources:</span> Three items belonging to your character</li>
                        <li><span className="text-red-300">Memories:</span> You will come up with three experiences to place into memory containers</li>
                        <li><span className="text-red-300">Conversion:</span> The immortal that turned you into a vampire, how it happened, and what mark they left on you</li>
                    </ul>
                </div>
                <p className="mt-4">Each page will have a &quot;?&quot; icon in the top right corner that opens up a help window in case you need assistance during any of the steps.</p>
                <p className="mt-4">Once you have created your vampire, you will be able to download your character sheet and import it into the game to begin your blood-sucking adventures!</p>
            </div>
            <div className="flex justify-center mt-8">
                <NextButton onClick={handleSubmit} />
            </div>
        </div>
    )
};

export default CreatePage;