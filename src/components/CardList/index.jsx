import React from "react"
import Card from "../Card"
import "./style.css"
const CardList = ({ monster }) => {
  return (
    <div className='card-list'>
      {monster.map((mns) => (
        <Card key={mns.id} mnst={mns} />
      ))}
    </div>
  )
}
export default CardList
