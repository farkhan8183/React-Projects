import React, { createContext, useState } from 'react'
export const datacontext=createContext()
import { food_items } from '../food';       //must, for cate..

const Usercontext = ({children}) => {
let[input,setinput]=useState("");
const[cate,setcate]=useState(food_items)    //pasted from home.jsx, for cards info.

const[showcart,setshowcart]=useState(false);    /* (S-1) */

let data={  //will send all this data/props
    input,setinput,cate,setcate,showcart,setshowcart
}

  return (
    <div>
        <datacontext.Provider value={data}>
            {children} {/* acc to usecontext,here is always a component to which the value given by usecontext hook is provdied.here its children i.e all components of app. */}
        </datacontext.Provider>
    </div>
  )
}

export default Usercontext