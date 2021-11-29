import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import Navbar from './Navbar'
import Search from './Search'
import MyTeam from './MyTeam'
import SearchGrid from './SearchGrid'

const Home = () => {
  
  const [miHeroe, setMiHeroe]=useState([])
  const [miArreglo, setMiArreglo]=useState([])
  
  const navigate = useNavigate()

  const [state, setState] = useState(
    JSON.parse(localStorage.getItem("myteam"))
  )

  useEffect(() => {
    document.title = "Superhero"
    !localStorage.token && navigate("/")
  })
 
  return (
      <div className="App">
        <Navbar />
        <br />
        <MyTeam setMiHeroe={setMiHeroe} miHeroe={miHeroe} miArreglo={miArreglo} setMiArreglo={setMiArreglo}/>
        {/* {state == "[]" || !state ? null : <MyTeam />} */}
        <br />
        <Search miHeroe={miHeroe} setMiHeroe={setMiHeroe} miArreglo={miArreglo} setMiArreglo={setMiArreglo}/> 

      </div>
    );
}
  
export default Home;
