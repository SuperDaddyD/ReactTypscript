import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //HOW TO ADD TYPESCRIPT TO STATE!!
  //BELOW IS TYPE DEFINTION

  interface IState {
    people: {
      name: string;
      url: string;
      age: number;
      note?: string;
    }[];
  }

  //Above Notice you must read from end to top NOT TOP TO END!! READ ARRAY OF OBJECTS CALLED PEOPLE!!!

  //HOW TO ADD TYPESCRIPT TO STATE!!
  //BELOW IS IMPLEMENTING AND OVERIDING THE "INFERED" TYPE AND DEFININIG AN OVERIDING CUSTOM TYPE OF array of people
  //AND SETTING INITIAL STATE TO EMPTY ARRAY!
  const [people, setPeople] = useState<IState["people"]>([]);
  people.map((peep) => console.log(peep.name));
  return (
    <div className="App">
      <h1>People Invited To Our Party</h1>
    </div>
  );
}

export default App;
