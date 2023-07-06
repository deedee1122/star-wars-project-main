import { FC, useState } from "react";
import { ISpecie } from "swapi-ts";
import { Link } from "react-router-dom";
import { getSpeciesImage } from "./constants";
import NoImageFound from "../../assets/no-image-available.svg";

const SpeciesCard: FC<ISpecie> = ({ name, url }) => {
  const match = url.match(/\/(\d+)\/$/);
  const speciesUrlNumber = match ? match[1] : null;
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/species/${speciesUrlNumber}`}
      className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="rounded-t-lg w-[100%] h-[320px] object-cover object-center"
        src={!imageError ? getSpeciesImage(speciesUrlNumber) : NoImageFound}
        onError={() => setImageError(true)}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* secondary text */}
        </p>
      </div>
    </Link>
  );
};

export default SpeciesCard;
