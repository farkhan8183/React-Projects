//redux-1
import { configureStore } from '@reduxjs/toolkit'
import cartslice from './cartslice'

export const store = configureStore({
  reducer: {
    cart:cartslice  //this adds slice to store..its: name of slice reducer:name of slice.
  }
})


//(we use usedispatch to modify state, and useSelector to display state)
