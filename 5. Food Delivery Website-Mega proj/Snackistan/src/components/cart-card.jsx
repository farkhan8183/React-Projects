//redux-7
import React from 'react';
import image1 from '../assets/image1.avif'
import { MdDelete } from 'react-icons/md';
//r-a
import { useDispatch } from 'react-redux'; 
import { Removeitem } from '../redux toolkit/cartslice'; //r-c: import action to remove item from cart.
import { IncreaseQ } from '../redux toolkit/cartslice';
import { DecreaseQ } from '../redux toolkit/cartslice';

const  Cardc = ({id,name,img,price,quantity}) => {
  let dispatch = useDispatch(); //r-b.

  //yo funcccccccccccccccccccccccccccccccccccc..(for dispatch its highly recommended to always use fucntion outside reuturn)
  function handledel() {
    console.log("Item removed from cart with id:", id); //for debugging..
    dispatch(Removeitem(id)); //r-c: will remove item from cart.
  }
  function handleinc(){
    dispatch(IncreaseQ(id));
  }
  function handledec(){
    dispatch(DecreaseQ(id));
  }
  return (
    <div className='flex gap-4 justify-between items-center h-[120px] w-[95%] ml-6 p-3 rounded-xl shadow-2xl mt-3'>
      {/* Image Section */}
      <div className='flex justify-center items-center'>
        <img className='h-[100%] w-[160px] rounded-3xl shadow-md' src={img} alt="Food" />
      </div>

      {/* Soup Details Section */}
      <div className='flex flex-col justify-between gap-2.5 ml-2'>
        <div className='font-bold text-xl text-black-800'>
          {name}
        </div>

        {/* Quantity Controls */}
        {/* funncccccc */}
        <div className='flex gap-2 justify-between w-[80%] ml-3 rounded-2xl border-2 border-green-600 font-semibold py-2 px-4'>
          <button onClick={handledec} className='cursor-pointer text-lg text-green-600 hover:bg-amber-300 w-[30px] h-[30px] rounded-full flex justify-center items-center'>
            -
          </button>
          <span className='text-lg w-[40px] flex justify-center items-center'>
            {quantity}
          </span>
          <button onClick={handleinc} className='cursor-pointer text-lg text-green-600 hover:bg-amber-300 w-[30px] h-[30px] rounded-full flex justify-center items-center'>
            +
          </button>
        </div>
      </div>

      {/* Price and Delete Section */}
      <div className='p-3 rounded-xl flex flex-col justify-between items-center gap-2'>
        <div className='flex items-center gap-1 text-green-700 font-bold text-xl'>
          <span>Rs</span>
          <span>{price}</span>
          <span>/-</span>
        </div>
        {/* r-c */}
         {/*  yo funcccccccccccccccccccccccccccccccccccc */}
        <MdDelete onClick={handledel} className='text-[26px] text-red-700 cursor-pointer hover:scale-110 transition-transform' />
         
        
      </div>
    </div>
  )
}

export default Cardc      