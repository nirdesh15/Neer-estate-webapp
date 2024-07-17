import './card.scss';
import { Link } from 'react-router-dom';


function Card({item}) {
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.images} alt="" /></Link>


      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="feature">
          <div className="features">
            <img src="/bed.png" alt="" />
            <span>{item.bedroom}    bedroom</span>
          </div>
          <div className="features">
            <img src="/bath.png" alt="" />
            <span>{item.bathroom}  bathroom</span>
          </div>
          </div>
          <div  className="icon">
          <div className="icons">
          <img src="/chat.png" alt="" />  
          </div>
          <div className="icons">
          <img src="/save.png" alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Card