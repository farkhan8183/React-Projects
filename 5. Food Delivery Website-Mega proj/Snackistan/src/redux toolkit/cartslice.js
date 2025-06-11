// @copilot-disable
//redux-2=>main.jsx
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({  //name of slice: cart-slice
  name: 'cart', //name of reducer
  initialState: [],      //initial state will be an empty array.
  reducers: {    
    Additem: (state, action) => {
        state.push(action.payload)
    },
 
 Removeitem: (state, action) => {
  return state.filter((item)=> item.id !== action.payload)  /*will return new array without the item
   to be removed.  i.e,will not include the item whose id matched with any existing id in cart.*/
//to remove items, we can add another reducer function here.
},

//(no numbering for this)
//here we will add the functionality of adding/removing qunaatity features:
/*logic is simple; whenever user will click on '+' of current item in state,its id will be sent here,n for item in
state with whom its id is equal,that item's quantity will simply be increased by 1.*/
//in cart-card.jsx, only send id's on click by usedispatch! 
IncreaseQ:(state,action) => {
  let exist=state.find((item=>item.id===action.payload))
  if(exist){
    exist.quantity+=1;
  }
},
DecreaseQ:(state,action) =>{
  let exist=state.find((item)=>item.id===action.payload)
  if(exist && exist.quantity>1){ //avoids negative numbers
    exist.quantity-=1;
  }
}
}
})
//after this,simply fo to home.jsx n update price calcualtion according to quantity,
// just multiply subtotal by quantity of current item.

export const { Additem,Removeitem,IncreaseQ,DecreaseQ } = cartSlice.actions 
export default cartSlice.reducer 



/*
Additem function:

state: Current cart array
state.push(): Directly modifies state (Redux Toolkit allows this)
action.payload: New item to add


*/