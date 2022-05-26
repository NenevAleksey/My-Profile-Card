import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

const MainContact: FC = () => {
   return (
      <div className="card-section" id="contact">
         <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
               <div className="card-contact">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Россиия, Омск
               </div>
               <div className="card-contact">
                  <FontAwesomeIcon icon={faPhone} />
                  +7 (913) 973-1416
               </div>
               <div className="card-contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  av.nenev@yandex.ru
               </div>
               <p>
                  <a href="mailto:vlad@htmlbook.ru" className="btn">WORK TOGETHER</a>
               </p>
            </div>
         </div>
      </div>
   )
}

export default MainContact;