import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="h-auto w-full mt-16">
      <div className="w-3/4 m-auto text-white font-nova-mono">
        <div className="h-1/4 flex items-center md:justify-center">
          <span className="text-6xl text-center">Quelques projets</span>
        </div>
        <div className="h-full grid grid-cols-1 items-center gap-4 mt-16 md:gap-10 md:grid-cols-4">
          <div className="flex flex-col bg-white rounded-xl picture-shadow p-4 md:p-10 md:aspect-square">
            <div className="h-auto">
              <span className="gradient-text text-3xl">Inside gones</span>
              <p className="gradient-text">
                Site internet du média Inside gones portant sur l&apos;actualité
                de l&apos;oympique lyonnais
              </p>
            </div>
            <div className="h-auto mt-4">
              <span className="gradient-text text-2xl">Projet étudiant</span>
              <br />
              <span className="gradient-text">Wordpress</span>
              <br />
              <span className="gradient-text">
                Création d&apos;un thème sur mesure en PHP
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-xl picture-shadow p-4 md:p-10 md:aspect-square">
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

          <div className="flex flex-col bg-white rounded-xl picture-shadow p-4 md:p-10 md:aspect-square">
            <div className="h-1/2">
              <div className="gradient-text text-3xl">
                <a
                  href="https://dogger.cloud"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <span>Dogger</span>
                  <LinkIcon className="h-6 w-6 text-black" />
                </a>
              </div>
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
          <div className="flex flex-col bg-white rounded-xl picture-shadow p-4 md:p-10 md:aspect-square">
            <div className="h-1/2">
              <div className="gradient-text text-3xl w-auto sm:text-md">
                <a
                  href="https://glepoint.fr"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <span>G'le Point</span>
                  <LinkIcon className="h-6 w-6 text-black" />
                </a>
              </div>
              <p className="gradient-text">
                Application de carte intéractive pour partager des points
                d'intérets entre amis
              </p>
            </div>
            <div className="h-1/2 mt-4">
              <span className="gradient-text text-2xl">
                Projet validation Master
              </span>
              <br />
              <span className="gradient-text">NextJs</span>
              <br />
              <span className="gradient-text">Firebase</span>
            </div>
          </div>
        </div>
        <div className="h-1/4 flex items-center justify-center mt-16">
          <div className="flex justify-center items-center bg-white p-5 rounded-xl">
            <p className="gradient-text mr-4">En découvrir plus sur mon</p>
            <a href="https://github.com/DreamsEvz" target="_blank">
              <Image
                src="/github.svg"
                alt="Github logo"
                objectFit="cover"
                width={60}
                height={60}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
