"use client";

import { useState } from "react";

import Image from "next/image";

import { CarProps } from "@/interfaces";

import CustomButton from "./CustomButton";

import { calculateCarRent, generateCarImageUrl } from "@/utils";

import { CarDetails } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">R$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> /Dia</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="modelo de carros"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="direção"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automático" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="pneu" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gasolina " width={20} height={20} />
            <p className="text-[14px]">{(city_mpg / 2.8248).toFixed(0)} KM/l</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="Ver ficha técnica (Inglês)"
            containerStyles="w-full py-16 rounded-full bg-primary-blue"
            textStyles="text-[14px] leading-[17px] text-white font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
