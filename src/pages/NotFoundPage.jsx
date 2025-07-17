import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    return (
        <div className="bg-gradient-to-b from-black to-gray-900 text-white p-4 min-h-screen">
            <section className="text-center flex flex-col justify-center items-center h-96">
                <FaExclamationTriangle className='text-red-400 text-6xl mb-4' />
                <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
                <p className="text-lg mb-5">This page does not exist</p>
                <Link
                    to="/"
                    className="text-white bg-purple-800 hover:bg-purple-900 rounded-lg px-4 py-3 mt-4"
                >Go Back</Link>
            </section>
        </div>
        )
        
}

export default NotFoundPage;