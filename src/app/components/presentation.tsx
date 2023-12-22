import Image from 'next/image';


const Presentation = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-3/4 mb-[200px] h-full flex justify-center items-center gap-16">
            <div className='w-1/2 h-12'>
                <span className='font-roboto text-8xl text-white' >Evan MARCEL</span>
                <br></br>
                <span className='font-roboto text-6xl text-white' >Développeur Fullstack expert</span>
            </div>
                <div className="test w-52 h-52 overflow-hidden relative rounded-full border-4 border-white picture-shadow">
                    <Image
                        src="/photo.jpg"
                        alt="photo de profil"
                        layout="fill"
                        objectFit="cover" 
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Presentation;
