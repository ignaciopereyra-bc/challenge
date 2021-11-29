import React from "react"
import MyTeam from "./MyTeam"

import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"

const Superhero = ({character, miHeroe, setMiHeroe, miArreglo, setMiArreglo}) => {

    const navigate = useNavigate()

    const [select, setSelect] = React.useState(JSON.parse(localStorage.getItem("myteam")))
    const [pulsado, setPulsado] = useState(false)

    const handleMyteam = (character) => {
        const newSuperhero = [character]
        const myTeam = JSON.parse(localStorage.getItem("myteam"))
        if(!myTeam) {
            localStorage.setItem("myteam", JSON.stringify(newSuperhero))
            setMiHeroe(localStorage.setItem("myteam", JSON.stringify(newSuperhero)));
        } else {
            myTeam.push(character)
            localStorage.setItem("myteam", JSON.stringify(myTeam))
        }
        setMiArreglo([...miArreglo, character.id]);
        localStorage.setItem("miArreglo", JSON.stringify(miArreglo));

        setMiHeroe([...miHeroe, character]);
        localStorage.setItem("miHeroe", JSON.stringify(miHeroe));
    } 
    console.log("character"+character)
    console.log("character.id"+character.id)
    return (
        <div>
            <div className="card" style={{ width: '250px' }} >
                <img src={character.image.url}/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={() => 
                            handleMyteam(character)/* ,
                            navigate("/home") */
                        }
                    >
                        Add to my Team
                    </button>
                    {/* {pulsado ? (
                        <MyTeam />
                    ) : (
                        <h1>Adios</h1>
                    )} */}
                </div>
            </div>
            
        </div>
        
    )
}

export default Superhero