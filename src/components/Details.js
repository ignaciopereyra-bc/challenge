import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Details = ({character}) => {

    const [state, setState] = useState(
        JSON.parse(localStorage.getItem("myteam"))
    )

    const navigate = useNavigate()

    return (
        <div>
            <br/>
            <button className="btn btn-primary" onClick={() => navigate("/home")}>
                    Go back
            </button>
            <div className="row row-cols-md-3 g-4 p-3 d-flex justify-content-evenly">
                {state.map((character) => {
                    return (
                        <div className="card mb-3" style={{width: "350px"}}>
                            <div className="row g-0">
                            <div className="col-md-7">
                                <img src={character.image.url} className="img-fluid rounded-start" alt={character.name}/>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body" style={{fontSize: "14px"}}>
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">Height: {character.appearance.height[1]}</p>
                                <p className="card-text">Weight: {character.appearance.weight[1]}</p>
                                {/* <p className="card-text">Eye color: {character.appearance.eye-color}</p>
                                <p className="card-text">Hair color: {character.appearance.hair-color}</p> */}
                                <p className="card-text">Aliases: {character.biography.aliases[0]}</p>
                                <p className="card-text">Place of work: {character.work.base}</p>
                                
                                </div>
                            </div>
                            </div>
                        </div>     
                    )
                })}
            </div> 
        </div>
    )
}

export default Details