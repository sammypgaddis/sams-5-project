import React,{useEffect,useState} from 'react'
import WaterBottleList from './WaterBottleList'
import NavLogOut from './NavLogOut'

const Home = ({customer, setCustomer}) => {

  const [waterBottle,setWaterbottle]=useState([])
  // console.log(waterBottle)
  

  useEffect(() => {
    fetch('/products')
    .then(r => r.json())
    // .then(console.log)
    .then(waterData => {
      setWaterbottle(waterData)

    })
  
  },[])
  // console.log(waterBottle)

  return (
    <div>
      <NavLogOut customer={customer}/>

      <div>
        hello world
        <WaterBottleList waterBottle={waterBottle}/>
      </div>
    </div>
  )
}

export default Home
