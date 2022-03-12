import React, { useEffect, useState } from "react"
import CardList from "../../components/CardList"

const API = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
  const [monster, setMonster] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(false)
      const response = await fetch(API)
      const jsonData = await response.json()
      setMonster(jsonData)
      setLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <CardList monster={monster}/>
    )
  }
  if(!loading){
    return(
      <div className="app">
        <h1>loading...</h1>
      </div>
    )
  }
}

export default Home
