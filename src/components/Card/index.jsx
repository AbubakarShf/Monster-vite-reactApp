import React from 'react'
import './style.css'
const Card = ({mnst}) => {
  return (
<React.Fragment>
    <div className="card-container">
    <img src={`https://robohash.org/${mnst.id}?set=set2&size=180x180`} alt="monster" />
        <h2>{mnst.name}</h2>
        <h3>{mnst.email}</h3>
    </div>
</React.Fragment>
  )
}

export default Card