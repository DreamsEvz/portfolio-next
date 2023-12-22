const Skills = () => {
    return (
        <section className="h-screen w-full">
            <div className="w-3/4 h-full m-auto text-white font-roboto">
                <div className="h-1/4 flex justify-center items-center">
                    <span className="text-6xl">Compétences</span>
                </div>
                <div className="h-3/4 grid grid-cols-5 items-center gap-10">
                    <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
                        <div className="h-1/4 w-full flex justify-center items-center relative">
                            <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
                            <span className="text-3xl text-center">Front-end</span>
                        </div>
                        <div className="h-3/4 p-10 flex flex-col justify-evenly items-center">
                            <span className="text-2xl">Tailwind CSS</span>
                            <span className="text-2xl">React</span>
                            <span className="text-2xl">Next.js</span>
                            <span className="text-2xl">Vue.js</span>

                        </div>
                    </div>
                    <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
                        <div className="h-1/4 w-full flex justify-center items-center relative">
                            <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
                            <span className="text-3xl text-center">Back-end</span>
                        </div>
                        <div className="h-3/4 p-10 flex flex-col justify-evenly items-center">
                            <span className="text-2xl">Laravel</span>
                            <span className="text-2xl">Node.js</span>
                            <span className="text-2xl">Django</span>
                        </div>
                    </div>
                    <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
                        <div className="h-1/4 w-full flex justify-center items-center relative">
                            <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
                            <span className="text-3xl text-center">Langages</span>
                        </div>
                        <div className="h-3/4 p-10 flex flex-col justify-evenly items-center">
                            <span className="text-2xl">Javascript</span>
                            <span className="text-2xl">Typescript</span>
                            <span className="text-2xl">Python</span>
                            <span className="text-2xl">PHP</span>
                        </div>
                    </div>
                    <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
                        <div className="h-1/4 w-full flex justify-center items-center relative">
                            <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
                            <span className="text-3xl text-center">BDD</span>
                        </div>
                        <div className="h-3/4 text-center p-10 flex flex-col justify-evenly	 items-center">
                            <span className="text-2xl">Mongo DB</span>
                            <span className="text-2xl">Bases relationnelles</span>
                        </div>
                    </div>
                    <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
                        <div className="h-1/4 w-full flex justify-center items-center relative">
                            <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
                            <span className="text-3xl text-center">Autre</span>
                        </div>
                        <div className="h-3/4 text-center p-10 flex flex-col justify-evenly	 items-center">
                            <span className="text-2xl">Github</span>
                            <span className="text-2xl">Gitlab</span>
                            <span className="text-2xl">Docker</span>
                            <span className="text-2xl">Mise en place de CI/CD simple</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
