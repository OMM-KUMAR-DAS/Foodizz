
// import React from 'react'
// import { useState } from 'react'
// import { toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Form from 'react-bootstrap/Form';

// const Admin = () => {
  
//   const[addfood,seta]=useState({image:"",title:"", des:"" ,price:"",category:"",choice:""})
  
  

// function handleuser(event)
// {
//   seta((prev)=>(
//     {
//        ...prev,[event.target.name]:event.target.value
//     }))
// }



// function give(event)
// {
//   event.preventDefault()
//   // console.log("hi")
//   toast.success(`Item added`, {
//     position: toast.POSITION.TOP_CENTER
//   });
  
//   fetch('http://localhost:8000/api/v2/addfood',{

//     method:"POST",
   
//     headers:{
//       "Content-Type":"application/json",
//     },
      
//       body:JSON.stringify({
        
//         image:addfood.image,
//         title:addfood.title,
//         des:addfood.des,
//         category:addfood.category,
//         choice:addfood.choice,
//         price:addfood.price

//       }),
      
       
     

      

//   })

// }

//   return (
//     <div className='forr'>
//         <div className="air">
//           <form onSubmit={give} className='form'>
                
//                 <label>

//                             <p>Add image<sup>*</sup></p>

//                             {/* <input

//                                         required
//                                         type="text"
//                                         name="image"
//                                         value={addfood.image}
//                                         onChange={handleuser}
//                                         // className="in"
//                             /> */}


//                               <Form.Control
//                                   type="text"
//                                   size="sm"
//                                   name="image"
//                                   value={addfood.image}
//                                   onChange={handleuser}
                                  
                                  
//                             />


  
//                 </label>

//                 <br></br>


//                 <label>

//                             <p>Add Dish<sup>*</sup></p>
                              
//                             {/* <input

//                                         required
//                                         type="text"
//                                         name="title"
//                                         value={addfood.title}
//                                         onChange={handleuser}
//                                         // className="in"
//                                         placeholder="Give title"
                            
//                             /> */}


//                               <Form.Control
//                                     type="text"
                                   
//                                     size="sm"
//                                     name="title"
//                                     value={addfood.title}
//                                     onChange={handleuser}
                                    
//                                     placeholder="give food title"
//                             />
  
//                 </label>
                 
//                 <br></br>

//                 <label>

//                             <p>Description:<sup>*</sup></p>
                              
//                             {/* <input

//                                         required
//                                         type="text"
//                                         name="des"
//                                         value={addfood.des}
//                                         onChange={handleuser}
//                                         // className="in"
//                                         placeholder="Give description"
                            
//                             /> */}

                  
//                             <Form.Control as="textarea" 
//                              name="des"
//                              value={addfood.des}
//                              onChange={handleuser}
                             
//                              placeholder="give food description"/>
  
//                 </label>

//                 <br></br>

//                 <label>

//                             <p>Price:<sup>*</sup></p>
                              
//                             {/* <input

//                                         required
//                                         type="number"
//                                         name="price"
//                                         value={addfood.price}
//                                         onChange={handleuser}
//                                         // className="in"
                                        
                            
//                             /> */}


//                              <Form.Control
//                               type="number"
                              
//                               size="sm"
//                               name="price"
//                               value={addfood.price}
//                               onChange={handleuser}
                              
//                               placeholder="give price"
//                             />
  
//                 </label>
                   
//                 <br></br>

//                  <label>

//                             <p>Category:<sup>*</sup></p>
                              
//                             {/* <input

//                                         required
//                                         type="text"
//                                         name="category"
//                                         value={addfood.category}
//                                         onChange={handleuser}
//                                         // className="in"
                                        
                            
//                             /> */}


//                              <Form.Control
//                                     type="text"
                                    
//                                     size="sm"
//                                     name="category"
//                                     value={addfood.category}
//                                     onChange={handleuser}
                                    
//                             />
  
//                 </label>
                   
//                 <br></br>
//                 <label>

//                             <p>Choice:<sup>*</sup></p>
                              
//                             {/* <input

//                                         required
//                                         type="text"
//                                         name="choice"
//                                         value={addfood.choice}
//                                         onChange={handleuser}
//                                         // className="in"
                                        
                            
//                             /> */}


//                              <Form.Control
//                                       type="text"
                                      
//                                       size="sm"
//                                       name="choice"
//                                       value={addfood.choice}
//                                       onChange={handleuser}
                                      
                                     
//                             />
  
//                 </label>

//                 <br></br>
//                 <br></br>
//                 <br></br>

//                 <button className='bn'>Add Food</button>

//                  <br></br>
//                  <br></br>
                 
                


//           </form>
//       </div>    
//     </div>
//   )
// }


// export default Admin