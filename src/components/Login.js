import { Form, Field, Formik, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import * as Yup from "yup"

import Navbar from "./Navbar"
import Background from "../images/Background.jpg"

const email = "challenge@alkemy.org"
const password = "react"
const Validate = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .matches(email, "Invalid e-mail"),
    password: Yup.string()
      .matches(password, "invalid password")
      .required("Required")
})
  
const Login = () => {

  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
            email: "",
            password: "",
        }}

        validationSchema={Validate}

        onSubmit = { async (values, {resetForm}) => {
            resetForm()                            
            const response = await axios.post('http://challenge-react.alkemy.org', {
                email: values.email,
                password: values.password
            })
            .then((response) => {
              if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data))
              }
              navigate("/home")
            })
        }}
      >

        {({ errors, values }) => (
          <Form>
            <br />
            <div className="col d-flex justify-content-center">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                      <Field 
                        name = "email" 
                        type = "email" 
                        className = "form-control"
                        value = {values.email}
                      />
                      <ErrorMessage name = "email" component = {() => (
                        <div>{errors.email}</div>
                        )}
                      />
                  </div>
                  <div>
                    <label htmlFor="password" className="form-label">password</label>
                    <Field 
                      name="password" 
                      type = "password" 
                      className = "form-control"
                      value = {values.password}
                    />
                    <ErrorMessage name = "password" component = {() => (
                        <div>{errors.password}</div>
                        )}
                    /> 
                  </div>
                  <br />  
                    <div>
                      <button type = "submit" className = "btn btn-primary">
                        Login
                      </button> 
                    </div>
                </div>
              </div>      
            </div>              
          </Form>
        )}
      </Formik>
      <div className="overlay" style={{background: `url(${Background})`}}/>
    </div>
  )
}

export default Login