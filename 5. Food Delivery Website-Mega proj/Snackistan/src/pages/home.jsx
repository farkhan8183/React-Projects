//redux 6=>cart-card.jsx
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import categories from '../categories'
import Cards from '../components/cards'
import { food_items } from '../food'
import { datacontext } from '../context/usercontext'
import Usercontext from '../context/usercontext';
import { IoClose } from 'react-icons/io5';
import Cardc from '../components/cart-card'
import { useSelector } from 'react-redux' //r-a

//import toastify:
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';  

const Home = () => {

  /* Logic for displaying dishes/cards according to category selected: */
 // const[cate,setcate]=useState(food_items)        =>cut to usercontext..

 let{cate,setcate}=useContext(datacontext); 

function arrange(category){
  if(category==="All"){
    setcate(food_items);
  }
  else{
    let fil=food_items.filter((item)=>{
      return category===item.food_category;
    })
 setcate(fil);
  }
}


 let{showcart,setshowcart}=useContext(datacontext); //imported show cart  (S-2)*/)
 console.log("showcart",showcart); //for checking if show cart is working or not

    //-------------//
    /* see this part in sidevar div. */
  let items=useSelector(state=>state.cart); //(r-b)...will use useSelector to "display"..
//here we will do calculations for cart items,first of all is subtotal that is for which we ll simply add all items of array i.e item.price..   

//note: we mostly use reduce fucntion to add items of array.
let sub=items.reduce((subt,item)=>{return subt+item.price*item.quantity},0); //this will have accumulator(subt) n current item. acc with intial value as 0,it wil update on each iteeration n wil give subttoal
console.log("subtotoal is :",sub)  //to test
//tax is 5 percent of subtotal:
let tax= sub*0.5/100;
//delivery fee is 100 rs.
let fee=100;
//total is grand total:
let total=Math.floor(sub+tax+fee) //math.floor to avoid point values
console.log("total:",total);

function place(){
  toast.success("Order placed successfully!");
}
  return (
                                                          /* Start.. */


    <div className='bg-slate-400 w-full min-h-screen'>
{/* Navgation bar... */}
      <Navbar/>
{/* Categories section */}
<div className='flex justify-center flex-wrap gap-6 my-3.5 '>   {/* flex-wrap: important for responsivness */}
{
categories.map((item)=>{  //see categoies.jsx in src.
return(
  <div key={item.id} className='bg-amber-50 p-3.5 rounded-4xl flex flex-col items-center gap-1 cursor-pointer hover:bg-yellow-300 transition-all duration-700 ' onClick={()=>arrange(item.name)}>
   <p className='text-5xl text-green-700'>{item.image}</p> 
    <p className='text-3xl text-red-950 font-bold'> {item.name}</p> 
  </div>
)
})
}
</div>
{/* Cards:  */}
{cate.length>1?<> {/* run this fragmanet only if it has cards else,show:"no dishes found." */}

<div className='flex flex-wrap justify-between px-7 md:px-12 my-7 gap-5 '>
{
  cate.map((item)=>{
return(

<Cards key={item.id} id={item.id} name={item.food_name} img={item.food_image} price={item.price} type={item.food_type}/>

)
  }
  )
}
</div>
</>:<div className='flex justify-center items-center h-[300px] text-2xl font-bold text-gray-600 animate-pulse'>
  No dish found
  </div>}
{/* NOW we need to edit categroies in way it shows only those being selected */} 
{/* 
  Logic Explanation:

  1. First, create a state variable (`cate`) that will store the food items to be displayed on the UI. 
  Initially, this state will contain all the items from `food_items`, meaning all cards will be shown on the screen.

  2. When the user clicks on a category (like "All", "Breakfast", etc.), we need to trigger a function that will handle this click event.
   The category name that the user clicks on will be passed to the function.

  3. Inside the function, check if the category selected is "All". 
  If it's "All", we just display all food items by setting the `cate` state back to the full list (`food_items`).

  4. If the selected category is not "All", we filter the `food_items` to only show the cards that belong to the selected category.
  (by makin sure food_items category type is same as passed categoy name on click).
  the `setcate` function will then update the displayed cards with this filtered list.
*/}
{/* //////////////////////// */}

{/* Working Search Bar
          NOTE:  FUNDAMENTAL POINT TO REMMEBER: FOR WORKING SEARCH BAR, food_items(cards info) and input ARE MUST.

now our goal is to make search bar working. for that purpose,we first of all will create a context due to which typing anyhting(as input)will effect
all compnenets of our project rather than only nav bar.
we created usercontext.js n made it parent of our project=> such that its data (i.e; input written in search bar) is accessible by all components(Childs).
Made usercontext parent of our App in main.jsx .

but in navbar, we will need info about fooditems/cards too for search right? so we need to incldue that too in our navbar.jsx. 
for that just cut n paste the cate state variable to our usercontext from home.jsx,so it can be accessible by all components in our proj(including home n navbar).
thhen we ll access this cate(fooditems/cards) in our home n navbar via usecontext.

in navbar, now set logic that on every change in input will result in display of cards on ui whose names match with the input value(i.e search keywords)
*/}
{/*   ////////////////// */}

          {/* Creating Cart Section: */}

{/* cart */}
<div className={`h-full w-[30%] bg-amber-50 fixed top-0 right-0 shadow-2xl ${showcart?"translate-x-0":"translate-x-full"} transition-all duration-500 bg-amber-100 overflow-auto         `}> {/*fixed: keep fixed on scrollin */} {/* imp: overflow auto: we can scroll the side bar. */}

 <header className='flex justify-between p-4 text-green-800 font-semibold text-[19px]'>
  <p>Order items</p>
  <IoClose className='cursor-pointer hover:text-[21px] font-bold'  onClick={()=>setshowcart(false)}/>
 </header>

<div className='flex flex-col gap-5 hover:gap-6 transition-all duration-300'>
    {items.map((item) => (
      <Cardc
    key={item.id}
    id={item.id} //id is a prop here.
    name={item.name} 
    img={item.img} 
    price={item.price} 
    quantity={item.quantity}
      />
    ))}
</div>

{/* /*cart items calculation  */} 

{items.length>0?  //show below fragment only if array has ateast one item added..
<>
<div className='mt-7 border-t-[1.5px] border-gray-300 border-opacity-80 w-4/5 mx-auto '>
{/* subtotal */}
  <div className='flex justify-between py-2'>
    <span className='ml-10 font-semibold'>Subtotal</span>
    <span className='font-semibold text-green-900 pr-10'>Rs {sub}/-</span>
  </div>
{/* delivery fee */}
  <div className='flex justify-between py-2'>
    <span className='ml-10 font-semibold'>Delivery fee</span>
    <span className='font-semibold text-green-900 pr-10'>Rs {fee}/-</span>
  </div>
{/* taxes */}
  <div className='flex justify-between py-2'>
    <span className='ml-10 font-semibold'>Taxes</span>
    <span className='font-semibold text-green-900 pr-10'>Rs {tax} /-</span>
  </div>

</div>
{/* total */}
<div className='mt-7 py-2 border-t-[1.5px] border-gray-300 border-opacity-80 w-4/5 mx-auto flex justify-between  '>
 <span className="font-semibold text-lg">Total</span>
  <span className="font-bold text-green-900 text-lg"><span>Rs</span><span className='ml-1'> {total}</span> /-</span>
</div>
<button onClick={place} className='bg-green-500 w-[65%] mt-6 mb-5 ml-[85px] h-[30px] font-semibold text-white p-2 rounded-lg text-sm hover:bg-green-600 hover:font-bold cursor-pointer'>Place Order</button>
</>:<div className='flex justify-center items-center h-[200px] text-gray-500 text-xl font-semibold'>
Cart is Empty
  </div>}
</div> 

{/*now used redux(helps in avoiding prop drilling=>useContext modern alternate) for add to cart logic.(see redux toolkit.)*/}
{/* r-c */}
  
{/* So i was being stuck in an issue for like hours.it was like when i try to delete the current cart card in sidebar div ,it rahter
 deletes all the cards in sidebar div. the whole issue was caused by 'id' which that remove item reducer was unabel to access. so i
  fugred out where did id actually come from. it start from like food.js file in which we firstly added the food items to cards n then
accessed them in home.jsx using props,so basiclaly the issue was here, whenn we r sending props from cards to home we were not really
sending the id as props but  rahter only the "key={item.id}" while cards.jsx(props aceptor) was expecting 'id' so we just added 
an additonal line in our home.jsx while sending props to cards .jsx i.e "id={item.id}" that makes sure id is bieng properly
passed ot card as a prop.*/}




 </div>
  )
}

export default Home
