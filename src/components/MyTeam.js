import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyTeam = ({ miHeroe, setMiHeroe, miArreglo, setMiArreglo }) => {
  const navigate = useNavigate();

  const [state, setState] = useState([]);
  
  const [allFavorite, setAllFavorite] = React.useState(
    []
  );

  const deleteFavorite = (character) => {
    let newFavorite = allFavorite.filter(
      (favorite) => favorite.id !== character.id
    );
    localStorage.setItem("myteam", JSON.stringify(newFavorite));
    setAllFavorite(newFavorite);
    
    setMiHeroe(newFavorite);
  };


  const suma = (ns) => {
    let acumulado = 0;
    for (let i = 0; i < ns.length; i++) {
      acumulado += ns[i];
    }
    return acumulado;
    console.log(acumulado);
  };

  

  return (
    <div>
      <h2>My Team</h2>

      <div className="container px-3">
        <div className="row">
          <div className="col-4"></div>
        </div>
        <div className="row row-cols-md-3 g-4 p-3 d-flex justify-content-evenly">
          {miArreglo.length === 0 ? (
            <h3>Theres is no team</h3>
          ) : (
            miHeroe.map((characte) => (
              <>
                <div className="card mb-3 " style={{ width: "350px" }}>
                  <div className="row g-0">
                    <div className="col-md-7">
                      <img
                        src={characte.image.url}
                        className="img-fluid rounded-start"
                        alt={characte.name}
                      />
                      <h5 className="card-title">{characte.name}</h5>
                    </div>
                    <div className="col-md-5">
                      <div className="card-body" style={{ fontSize: "14px" }}>
                        <h6>Powerstats:</h6>
                        <p className="card-text">
                          Combat: {characte.powerstats.combat}
                        </p>
                        <p className="card-text">
                          Durability: {characte.powerstats.durability}
                        </p>
                        <p className="card-text">
                          Intelligence: {characte.powerstats.intelligence}
                        </p>
                        <p className="card-text">
                          Power: {characte.powerstats.power}
                        </p>
                        <p className="card-text">
                          Speed: {characte.powerstats.speed}
                        </p>
                        <p className="card-text">
                          Strength: {characte.powerstats.strength}
                        </p>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-evenly">
                      <button
                        className="btn btn-primary"
                        onClick={() => deleteFavorite(characte)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/details")}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
