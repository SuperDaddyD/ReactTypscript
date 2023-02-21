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

//THIS IS THE BEST PRACTICE WAY TO BE MORE SPECIFIC TO DO DECLARE FUNCTION TYPE!!!

// const List: React.FC<IProps> = ({ people }) => {
//   return (
//     //BELOW WORKS BUT THE BETTER WAY IS TO MAKE A FUNCTION SEPERATE THEN CALL IT!!
//     <ul>
//       {people.map((peep) => (
//         <div>
//           <img src={peep.url} />
//           <h1>{peep.name}</h1>
//           <p>{peep.age}</p>
//           <p>{peep.note}</p>
//         </div>
//       ))}
//     </ul>
//   );
// };

//BELOW IS THE BEST WAY TO DECLARE AND RENDER A TYPSCRIPT REACT APP BEST PRACTICE
const List: React.FC<IProps> = ({ people }) => {
    
    //HOW TO TELL TYPESCRIPT I AM RETURNING A JSX ELEMENT. INSTEAD OF LETTING IT INFER!!
    const renderList = ():JSX.Element[]=>{
        return people.map((peep)=>(
          <li className="List" key={peep.name}>
            <div className="List-header">
              <img className="List-img" src={peep.url} alt="" />
              <h2>{peep.name}</h2>
              </div>
              <p>{peep.age}</p>
              <p className="List-note">{peep.note}</p>
          </li>
        ))
           
        
    }
   
  return (
    //BELOW WORKS BUT THE BETTER WAY IS TO MAKE A FUNCTION SEPERATE THEN CALL IT!!
    <ul>
            {renderList()}

    </ul>
  );
};

export default List;
