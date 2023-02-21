import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List"

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
  //"https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg"
  
  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"Lebron James",
      url:"https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age:36,
      note:"Allergic to staying on the same team"
    }
  ]);
  
  
  people.map((peep) => console.log(peep.name));
  return (
    <div className="App">
      <h1>People Invited To Our Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
