import "./Contact.css"
import phone from '../../assets/images/phone.svg'
import email from '../../assets/images/email.svg'
import clock2 from '../../assets/images/clock-2.svg'

function Contact() {
  return (
    <div className='Contact'>
      <div className="row">
        <div className="box py">
          <div className="h1">Contact Us</div>
          <div className="info ">
            <div className="line">
              <img src={phone} alt="phone" />
              <div>
                <h4>Call Us : </h4>
                <p>(+20) 1556158856</p>
              </div>
            </div>
            <div className="line">
              <img src={email} alt="email" />
              <div>
                <h4>E-mail : </h4>
                <p>mohamedelsaidmedo192003@gmail.com</p>
              </div>
            </div>
            <div className="line">
              <img src={clock2} alt="clock2" />
              <div>
                <h4>Working Hours : </h4>
                <p>Sun-Wen (3.00pm - 6.00pm) </p>
              </div>
            </div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292974.7107268395!2d36.170418443602955!3d26.807402386984574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2z2YXYtdix!5e0!3m2!1sar!2seg!4v1780732401687!5m2!1sar!2seg"></iframe>
      </div>
    </div>
  )
}

export default Contact