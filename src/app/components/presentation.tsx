"use client";

import Image from "next/image";
import DownPin from "./mini-component/downPin";
import DynamicText from "./mini-component/dynamicText";

const Presentation = () => {
  return (
    <section className="w-full flex flex-col mt-8">
      <div className="hidden-text w-full h-auto text-white text-center font-nova-mono">
        <Image
          className="coin mx-auto rounded-full border-4 border-white"
          src={"/photo.jpg"}
          width={256}
          height={256}
          alt={""}
        ></Image>
        <h1 className="text-5xl mt-12 md:text-6xl">EVAN MARCEL</h1>
        <h2 className="text-lg mt-4 text-container md:text-3xl">
          <span>DÉVELOPPEUR FULLSTACK </span>
          <DynamicText />
          <span className="cursor">|</span>
        </h2>
        <h3 className="text-xl mt-6">
          Actuellement en recherche de CDI pour la rentrée 2024
        </h3>
      </div>
      <DownPin />
    </section>
  );
};

export default Presentation;
