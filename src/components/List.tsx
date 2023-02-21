import React from "react";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

//BELOW IS THE FIRST WAY TO DO THIS!!!
// export default function List(props:IProps) {
//BELOW IS THE SECOND WAY TO DO THIS!!!
// export default function List({people}:IProps) {
//   return (
//     <div>
//         <ul>
//            I am a List
//         </ul>
//     </div>
//   )
// }

//THIS IS THE BEST PRACTICE WAY TO BE MORE SPECIFIC TO DO THIS!!!

const List: React.FC<IProps> = ({ people }) => {
  return (
    //BELOW WORKS BUT THE BETTER WAY IS TO MAKE A FUNCTION SEPERATE THEN CALL IT!!
    <ul>
      {people.map((peep) => (
        <div>
          <img src={peep.url} />
          <h1>{peep.name}</h1>
          <p>{peep.age}</p>
          <p>{peep.note}</p>
        </div>
      ))}
    </ul>
  );
};

export default List;
