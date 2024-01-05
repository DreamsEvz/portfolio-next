'use client'

import Image from 'next/image';
import useMobile  from '../hooks/useMobile';

const Presentation = () => {

    const isMobile = useMobile();

    return (
        <section className="w-full h-screen flex justify-center flex-col">
            <div className='flex justify-center'>
                <div className="flex-col-reverse flex items-center gap-16 md:w-3/4 md:h-full md:flex md:justify-center md:gap-16 md:flex-row">
                    <div className='w-1/2'>
                        <span className='font-roboto text-white text-6xl md:text-8xl'>Evan MARCEL</span>
                        <br></br>
                        <span className='font-roboto text-white text-4xl md:text-6xl'>Développeur web Fullstack</span>
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
            </div>
            <div className='bg-white h-auto w-auto mx-auto mt-48 rounded-xl p-4 md:p-4'>
                {/* make some button of social media */
                    <div className='flex justify-center items-center gap-4'>
                        <div className='h-auto w-auto flex justify-center align-center'>
                            <Image
                                src="/linkedin.svg"
                                alt="linkedin logo"
                                width={isMobile ? 20 : 50}
                                height={isMobile ? 20 : 50}
                            />
                        </div>
                        <div className='h-auto w-auto flex justify-center align-center'>
                            <Image
                                src="/github.svg"
                                alt="github logo"
                                width={isMobile ? 20 : 50}
                                height={isMobile ? 20 : 50}
                            />
                        </div>
                        <div className='h-auto w-auto flex justify-center align-center'>
                            <Image
                                src="/discord.svg"
                                alt="discord logo"
                                width={isMobile ? 20 : 50}
                                height={isMobile ? 20 : 50}
                            />
                        </div>
                        <div className='h-auto w-auto flex justify-center align-center'>
                            <Image
                                src="/mail.svg"
                                alt="mail logo"
                                width={isMobile ? 20 : 50}
                                height={isMobile ? 20 : 50}
                            />
                        </div>
                        <div className='h-auto w-auto flex justify-center align-center'>
                            <Image
                                src="/phone.svg"
                                alt="phone logo"
                                width={isMobile ? 20 : 50}
                                height={isMobile ? 20 : 50}
                            />
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Presentation;
