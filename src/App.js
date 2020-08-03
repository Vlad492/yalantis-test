import React from 'react';
import './App.css';
import Card from './components/card'
import Preloader from './components/preloader'
import{useState,useEffect} from 'react'


function App(){
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const [users,setUsers] = useState()
  const request = async()=>{
    try{
      let res = await fetch('https://yalantis-react-school-api.yalantis.com/api/task0/users').then((res) => res.json())
      setUsers(res)
    }catch(e){
      console.log(e)
    }
  }
useEffect(()=>{
  request()
},[])
useEffect(()=>{
  console.log(users)
},[users])

if (users) {
  return (
    <div className="App">
      <article>
        <h1>Test app</h1>
        {months.map((elem, index) => <Card month={elem} key={index} users={users.filter((user) => new Date(user.dob).getMonth() === index)} />)}
      </article>

    </div>
  )
} else {
  return (<Preloader />)
}
}



export default App; 