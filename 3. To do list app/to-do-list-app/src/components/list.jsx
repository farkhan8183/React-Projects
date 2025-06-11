import React, { useState } from 'react'

const List = () => {

  const[task,settask]=useState(""); //empty string initially
  const[list,setlist]=useState([]); //empty array intitally..
//
const handlechange=(e)=>{
settask(e.target.value);
}
//
const handleclick=()=>{
  setlist([...list,task]);
  settask("");
  console.log(list)   //optional,to check list..
}
//
const removee=(key)=>{
const updated_list=list.filter((job,id)=>{  //it works similar to map funtion but filters what items it ll contain in array.
return key!=id;
  }
)
  setlist(updated_list);  //will contain all elements that r filtered.
}
//
const remove_all=()=>{
setlist([]);
}
    //-----------------------------//
  return (
    <>
    <div className='box'> 

<div className='pair'>
    <input className='task' type="text" placeholder='Enter your task' value={task} onChange={handlechange}/>
    <button className='btn'onClick={handleclick}>Add task</button>
</div>
   


{/* //Now, we gotta display this list on UI. */}

<h2 style={{color:"yellow"}}>Here is your list:</h2>
{
  list.length!==0 &&  //map function will execute only if list is not empty.
list.map((work,index)=>{
return(
<>
<div key={index} className='dabba'>
  <p className='task_text'>{work}</p> <br />
  <button className='remove_btn' onClick={()=>removee(index)}>Remove</button>
</div>
</>
)
}
)
}
{/* for removing all tasks*/}
{
list.length>=1 &&
<button className='rem_all' onClick={remove_all}>Remove all</button>
}

 </div>
    </>
  )
}

export default List

