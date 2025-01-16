import vampire from '../assets/images/vampire.png'

const Hero = ({
    // eslint-disable-next-line react/prop-types
    title = 'Become a vampire',
    // eslint-disable-next-line react/prop-types
    subtitle = 'Gather resources, hone skills, suck blood',
}) => {
    return (
        <section className='bg-red-900 py-20 mb-4'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
                <div className='md:shrink-0'>
                    <img className='h-48 w-full md:h-full md:w-48' src={vampire} alt='Vampire' title='Vampire' />
                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>{title}</h1>
                <p className='my-4 text-xl text-white'>{subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default Hero