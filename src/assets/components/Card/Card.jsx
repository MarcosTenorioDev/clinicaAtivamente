import '../Card/Card.css'

const Card = ({imgSrc, title, content}) =>{
    return(
        <div className="card">
            <div className="cardTitleContainer">
                <img src={imgSrc} alt="" className="cardImg"/>
                <h2 className="cardTitle">{title}</h2>
            </div>
            <p className="cardContent">{content}</p>
        </div>
    )
}

export default Card;