import { NavLink } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
    return (
        <section className='py-4'>
            <div className='container-xl lg:container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>For Mortals</h2>
                        <p className='mt-2 mb-4'>Click here to start the vampire creation process.</p>
                        <NavLink to='/create' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Create Your Vampire</NavLink>
                    </Card>
                    <Card bg='bg-indigo-200'>
                        <h2 className='text-2xl font-bold'>For Vampires</h2>
                        <p className='mt-2 mb-4'>If you&apos;ve already created your vampire and have the exported file, click here to begin the game.</p>
                        <NavLink to='/game' className='inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700'>Begin Game</NavLink>
                    </Card>
                </div>
                <div className='p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>How it Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed risus sit amet augue eleifend posuere at at nunc. In bibendum facilisis ante, ut tempus ex efficitur sollicitudin. Fusce euismod risus ac commodo rhoncus. Integer non lorem augue. Aliquam elementum luctus ex, eget imperdiet ante pellentesque in. Sed tristique lacinia sagittis. Quisque et tempor ante. Maecenas a tempus elit. Nulla facilisi. Cras dictum, magna ac venenatis vestibulum, libero mauris vehicula velit, sed ornare nisl nisl ut mi. Proin mollis varius est quis vulputate. Praesent at mi in neque tempor dignissim. Vivamus finibus nibh ut molestie auctor. Duis tincidunt id elit at blandit. Duis id quam ultrices, tincidunt arcu sed, aliquet ligula.</p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default HomeCards


