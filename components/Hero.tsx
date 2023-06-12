"use client";

import Image from "next/image";

import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Encontre, Reserve ou Alugue um carro - Rapidamente e Facilmente
        </h1>
        <p className="hero__subtitle">
          Sinta o conforto e a experiência de alugar um carro conosco, com nosso
          processo rápido e prático de aluguel veicular.{" "}
        </p>
        <CustomButton
          title="Explore os carros"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 hover:scale-105 hover:opacity-70 duration-300"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="imagem do carro" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
