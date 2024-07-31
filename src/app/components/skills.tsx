import Image from "next/image";

const Skills = () => {
  return (
    <section className="mt-40 w-full">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono scroll-reveal">
        <div className=" h-1/6 flex justify-center items-center md:h-1/4">
          <span className="text-5xl md:text-6xl">Compétences</span>
        </div>
        <div className="h-3/4 mt-10 items-center flex flex-col gap-10 md:grid md:grid-cols-5">
          <div className="h-3/4 w-3/4 border-t-4 border-l-4 rounded-2xl p-5 md:h-full">
            <div className="h-auto flex justify-center items-center">
              <span className="text-3xl md:text-3xl text-center">
                Front-end
              </span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2 justify-center items-center gap-2 md:grid md:grid-cols-1 md:gap-10">
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
          <div className="h-3/4 w-3/4 border-b-4 border-r-4 rounded-2xl p-5 md:h-auto">
            <div className="h-auto flex justify-center items-center">
              <span className="text-3xl text-center">Back-end</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2 justify-center items-center gap-2 md:grid md:grid-cols-1 md:gap-10">
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
          <div className="h-3/4 w-3/4 border-t-4 border-l-4 rounded-2xl p-5 md:h-full">
            <div className="h-auto flex justify-center items-center">
              <span className="text-3xl md:text-3xl text-center">Langages</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2 justify-center items-center gap-2 md:grid md:grid-cols-1 md:gap-10">
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
          <div className="h-3/4 w-3/4 border-b-4 border-r-4 rounded-2xl p-5 md:h-full">
            <div className="h-auto flex justify-center items-center">
              <span className="text-3xl md:text-3xl text-center">BDD</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2 justify-center items-center gap-2 md:grid md:grid-cols-1 md:gap-10">
              <Image
                className="mx-auto"
                src={"/skills-svg/mysql-icon.svg"}
                height={60}
                width={60}
                alt={"mysql"}
              />
              <Image
                className="mx-auto h-16"
                src={"/skills-svg/mongodb-icon.svg"}
                height={60}
                width={60}
                alt={"mongodb"}
              />
              <Image
                className="mx-auto h-16"
                src={"/skills-svg/postgresql.svg"}
                height={60}
                width={60}
                alt={"postgresql"}
              />
            </div>
          </div>
          <div className="h-3/4 w-3/4 border-t-4 border-l-4 rounded-2xl p-5 md:h-full">
            <div className="h-auto w-full flex justify-center items-center relative">
              <span className="text-3xl md:text-3xl text-center">CI/CD</span>
            </div>
            <div className="h-3/4 p-4 grid grid-cols-2 justify-center items-center gap-2 md:grid md:grid-cols-1 md:gap-10">
              <Image
                className="mx-auto h-16"
                src={"/skills-svg/docker-icon.svg"}
                height={60}
                width={60}
                alt={"docker"}
              />
              <Image
                className="mx-auto h-16"
                src={"/skills-svg/gitlab.svg"}
                height={60}
                width={60}
                alt={"gitlab"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
