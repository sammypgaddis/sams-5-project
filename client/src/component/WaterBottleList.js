import React from 'react'
import WaterBottleCard from './WaterBottleCard'

const WaterBottleList = ({waterBottle}) => {

    const listBottle = waterBottle.map((eachBottle)=>{
        return(
            <WaterBottleCard key={eachBottle.id} item={eachBottle}/>
        )
    })

  return (
    <div>
      {listBottle}
    </div>
  )
}

export default WaterBottleList
