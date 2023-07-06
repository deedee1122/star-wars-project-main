export const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img";
export const GUIDE_SPECIES = "species";
export const GUIDE_PEOPLE = "characters";
export const GUIDE_SHIPS = "vehicles";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const getCharacterImage = (id: string | null) =>
  `${GUIDE_ROOT_IMG}/${GUIDE_PEOPLE}/${id}${GUIDE_IMG_EXTENSION}`;

export const getSpeciesImage = (id: string | null) =>
  `${GUIDE_ROOT_IMG}/${GUIDE_SPECIES}/${id}${GUIDE_IMG_EXTENSION}`;

export const getShipImage = (id: number| null) =>
  `${GUIDE_ROOT_IMG}/${GUIDE_SHIPS}/${id}${GUIDE_IMG_EXTENSION}`;
