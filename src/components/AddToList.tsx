import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];

  setPeople: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        url: string;
        age: number;
        note?: string | undefined;
      }[]
    >
  >;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  //THIS IS THE TWO WAY BINDING TECHNIQUE!!!
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    return console.log("HERE IS INPUT VALU =====>", input);
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) {
      return;
    }
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      note: "",
      img: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
