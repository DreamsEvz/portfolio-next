import Image from "next/image";

const Skills = () => {
  return (
    <section className="mt-40 w-full">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono scroll-reveal">
        <div className=" h-1/6 flex justify-center items-center md:h-1/4">
          <span className="text-6xl">Compétences</span>
        </div>
        <div className="h-3/4 mt-10 items-center flex flex-col gap-10 md:gap-10 grid-container md:grid-cols-5">
          <div className="h-3/4 w-3/4 border-t-4 border-l-4 rounded-2xl p-5">
            <div className="h-1/4 w-full flex justify-center items-center relative">
              <span className="text-3xl md:text-3xl text-center">
                Front-end
              </span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2  justify-center items-center gap-2 md:gap-0">
              <Image
                className="mx-auto"
                src={"/skills-svg/nextjs-icon.svg"}
                height={60}
                width={60}
                alt={"next.js"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/react.svg"}
                height={60}
                width={60}
                alt={"react.js"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/vue.svg"}
                height={60}
                width={60}
                alt={"vue.js"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/tailwindcss-icon.svg"}
                height={60}
                width={60}
                alt={"tailwind"}
              />
            </div>
          </div>
          <div className="h-3/4 w-3/4 border-b-4 border-r-4 rounded-2xl p-5">
            <div className="h-1/4 flex justify-center items-center relative">
              <span className="text-3xl text-center">Back-end</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2  justify-center items-center gap-2 md:gap-0">
              <Image
                className="mx-auto"
                src={"/skills-svg/laravel.svg"}
                height={60}
                width={60}
                alt={"laravel"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/symfony.svg"}
                height={60}
                width={60}
                alt={"laravel"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/django-icon.svg"}
                height={60}
                width={60}
                alt={"django"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/nodejs-icon.svg"}
                height={60}
                width={60}
                alt={"node.js"}
              />
            </div>
          </div>
          <div className="h-3/4 w-3/4 border-t-4 border-l-4 rounded-2xl p-5">
            <div className="h-1/4 flex justify-center items-center relative">
              <span className="text-3xl md:text-3xl text-center">Langages</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2  justify-center items-center gap-2 md:gap-0">
              <Image
                className="mx-auto"
                src={"/skills-svg/javascript.svg"}
                height={60}
                width={60}
                alt={"javascript"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/typescript-icon.svg"}
                height={60}
                width={60}
                alt={"typescript"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/python.svg"}
                height={60}
                width={60}
                alt={"python"}
              />
              <Image
                className="mx-auto"
                src={"/skills-svg/php.svg"}
                height={60}
                width={60}
                alt={"php"}
              />
            </div>
          </div>
          <div className="h-3/4 w-3/4 border-b-4 border-r-4 rounded-2xl p-5">
            <div className="h-1/4 w-full flex justify-center items-center relative">
              <span className="text-3xl md:text-3xl text-center">BDD</span>
            </div>
            <div className="h-3/4 mt-10 items-center flex flex-col gap-10 md:gap-10 grid-container md:grid-cols-5">
              <span className="text-xs md:text-2xl">Mongo DB</span>
              <span className="text-xs md:text-2xl">Bases relationnelles</span>
            </div>
          </div>
          <div className="h-3/4 border-t-4 border-l-4 rounded-2xl">
            <div className="h-1/4 w-full flex justify-center items-center relative">
              <div className="absolute border-b-4 top-1/2 bottom-0 w-3/4"></div>
              <span className="text-md md:text-3xl text-center">Autre</span>
            </div>
            <div className="h-3/4 text-center p-10 flex flex-col justify-evenly	 items-center">
              <span className="text-xs md:text-2xl">Github</span>
              <span className="text-xs md:text-2xl">Gitlab</span>
              <span className="text-xs md:text-2xl">Docker</span>
              <span className="text-xs md:text-2xl">
                Mise en place de CI/CD simple
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
