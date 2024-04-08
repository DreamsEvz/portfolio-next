const Pathing = () => {
  return (
    <section className="h-screen w-full">
      <div className="w-3/4 h-full m-auto text-white font-nova-mono">
        <div className="h-1/4 flex justify-center items-center">
          <span className="text-6xl">Parcours</span>
        </div>
        <div className="h-3/4 flex items-center gap-10">
          <div className="h-full w-1/2 border-r-4 border-t-4 rounded-xl"></div>
          <div className="h-full w-1/2 border-l-4 border-t-4 rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Pathing;
