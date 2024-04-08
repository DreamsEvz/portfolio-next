import Image from "next/image";

const Projects = () => {
  return (
    <section className="h-screen w-full">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono">
        <div className="h-1/4 flex justify-center items-center">
          <span className="text-6xl">Projets</span>
        </div>
        <div className="h-2/4 grid grid-cols-2 items-center gap-4 md:gap-10 md:grid-cols-4">
          <div className="flex flex-col aspect-square bg-white rounded-xl picture-shadow p-4 md:p-10">
            <div className="h-1/2">
              <span className="gradient-text text-sm md:text-3xl">
                Inside gones
              </span>
              <p className="gradient-text text-xs">
                Site internet du média Inside gones portant sur l&apos;actualité
                de l&apos;oympique lyonnais
              </p>
            </div>
            <div className="h-1/2 mt-4">
              <span className="gradient-text text-xs md:text-2xl">
                Projet étudiant
              </span>
              <br />
              <span className="gradient-text text-xs">Wordpress</span>
              <br />
              <span className="gradient-text text-xs">
                Création d&apos;un thème sur mesure en PHP
              </span>
            </div>
          </div>
          <div className="flex flex-col aspect-square bg-white rounded-xl picture-shadow p-4 md:p-10">
            <div className="h-1/2">
              <span className="gradient-text text-3xl">Safe area</span>
              <p className="gradient-text">
                Application permettant de répertorier des cas de harcelement au
                travail
              </p>
            </div>
            <div className="h-1/2 mt-4">
              <span className="gradient-text text-2xl">Projet étudiant</span>
              <br />
              <span className="gradient-text">Laravel</span>
              <br />
              <span className="gradient-text">Vue js</span>
            </div>
          </div>

          <div className="flex flex-col aspect-square bg-white rounded-xl picture-shadow p-4 md:p-10">
            <div className="h-1/2">
              <span className="gradient-text text-3xl">Dogger</span>
              <p className="gradient-text">
                Application de gestion d&apos;erreur en production
              </p>
            </div>
            <div className="h-1/2 mt-4">
              <span className="gradient-text text-2xl">Projet étudiant</span>
              <br />
              <span className="gradient-text">Laravel</span>
              <br />
              <span className="gradient-text">Vue js</span>
            </div>
          </div>
          <div className="flex flex-col aspect-square bg-white rounded-xl picture-shadow p-4 md:p-10">
            <div className="h-1/2">
              <span className="gradient-text text-3xl sm:text-md">Océta</span>
              <p className="gradient-text">
                Application de gestion de données client à destination du
                personnel médical
              </p>
            </div>
            <div className="h-1/2 mt-4">
              <span className="gradient-text text-2xl">Projet étudiant</span>
              <br />
              <span className="gradient-text">Electron</span>
            </div>
          </div>
        </div>
        <div className="h-1/4 flex items-center justify-center">
          <div className="flex bg-white p-5 rounded-xl md:p-10">
            <a href="https://github.com/DreamsEvz" target="_blank">
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
  );
};

export default Projects;
