import stellarBurger from '../../image/Stellar-Burger.png';
import aimTraining from '../../image/Aim-Training.png';
import Dog from '../../image/Dog.png';
import mercedesBenz from '../../image/Mercedes-Benz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import './MainPortfolio.scss'
import { FC } from 'react';


const MainPortfolio: FC = () => {
   return (
      <section className="card-section" id="portfolio">
         <div className="card-content">
            <div className="card-subtitle">MY RECENT WORK</div>
            <div className="conteiner portfolio__conteiner">
               <article className="portfolio__item">
                  <div className="portfolio__item-image">
                     <img src={stellarBurger} alt="" />
                  </div>
                  <h3>Космическая бургерная</h3>
                  <div className="portfolio__item-cta">
                     <a href="https://github.com/NenevAleksey/Stellar-Burger" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                        GitHub
                     </a>
                  </div>
                  <a href="https://nenevaleksey.github.io/Stellar-Burger/" className="btn" target="_blank">Live Demo</a>
               </article>

               <article className="portfolio__item">
                  <div className="portfolio__item-image">
                     <img src={mercedesBenz} alt="" />
                  </div>
                  <h3>Сайт автомобиля бренда Mercedes-Benz</h3>
                  <div className="portfolio__item-cta">
                     <a href="https://github.com/NenevAleksey/Mercedes-Benz" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                        GitHub
                     </a>
                  </div>
                  <a href="https://nenevaleksey.github.io/Mercedes-Benz/" className="btn" target="_blank">Live Demo</a>
               </article>

               <article className="portfolio__item">
                  <div className="portfolio__item-image">
                     <img src={Dog} alt="" />
                  </div>
                  <h3>Галерея фотографий собак</h3>
                  <div className="portfolio__item-cta">
                     <a href="https://github.com/NenevAleksey/Photos-of-dogs" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                        GitHub
                     </a>
                  </div>
                  <a href="https://NenevAleksey.github.io/Photos-of-dogs/" className="btn" target="_blank">Live Demo</a>
               </article>

               <article className="portfolio__item">
                  <div className="portfolio__item-image">
                     <img src={aimTraining} alt="" />
                  </div>
                  <h3>Игра для тернировки Аима</h3>
                  <div className="portfolio__item-cta">
                     <a href="https://github.com/NenevAleksey/Aim-Game" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                        GitHub
                     </a>
                  </div>
                  <a href="https://NenevAleksey.github.io/Aim-Game/" className="btn" target="_blank">Live Demo</a>
               </article>
            </div>
         </div>
      </section>
   )
}

export default MainPortfolio;