import React, { useState } from "react";

const AddToList = () => {
    const [input,setInput] = useState(
        {
            name:"",
            age:"",
            note:"",
            img:""
        }
    )

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
       setInput(
        {
            ...input,
            [e.target.name]:e.target.value
        }
        
       )
       return console.log("HERE IS INPUT VALU =====>",input)
    }
  return (
    <div className="AddToList">
      <input type="text" placeholder="Name" className="AddToList-input" value={input.name}  name="name" onChange={handleChange} />
      <input type="text" placeholder="Age" className="AddToList-input" value={input.age}  name="age"  onChange={handleChange}/>
      <input type="text" placeholder="Image Url" className="AddToList-input"  value={input.img}  name="img" onChange={handleChange}/>
      <textarea placeholder="Notes" className="AddToList-input" value={input.note}   name="note" onChange={handleChange} />
    </div>
  );
};

export default AddToList;
