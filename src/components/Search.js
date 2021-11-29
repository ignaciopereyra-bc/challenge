import React from "react"
import axios from "axios"

import { Formik, Form, Field } from "formik"
import { useState, useEffect} from "react"

import SearchGrid from "./SearchGrid"
import MyTeam from './MyTeam'

const Search = ({miHeroe, setMiHeroe, miArreglo, setMiArreglo}) => {

    const [result, setResult] = useState([])
    
    return (
        <div>
            <Formik
                initialValues={{
                    nombre: "",
                }}

                onSubmit = { async (values) => {
                    const petition = await axios.get(`https://superheroapi.com/api.php/10224048626957052/search/${values.nombre}`)
                    setResult(petition.data.results)
                    /* setMiHeroe(petition.data.results) */
                    console.log(petition.data.results)
                }}
            >
                {(values) => (
                    <Form>
                        <h2>Search a superhero</h2>
                        <div>
                            <Field name="nombre" value={values.nombre} style={{ margin: "10px" }}/>
                            <button type="submit" className="btn btn-light">Search</button> 
                        </div>
                        <br />
                        {result !==[] ? <SearchGrid character = {result}  miHeroe={miHeroe} setMiHeroe={setMiHeroe} miArreglo={miArreglo} setMiArreglo={setMiArreglo}/> : null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Search