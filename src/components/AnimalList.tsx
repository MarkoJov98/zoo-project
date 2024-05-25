import React, { ReactElement, useState } from "react";
import SingleAnimal from "./SingleAnimal";

export interface Animal {
  vrsta: string;
  ime: string;
  datumRodjenja?: Date;
  sektor: string;
}
const ListOfAnimals: Animal[] = [
  {
    vrsta: "Macka",
    ime: "Sareni",
    datumRodjenja: new Date(2020, 5, 6),
    sektor: "sisar",
  },
  {
    vrsta: "Pas",
    ime: "Dzeki",
    datumRodjenja: new Date(1998, 5, 4),
    sektor: "sisar",
  },
  {
    vrsta: "Majmun",
    ime: "Bob",
    datumRodjenja: new Date(2000, 6, 7),
    sektor: "sisar",
  },
  {
    vrsta: "Zmija",
    ime: "Pera",
    datumRodjenja: new Date(2002, 7, 8),
    sektor: "gmizavac",
  },
  {
    vrsta: "Ptica",
    ime: "Crni",
    datumRodjenja: new Date(2005, 11, 20),
    sektor: "ptica",
  },
];
const sektors = ["sisar", "gmizavac", "ptica"];

function AnimalList() {
  const [animals, setAnimals] = useState(ListOfAnimals);
  const [form, setForm] = useState({
    vrsta: "",
    ime: "",
    datumRodjenja: "",
    sektor: sektors[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onRemove = (animalIndex: number) => {
    setAnimals(animals.filter((animal, index) => animalIndex !== index));
  };

  const moveToTop = (animalIndex: number) => {
    setAnimals([
      animals[animalIndex],
      ...animals.filter((animal, index) => animalIndex !== index),
    ]);
  };

  const addAnimal = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newAnimal: Animal = {
      vrsta: form.vrsta,
      ime: form.ime,
      datumRodjenja: form.datumRodjenja
        ? new Date(form.datumRodjenja)
        : undefined,
      sektor: form.sektor,
    };
    setAnimals([...animals, newAnimal]);
    setForm({
      vrsta: "",
      ime: "",
      datumRodjenja: "",
      sektor: sektors[0],
    });
  };

  return (
    <>
      <form className="zoo-forma" onSubmit={addAnimal}>
        <label>
          Vrsta:
          <input
            type="text"
            name="vrsta"
            value={form.vrsta}
            placeholder="Vrsta"
            onChange={handleChange}
          />
        </label>
        <label>
          Ime:
          <input
            type="text"
            name="ime"
            value={form.ime}
            placeholder="Ime"
            onChange={handleChange}
          />
        </label>
        <label>
          Datum rodjenja:
          <input
            type="date"
            name="datumRodjenja"
            value={form.datumRodjenja}
            placeholder="Datum rodjenja"
            onChange={handleChange}
          />
        </label>
        <label>Sektor:
        <select name="sektor" value={form.sektor} onChange={handleChange}>
          {sektors.map((sector, index) => (
            <option key={index} value={sector}>
              {sector}
            </option>
          ))}
        </select>
        </label>
        <button type="submit">Dodaj zivotinju</button>
      </form>
      <table className="zoo-table">
        <thead>
          <tr>
            <th>Vrsta</th>
            <th>Ime</th>
            <th>Datum Rodjenja</th>
            <th>Sektor</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <SingleAnimal
              key={index}
              animal={animal}
              onRemove={() => onRemove(index)}
              moveToTop={() => moveToTop(index)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AnimalList;
