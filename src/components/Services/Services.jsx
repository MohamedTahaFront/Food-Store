import "./Services.css"
import transport from '../../assets/images/transport.svg'
import bag from '../../assets/images/bag.svg'
import usd from '../../assets/images/usd.svg'
function Services() {
  return (
    <div className='Services py'>
      <div className="container">
        <div className="h1">Our Services</div>
        <div className="row">
          <div className="card">
            <img src={transport} alt="transport" />
            <h4>Free Home Delivery</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure natus omnis expedita.</p>
            <button className="btn-dark">Read More</button>
          </div>
          <div className="card warning">
            <img src={bag} alt="bag" />
            <h4><span>30 Days Return</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure natus omnis expedita.</p>
            <button className="btn-warning">Read More</button>
          </div>
          <div className="card">
            <img src={usd} alt="usd" />
            <h4>Money Back Guarantee</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure natus omnis expedita.</p>
            <button className="btn-dark">Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services