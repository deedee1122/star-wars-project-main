import { FC, useState } from "react";
import { IPeople } from "swapi-ts";
import { Link } from "react-router-dom";
import { getCharacterImage } from "./constants";
import NoImageFound from "../../assets/no-image-available.svg";

const PeopleCard: FC<IPeople> = ({ name, gender, url }) => {
  const match = url.match(/\/(\d+)\/$/);
  const peopleUrlNumber = match ? match[1] : null;
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/people/${peopleUrlNumber}`}
      className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        className="rounded-t-lg w-[100%] h-[320px] object-cover object-center"
        src={!imageError ? getCharacterImage(peopleUrlNumber) : NoImageFound}
        onError={() => setImageError(true)}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {gender}
        </p>
      </div>
    </Link>
  );
};

export default PeopleCard;
