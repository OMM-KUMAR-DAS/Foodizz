import {  Routes,Route } from 'react-router-dom';


import Signup from './components/Signup'

import Login from './components/Login'


import Authorization from './components/Authorization'

import Admin from './components/Admin'

import Student from './components/Student'

import Cart from './components/Cart'

import Checkout from './components/Checkout'


import Paymethods from './components/Paymethods';



import SavedAdress from './components/SavedAdress';

import Upi from './components/Upi';

import Credit from './components/Credit';


import Myorder from './components/Myorder';

import Welcome from './components/Welcome';

import { ToastContainer } from 'react-toastify';

import Orderconfirmation from './components/Orderconfirmation';
 
import './App.css';


import Internalservererror from './components/Internalservererror';
import Notfound from './components/Notfound';



function App() {
  return (
    
    <div>

         <Routes>

               <Route path="*" element={<Notfound/>}></Route>
               
               <Route path='/' element={<Welcome/>}></Route>
               
               <Route path='/sign' element={<Signup/>}></Route>

               <Route path='/login' element={<Login/>}></Route>

               <Route path='/auth' element={<Authorization/>}></Route>

               <Route path='/admin' element={<Admin/>}></Route>

               <Route path='/student' element={<Student/>}></Route>

               <Route path='/cart' element={<Cart/>}></Route>

               <Route path='/check' element={<Checkout/>}></Route>
              
               <Route path='/paymethods' element={<Paymethods/>}></Route>

               <Route path='/order_confirm' element={<Orderconfirmation/>}></Route>

               <Route path='/upi' element={<Upi/>}></Route>

               <Route path='/credit' element={<Credit/>}></Route>

               <Route path='/order' element={<Myorder/>}></Route>

               

               <Route path='/internal_server' element={<Internalservererror/>}></Route>


               <Route path='/saveaddress' element={<SavedAdress/>}></Route>


               
         </Routes>

         <ToastContainer/>
      
    </div>
  );
}

export default App;
