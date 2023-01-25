import React, {useState, useEffect} from 'react'
import WaterBottleCard from './WaterBottleCard'

const MyOrders = ({customer, setCustomer}) => {
    // console.log(waterBottle)
    

    const [customerOrders, setCustomerOrders]= useState([])
    console.log(customer)
    
    useEffect(() =>{
      fetch("/user_logged_in")
      .then (r => r.json())
      .then((user) => {
        // console.log(user)
        user.products ? setCustomerOrders(user.products) : setCustomerOrders()} )
      },[])

      function handleDelete(id){
          fetch(`/orders/${id}`,{
              method: 'DELETE'
          }) 
          .then (r => { 
            if (r.ok) {
            setCustomerOrders(customerOrders => customerOrders.filter(obj => obj.id != id))
          }})
      }
    const renderOrders = customerOrders.map(eachWaterBottleObj => {
            return(
                <div>
                    {/* <WaterBottleCard item={eachWaterBottleObj}/> */}
                    <li className="front-card">
                        <h4>{eachWaterBottleObj.item_name}</h4>
                        <img className="images"src={eachWaterBottleObj.image} alt={"water bottle"} />
                        <p>Price:$ {eachWaterBottleObj.price}</p>
                        <button onClick={()=>handleDelete(eachWaterBottleObj.id)} >delete bottle</button>
                        
                    </li>
                </div>
            )
        })


    
  return (
    <div>
        <h2>my orders</h2>
        {renderOrders}
    </div>
  )
}

export default MyOrders
