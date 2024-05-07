import { Animal } from "./AnimalList"
import React, { FC } from "react"

interface AnimalProps {
    animal: Animal;
}
const SingleAnimal: FC<AnimalProps> = ({ animal } :AnimalProps) => {
    return (
        <tr>
            <td>{animal.vrsta}</td>
            <td>{animal.ime}</td>
            <td>{animal.datumRodjenja.toDateString()}</td>
        </tr>
    )
};

export default SingleAnimal;