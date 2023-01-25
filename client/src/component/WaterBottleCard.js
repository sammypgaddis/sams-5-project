import React from 'react'

const WaterBottleCard = ({item}) => {
    // console.log(item)

    const handleCLick =() => {
      fetch('/orders',{
        method: 'POST',
      })
    }

  return (
    <div className="waterBottleCard">
        <h4>{item.item_name}</h4>
        <img className="images"src={item.image} alt={"water bottle"} />
        <p>Price:$ {item.price}</p>
        <button onClick={handleCLick}>buy bottle</button>
      {/* <li className="back-card">
        <p >{item.description}</p>
      </li> */}
    </div>
  )
}

export default WaterBottleCard
