//redux-3=>cards.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usercontext from './context/usercontext.jsx'
//for redux:
import {Provider} from 'react-redux'; //r-a
import { store } from './redux toolkit/store.js'; //r-b

createRoot(document.getElementById('root')).render(
<Provider store={store}>  {/* r-c */}

  <Usercontext>
    <App />
  </Usercontext>

  </Provider>
)

// <Usercontext> wraps the App component with Usercontext, allowing App and all its child components to access the input state globally.