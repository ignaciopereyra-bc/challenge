const Hero = props => {
    return (
        <div className="card" style={{ width: '18rem' }} >
            <img src={props.character.image.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.character.name}</h5>
                <a href="#" className="btn btn-primary">Add to my Team</a>
            </div>
        </div>
    )
}

export default Hero