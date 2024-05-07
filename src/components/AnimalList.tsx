import React, { ReactElement, useState } from "react";
import SingleAnimal from "./SingleAnimal";

export interface Animal {
  vrsta: string;
  ime: string;
  datumRodjenja?: Date;
}
const ListOfAnimals: Animal[] = [
  { vrsta: "Macka", ime: "Sareni", datumRodjenja: new Date(2020,5, 6) },
  { vrsta: "Pas", ime: "Dzeki", datumRodjenja: new Date(1998,5,4) },
  { vrsta: "Majmun", ime: "Bob", datumRodjenja: new Date(2000, 6, 7) },
  { vrsta: "Macka", ime: "Pera", datumRodjenja: new Date(2002, 7, 8) },
  { vrsta: "Pas", ime: "Crni", datumRodjenja: new Date(2005, 11, 20) },
];

function AnimalList() {
    const [ animals, setAnimals ] = useState(ListOfAnimals)

    const onRemove = (animalIndex: number) => {
        setAnimals(animals.filter((animal, index) => animalIndex !== index));
    };

  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Vrsta</th>
          <th>Datum Rodjenja</th>
        </tr>
      </thead>
      <tbody>
        {animals.map((animal, index) => (
            <SingleAnimal key={index} animal={animal} onRemove= {() =>onRemove(index)}/>
        ))}
      </tbody>
    </table>
  );
};

export default AnimalList;
