import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import './MainContact.scss';
import { useAppSelector } from "../../hooks/hooks";


const MainContact: FC = () => {
   const { cardActive } = useAppSelector(state => state.activeSlice)

   return (
      <section className={cardActive === "contact" ? "card-section is-active" : "card-section"} id="contact">
         <div className="card-content">
            <div className="card-subtitle">CONTACT</div>
            <div className="card-contact-wrapper">
               <div className="card-contact">
                  <FontAwesomeIcon icon={faLocationDot} />
                  Россия, Омск
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
                  <a href="mailto:av.nenev@yandex.ru" className="btn">WORK TOGETHER</a>
               </p>
            </div>
         </div>
      </section>
   )
}

export default MainContact;