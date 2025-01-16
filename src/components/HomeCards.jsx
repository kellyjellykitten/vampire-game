import Card from './Card';

const HomeCards = () => {
    return (
        <section className='py-4'>
            <div className='container-xl lg:container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>For Mortals</h2>
                        <p className='mt-2 mb-4'>Do your thing, dance your dance, eat the food</p>
                        <a href='#' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Create Your Mortal</a>
                    </Card>
                    <Card bg='bg-indigo-200'>
                        <h2 className='text-2xl font-bold'>For Vampires</h2>
                        <p className='mt-2 mb-4'>You&#39;re a vampire, Harry</p>
                        <a href='#' className='inline-block bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700'>Continue Your Vampire</a>
                    </Card>
                </div>
            </div>
        </section>
    )
}
export default HomeCards


