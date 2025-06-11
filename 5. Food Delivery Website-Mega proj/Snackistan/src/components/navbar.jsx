//redux 5
import React, { useContext, useState } from 'react';
import { MdFoodBank } from 'react-icons/md';  //install via: npm i react-icons
import { BiSearch } from 'react-icons/bi';
import { LuShoppingBag } from "react-icons/lu";
import { datacontext } from '../context/usercontext';
import { food_items } from '../food';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; //r-a

const Navbar = () => {

  let{input,setinput,cate,setcate}=useContext(datacontext); // access usecontext  for working search bar.(all required things for workin search bar)
   let{showcart,setshowcart}=useContext(datacontext); //imported show cart  (S-3 */)

useEffect(() => { 
 let searchlist= food_items.filter((item)=>item.food_name.includes(input)|| item.food_name.toLowerCase().includes(input));
  setcate(searchlist);
}, [input]) //useeffect will run on each change in input i.e setinput

let items=useSelector(state=>state.cart); //r-b...Gets cart items array

  return (
    <div className="w-full h-[80px] bg-white flex items-center justify-between px-5 md:px-8"> {/* its main nav bar..justify bw give it child equal spaces and arrange in way that first item left n  last is right of parent] */}
                                                                                                {/* responsivness in tailwind:for mobiles by default..note: if for e.g keepin it 100 percent for laptop/md screen,then almost 55 to 60 percent for android sc.. */}
      {/* Logo Icon */}
      <div className="flex items-center gap-2">
        <MdFoodBank className="text-green-600 text-4xl" />
        <h1 className="text-xl font-bold text-gray-800">Snackistan</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[215px] md:w-[400px] border-1">
        <BiSearch className="text-gray-500 text-xl mr-2" /><p className='mr-2 font-bold'> | </p>
        <input value={input} onChange={(e)=>setinput(e.target.value)} //value for input..
          type="text" placeholder="Search your dish..."className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* Cart Icon */}
      
      <div className="bg-green-100 p-3 rounded-full cursor-pointer hover:bg-green-300 " onClick={()=>setshowcart(true) }> 
       <span className=' text-green-900 absolute right-8 top-6 font-bold text-sm'>{items.length}</span> {/* r-c */}
        <LuShoppingBag   className='text-green-600 text-xl' />
      </div>
    </div>
  );
};

export default Navbar;
