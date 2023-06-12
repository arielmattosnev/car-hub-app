import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="lupa"
      width={40}
      height={40}
      className="object-contain md:hover:scale-110 duration-300"
    />
  </button>
);

export default SearchButton;
