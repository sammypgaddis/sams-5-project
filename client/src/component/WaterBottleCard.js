// import React from 'react'

// const WaterBottleCard = ({item}) => {
//     // console.log(item)

//     const handleCLick =() => {
//       fetch('/orders',{
//         method: 'POST',
//       })
//     }

//   return (
//     <div className="waterBottleCard">
//         <h4>{item.item_name}</h4>
//         <img className="images"src={item.image} alt={"water bottle"} />
//         <p>Price:$ {item.price}</p>
//         <button onClick={handleCLick}>buy bottle</button>
//     </div>
//   )
// }

// export default WaterBottleCard

import React, { useState } from 'react';

const WaterBottleCard = ({ item }) => {
  const [selectedBottle, setSelectedBottle] = useState(null);

  const handleClick = () => {
    setSelectedBottle(item);
    fetch('/orders', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  };

  return (
    <div className="waterBottleCard">
      <h4>{item.item_name}</h4>
      <img className="images" src={item.image} alt={"water bottle"} />
      <p>Price:$ {item.price}</p>
      <button onClick={handleClick}>buy bottle</button>
    </div>
  );
};

export default WaterBottleCard;