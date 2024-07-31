const Pathing = () => {
  return (
    <section className="h-screen w-full">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono">
        <div className="h-1/4 flex justify-center items-center">
          <span className="text-5xl">Parcours</span>
        </div>
        <div className="h-3/4 flex flex-col items-center gap-10">
          <div className="h-full w-full border-4 rounded-xl"></div>
          <div className="h-full w-full border-4 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Pathing;
