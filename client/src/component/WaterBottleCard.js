import React from 'react'

const WaterBottleCard = ({item}) => {
    // console.log(item)
  return (
    <div className="waterBottleCard">
      <li className="front-card">
        <h4>{item.item_name}</h4>
        <img className="images"src={item.image} alt={"water bottle"} />
        <p>Price:$ {item.price}</p>
      </li>
      {/* <li className="back-card">
        <p >{item.description}</p>
      </li> */}
    </div>
  )
}

export default WaterBottleCard
