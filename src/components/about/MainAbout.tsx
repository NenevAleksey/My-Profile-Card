import { faGithub, faTelegram, faYandexInternational } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import './MainAbout.scss'


const MainAbout:FC = () => {
   return (
      <section className="card-section is-active" id="about">
         <div className="card-content">
            <div className="card-subtitle">ABOUT</div>
            <p className="card-desc">25 лет. Активно изучаю Front-end. Стараюсь разрабатывать адаптивные, оптимизированные и эффективные веб-сайты.
            </p>
         </div>
         <div className="card-social">
            <a href="https://github.com/NenevAleksey" target="_blank">
               <FontAwesomeIcon className="svg-icon" icon={faGithub} />
            </a>
            <a href="" target="_blank">
               <FontAwesomeIcon className="svg-icon" icon={faTelegram} />
            </a>
            <a href="mailto:av.nenev@yandex.ru" target="_blank">
               <FontAwesomeIcon className="svg-icon" icon={faYandexInternational} />
            </a>
         </div>
      </section>
   )
}

export default MainAbout;