import '../Card/card.css'
export const Card = ({imge = '../src/assets/images/icon/python.png', text ='Python', porcent='100%',  estilos='progress-bar-p' }) =>{
    return (

        <div className="card">
        <div className="card-image">
          <img src={imge} alt={text}/>
        </div>
        <div className='card-content'>
        <h3 className="card-title">{text}</h3>
        <div className='progress-container'>
          <div class="progress">
            <div class={estilos}>
                <span class="progress-bar-text">{porcent}</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}