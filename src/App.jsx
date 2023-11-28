import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Login'


function App() {

  


  const [user,setUser] = useState([{name:`leo`, age:4,email:`leo@gmail.com`,phone:99}])



  const createCard = (name,email,age,phone)=>{
    

    const newCard  = {
      
      name:`${name}`,
      age:`${age}`,
      email:`${email}`,
      phone:`${phone}`

    }
    setUser([...user,newCard])

    console.log(user)

  }


  return (
    <>
    <div className='container'>

    {
      user.map((item,key)=>{
        return(
          <>
          <div className='card'>
          <h1>Name:{item.name}</h1>
          <h2>age {item.age}</h2>
          <h3>email : {item.email}</h3>
          <h3>phone:{item.phone}</h3>
          </div>
          </>
        )
      })
    }
    
  

    </div>

     <Login createCard={createCard}/>
    </>
  )
}

export default App
