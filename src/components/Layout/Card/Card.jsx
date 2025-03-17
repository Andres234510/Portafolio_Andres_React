import '../Card/card.css'
export const Card = ({}) =>{
    return (

        <div className="card">
        <div className="card-image">
          <img src="../src/assets/images/icon/python.png" alt="python"/>
        </div>
        <div className='card-content'>
        <h3 className="card-title">Python</h3>
        <div className='progress-container'>
          <div class="progress">
            <div class="progress-bar">
                <span class="progress-bar-text">60%</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}