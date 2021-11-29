import Superhero from "./Superhero"

const SearchGrid = ({character, miHeroe, setMiHeroe, miArreglo, setMiArreglo}) => {
    return (
        <div className="container px-3">
            <div className="row row-cols-md-3 g-4 p-3">
                {character.map((character, index) => {
                    return (
                        <div>
                            <Superhero key = {index} character = {character} miHeroe={miHeroe} setMiHeroe={setMiHeroe} miArreglo={miArreglo} setMiArreglo={setMiArreglo}/>
                        </div>    
                    )
                })}  
            </div>                  
        </div> 
    )
}

export default SearchGrid