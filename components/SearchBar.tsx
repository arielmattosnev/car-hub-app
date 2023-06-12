"use client";

import React, { useState } from "react";

import { SearchButton, SearchManuFacturer } from ".";

import Image from "next/image";

import { useRouter } from "next/navigation";

const SearchBar = ({ setManufacturer, setModel }) => {
  const [searchManufacter, setSearchManufacturer] = useState<string>("");
  const [searchModel, setSearchModel] = useState<string>("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacter === "" && searchModel === "") {
      return alert("Por favor preencha os campos da barra de pesquisa");
    }

    setModel(searchModel), setManufacturer(searchManufacter);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          selected={searchManufacter}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="modelo do carro"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
