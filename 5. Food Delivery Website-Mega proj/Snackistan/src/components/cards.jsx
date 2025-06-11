//redux-4=>navbar.jsx
import React from 'react'
import image1 from '../assets/image1.avif'
import { LuVegan } from "react-icons/lu";
import { GiMeat } from "react-icons/gi";  
//r-a:
import {useDispatch} from 'react-redux';
import { Additem } from '../redux toolkit/cartslice';
//import toastify:
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';  


const Cards = ({id,name,img,price,type}) => {
  let dispatch=useDispatch();   //r-b..Gets the ability to send actions..(bw component name and return.)
  return (
<div className="w-56 h-96 bg-amber-50 p-2 rounded-2xl flex flex-col justify-between 
                hover:bg-amber-100 
                hover:scale-105 
                transition 
                duration-300 
                ease-in-out 
                shadow-md hover:shadow-xl"> {/* a for hover effext */}

    <div className="h-40 w-full overflow-hidden"> {/*some via ai help-goal:thers no blank space left in card if img is small*/}
  <img src={img} className="h-full w-full object-cover rounded-t-2xl" />
</div>

    <div className='font-bold text-lg text-center mt-1'>
{name}
    </div>

<div className='flex justify-between items-center font-semibold  text-green-800 mt-1.5'>{/* div alpha: containing Rs,icon and veg */}
    <div>
Rs {price}/-
    </div>
<div className='flex items-center gap-1.5'>{/* div beta: containing icon+veg */}
    <div>
    {type==="veg"?<LuVegan/>:<GiMeat/>} {/* simple logic,whether to show which icon.. */}
    </div>
    <div>
 {type==="veg"?<p>Veg</p>:<p>Non-veg</p>}
    </div>
</div>  {/* div beta:end */}
</div>  {/* div alpha: end */}

{/* r-c */}
<div>
   
  <button 
            onClick={() => {
                dispatch(Additem({   //will send this data to cart icon/sidebar div on clickin.
        id,
       name,   
       img,  
       price,
       quantity: 1//defined dynamically
            }));
           toast.success("item added!");} }
            className='bg-green-500 text-white p-2 rounded-lg text-sm hover:bg-green-600 cursor-pointer'   >
            Add to cart
        </button>
  </div>
  </div>
  )}
export default Cards