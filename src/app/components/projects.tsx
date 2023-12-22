import Image from 'next/image';

const Projects = () => {
    return (
        <section className="h-screen w-full">
            <div className="w-3/4 h-full m-auto text-white font-roboto">
                <div className="h-1/4 flex justify-center items-center">
                    <span className="text-6xl">Projets</span>
                </div>
                <div className="h-2/4 grid grid-cols-4 items-center gap-10">
                    <div className="flex flex-col aspect-square bg-white p-10 rounded-xl picture-shadow">
                        <div className='h-1/2'>
                            <span className='gradient-text text-3xl'>Inside gones</span>
                            <p className='gradient-text'>Site internet du média Inside gones portant sur l&apos;actualité de l&apos;oympique lyonnais</p>
                        </div>
                        <div className='h-1/2 mt-4'>
                            <span className='gradient-text text-2xl'>Projet étudiant</span>
                            <br />
                            <span className='gradient-text'>Wordpress</span>
                            <br />
                            <span className='gradient-text'>Création d&apos;un thème sur mesure en PHP</span>
                        </div>
                    </div>
                    <div className="flex flex-col aspect-square bg-white p-10 rounded-xl picture-shadow">
                        <div className='h-1/2'>
                            <span className='gradient-text text-3xl'>Safe area</span>
                            <p className='gradient-text'>Application permettant de répertorier des cas de harcelement au travail</p>
                        </div>
                        <div className='h-1/2 mt-4'>
                            <span className='gradient-text text-2xl'>Projet étudiant</span>
                            <br />
                            <span className='gradient-text'>Laravel</span>
                            <br />
                            <span className='gradient-text'>Vue js</span>
                        </div>
                    </div>

                    <div className="flex flex-col aspect-square bg-white p-10 rounded-xl picture-shadow">
                        <div className='h-1/2'>
                            <span className='gradient-text text-3xl'>Dogger</span>
                            <p className='gradient-text'>Application de gestion d&apos;erreur en production</p>
                        </div>
                        <div className='h-1/2 mt-4'>
                        <span className='gradient-text text-2xl'>Projet étudiant</span>
                            <br />
                            <span className='gradient-text'>Laravel</span>
                            <br />
                            <span className='gradient-text'>Vue js</span>
                        </div>
                    </div>
                    <div className="flex flex-col aspect-square bg-white p-10 rounded-xl picture-shadow">
                        <div className='h-1/2'>
                            <span className='gradient-text text-3xl'>Océta</span>
                            <p className='gradient-text'>Application de gestion de données client à destination du personnel médical</p>
                        </div>
                        <div className='h-1/2 mt-4'>
                        <span className='gradient-text text-2xl'>Projet étudiant</span>
                            <br />
                            <span className='gradient-text'>Electron</span>
                        </div>
                    </div>
                </div>
                <div className="h-1/4 flex items-center justify-center">
                    <div className="flex bg-white p-10 rounded-xl">
                        <a href='https://github.com/DreamsEvz' target='_blank'>
                            <Image
                                src="/github.svg"
                                alt="Github logo"
                                objectFit="cover"
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Projects;
