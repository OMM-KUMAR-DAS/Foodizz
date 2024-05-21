import React from 'react'
import { useState } from 'react';
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Paymethods = () => {

  const navigate= useNavigate()
  // const dispatch= useDispatch()
  const [selectedOption, setSelectedOption] = useState('')
  const content= useSelector((state)=>state.selected)
  const ele= useSelector((state)=>state.tok)
  // console.log(content)
  
  let sum=0
  for(let i=0;i<content.length;i++)
  {
      sum+=content[i].price
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function launch(){

         if(selectedOption==='Cash')
         {


          
             try{

              fetch('http://localhost:8000/api/v2/order',{
                 
                        method:'POST',

                        headers:{
                          'Content-Type':"application/json",
                        },

                        body:JSON.stringify({
                
                          email:ele[0].user.email,
                          arr:content,
                          
                      })


              })
              .then(response=>response.json())
              .then(data=>{
                console.log(data) 
                if(data.success==="false")
                  {
                    toast.info(`${data.message}`, {
                      position: toast.BOTTOM_RIGHT
                    });
                    navigate('/internal_server')
                  } 
                  else{
                    navigate('/order_confirm')
                  }            
              })
              
             


             }catch(err)
             {
              console.log("error occured")
             
             }
          }   
          
       

        else if(selectedOption==='Card')
        {
              navigate('/credit')
        }
        else{
              navigate('/upi')
        }
}

  return (
    <div className='pay'>
        <h3>Payment options available</h3>
            <div className='lis'>
                <label>
                        <input
                          type="radio"
                          value="UPI"
                          checked={selectedOption === 'UPI'}
                          onChange={handleOptionChange}
                        />
                        <strong>UPI</strong>
                        <p>Pay by any UPI app</p>
                </label>
                
               

                <br></br>

                <label>
                        <input
                          type="radio"
                          value="Card"
                          checked={selectedOption === 'Card'}
                          onChange={handleOptionChange}
                        />
                        <strong>Credit/Debit/ATM card</strong>
                        <p>Add and secure your card as per RBI guidelines</p>
              </label>

              <br></br>

              <label>
                        <input
                          type="radio"
                          value="Cash"
                          checked={selectedOption === 'Cash'}
                          onChange={handleOptionChange}
                        />
                        <strong>Cash on delivery</strong>
                        {
                          selectedOption==='Cash'&&<p>Due to handling costs,a nominal fee of Rs5 will be charged</p>
                        }
                        
                        
              </label>
          </div>
      <hr className='hr1'></hr>

      <div className='lis_1'>

                    <h4>Price Details</h4>

                    <hr className='hr1'></hr>

                    <p>Price({content.length} item)</p>&#8377;
                    {
                      selectedOption==='Cash' ? sum+=5:sum
                    }

                    <br></br>

                    <p>Delivery Charges</p>
                    {
                      sum>=300 ? <p>Free</p>:<p>&#8377; 40</p>
                    }

                    <hr className='hr1'></hr>
                    
                    <p>Amount Payable</p>&#8377;{sum>=300?sum:sum+40}
      </div>              

        <hr className='hr1'></hr>
        <hr className='hr1'></hr>


      

     <hr className="hr1" />

      <div className='place'>
        <p>&#8377;{sum>=300?sum:sum+40}</p>
        <Button variant="warning" onClick={launch}>Place Order</Button>{' '}
      </div>
   

    </div>
  )
}

export default Paymethods