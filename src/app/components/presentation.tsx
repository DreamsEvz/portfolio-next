import Image from 'next/image';

const Presentation = () => {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="w-3/4 h-full flex justify-center items-center">
                <div className="test w-52 h-52 overflow-hidden relative rounded-full border-4 border-white picture-shadow">
                    <Image
                        src="/photo.jpg"
                        alt="photo de profil"
                        layout="fill"
                        objectFit="cover" // Utilisez 'cover' pour maintenir les proportions de l'image tout en la remplissant
                        className="rounded-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Presentation;
