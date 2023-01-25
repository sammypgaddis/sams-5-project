import React,{useEffect,useState} from 'react'
import WaterBottleList from './WaterBottleList'
        
// import MyOrders from './MyOrders'


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

      <div>
        {/* <MyOrders customer={customer} setCustomer={setCustomer} /> */}
        <h2>All BOttles</h2>
        <WaterBottleList waterBottle={waterBottle}/>
        {/* <MyOrders waterBottle={waterBottle}/> */}
      </div>

    </div>
  )
}

export default Home
