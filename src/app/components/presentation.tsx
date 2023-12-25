import Image from 'next/image';


const Presentation = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="flex-col-reverse flex items-center gap-16 md:w-3/4 md:mb-[200px] md:h-full md:flex md:justify-center md:gap-16 md:flex-row">
            <div className='w-1/2'>
                <span className='font-roboto text-white text-6xl md:text-8xl' >Evan MARCEL</span>
                <br></br>
                <span className='font-roboto text-white text-4xl md:text-6xl ' >Développeur Fullstack expert</span>
            </div>
                <div className="test w-64 h-64  overflow-hidden relative rounded-full border-4 border-white picture-shadow">
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
