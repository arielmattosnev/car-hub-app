"use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";

import { fuels, yearsOfProduction } from "@/constants";

import { fetchCars } from "@/utils";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const [fuel, setFuel] = useState<string>();
  const [year, setYear] = useState<number>(2022);

  const [limit, setLimit] = useState<number>(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const isEmptyData = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Carros</h1>
          <p>Veja carros que você pode gostar</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter
              title="gasolina"
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              title="ano"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flec-center">
                <Image
                  src="/loader.svg"
                  alt="imagem de carregamento"
                  width={50}
                  height={50}
                  className="object-contain "
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Busca de carros falhou
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
