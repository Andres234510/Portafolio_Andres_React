export const Card_container = ({title = 'Portafolio sin React', image = 'src/assets/images/Logos/fenix.png', enlace = 'https://portafolio-andres-felipe-gutierrez-vera.vercel.app/'}) =>{
    return(
        <div className="card-container">
        <div className="flip-card">
          <div className="card-front">
            <img src={image} alt={title} className="card-image" />
            <div className="card-front-content">
              <h3 className="card-title">{title}</h3>
            </div>
          </div>
          <div className="card-back">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">
              Esta es una descripción detallada de la tarjeta. Aquí puedes incluir toda la información que desees mostrar cuando el usuario pase el cursor por encima de la tarjeta.
            </p>
            <a href={enlace} className="card-link">Ver más</a>
          </div>
        </div>
      </div>
    )
}