import React, { useEffect, useState } from "react"
import CardList from "../../components/CardList"
import SearchBox from "../../components/SearchBox"
const API = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
  const [monster, setMonster] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState("")

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

  const filteredMonster=monster.filter(mnst=>mnst.name.toLowerCase().includes(searchInput.toLowerCase()))
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="app">
      <h1>MONSTER</h1>
     <SearchBox placeHolder="search monster" handleChange={(e)=>setSearchInput(e.target.value)}/>
      <CardList monster={filteredMonster}/>
      </div>
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
