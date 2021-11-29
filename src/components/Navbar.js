import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">   
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end aling-items-center">
                            <h1>SUPERHERO</h1>
                        </div>
                        <form className="d-flex">
                        {localStorage.token ? <button className="btn btn-dark" onClick={logout}>Logout</button> : null}
                        </form>
                    </div>
                </div>
            </nav>     
        </div>
    )
}

export default Navbar