import React from 'react'

const WaterBottleCard = ({item}) => {
  return (
    <div>
      <li>
        <h4>{item.item_name}</h4>
        <img src={item.image} alt={"water bottle image"} />
        <p>Price:$ {item.price}</p>
        <p>{item.description}</p>
      </li>
    </div>
  )
}

export default WaterBottleCard
