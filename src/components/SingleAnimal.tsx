import { Animal } from "./AnimalList";
import React, { FC } from "react";

interface AnimalProps {
  animal: Animal;
  onRemove: () => void;
  moveToTop: () => void;
}
const SingleAnimal: FC<AnimalProps> = ({
  animal,
  onRemove,
  moveToTop,
}: AnimalProps) => {
  return (
    <tr>
      <td>{animal.vrsta}</td>
      <td>{animal.ime}</td>
      <td>
        {animal.datumRodjenja
          ? animal.datumRodjenja.toDateString()
          : "Nepoznato"}
      </td>
      <td>
        <button onClick={onRemove}>Remove</button>
      </td>
      <td>
        <button onClick={moveToTop}>Move to top</button>
      </td>
    </tr>
  );
};

export default SingleAnimal;
