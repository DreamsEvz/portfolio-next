const Pathing = () => {
  return (
    <section className="h-auto w-full mt-16">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono">
        <div className="h-1/4 flex justify-center items-center">
          <span className="text-5xl md:text-6xl">Parcours</span>
        </div>
        <div className="h-3/4 flex flex-col items-center gap-10 mt-8 md:flex-row md:items-stretch">
          <div className="h-full w-full border-4 rounded-xl p-2">
            <h2 className="text-center text-3xl">
              Experiences professionnelles
            </h2>
            <div className="h-1 w-3/4 m-auto bg-white mt-4"></div>
            <div className="h-3/4 mt-4 p-5">
              <p className="font-bold">Virtualbuilding</p>
              <p>
                Développement d&apos;un back-office sur mesure pour la création
                d&apos;iframe intégrable sur les sites des clients
              </p>
              <p>React - Django</p>
              <p>2021-2024</p>
            </div>
            <div className="h-3/4 p-5">
              <p className="font-bold">Com & company</p>
              <p>
                Développement d&apos;une plateforme de signature électronique
                interne à l&apos;entreprise
              </p>
              <p>Symfony - Vuejs</p>
              <p>2021</p>
            </div>
          </div>
          <div className="h-full w-full border-4 rounded-xl p-2">
            <h2 className="text-center text-3xl">
              Diplomes & parcours scolaire
            </h2>
            <div className="h-1 w-3/4 m-auto bg-white mt-4"></div>
            <div className="h-3/4 mt-4 p-5">
              <p className="font-bold">
                RNCP de niveau 7 Expert en système d&apos;information
              </p>
              <p>Ynov campus Lyon</p>
              <p>2022-2024</p>
            </div>
            <div className="h-3/4 p-5">
              <p className="font-bold">Bachelor développeur web</p>
              <p>Ynov campus Lyon</p>
              <p>2021-2022</p>
            </div>
            <div className="h-3/4 p-5">
              <p className="font-bold">BIO SIO</p>
              <p>Lycée Ella Fitzgerald</p>
              <p>2019-2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathing;
