import stellarBurger from '../../image/Stellar-Burger.png';
import aimTraining from '../../image/Aim-Training.png';
import Dog from '../../image/Dog.png';
import mercedesBenz from '../../image/Mercedes-Benz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrands, fa-github } from "@fortawesome/free-solid-svg-icons";


const MainPortfolio = () => {
   return (
      <section className="card-section" id="portfolio">
            <div className="card-content">
               <div className="card-subtitle">My Recent Work</div>
               <div className="conteiner portfolio__conteiner">
                  <article className="portfolio__item">
                     <div className="portfolio__item-image">
                        <img src={stellarBurger} alt="" />
                     </div>
                     <h3></h3>
                     <a href="https://github.com/NenevAleksey/Stellar-Burger" target="_blank">
                        <FontAwesomeIcon icon={faBrands faGithub} />
                        //изучи иконки
                     </a>
                     <a href="https://nenevaleksey.github.io/Stellar-Burger/" className="btn" target="_blank">Live Demo</a>
                  </article>

                  <article className="portfolio__item">
                     <div className="portfolio__item-image">
                        <img src={mercedesBenz} alt="" />
                     </div>
                     <h3></h3>
                     <a href="https://github.com/NenevAleksey/Mercedes-Benz" target="_blank">GitHub</a>
                     <a href="https://nenevaleksey.github.io/Mercedes-Benz/" className="btn" target="_blank">Live Demo</a>
                  </article>

                  <article className="portfolio__item">
                     <div className="portfolio__item-image">
                        <img src={Dog} alt="" />
                     </div>
                     <h3></h3>
                     <a href="https://github.com/NenevAleksey/Photos-of-dogs" target="_blank">GitHub</a>
                     <a href="https://NenevAleksey.github.io/Photos-of-dogs/" className="btn" target="_blank">Live Demo</a>
                  </article>

                  <article className="portfolio__item">
                     <div className="portfolio__item-image">
                        <img src={aimTraining} alt="" />
                     </div>
                     <h3></h3>
                     <a href="https://github.com/NenevAleksey/Aim-Game" target="_blank">GitHub</a>
                     <a href="https://NenevAleksey.github.io/Aim-Game/" className="btn" target="_blank">Live Demo</a>
                  </article>
               </div>
            </div>
         </section>
   )
}

export default MainPortfolio;