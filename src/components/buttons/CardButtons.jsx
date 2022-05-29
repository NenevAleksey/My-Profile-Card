import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeCardActive } from '../../services/cardActive';
import './CardButtons.scss';

const CardButtons = () => {
   const { cardActive} = useAppSelector(state => state.activeSlice)
   const dispatch = useAppDispatch()

   const activeCorrectFilter = (event) => {
      dispatch(changeCardActive(event.target.id));
   };

   return (
      <nav className="card-buttons">
         <button
            id="about"
            type="button"
            onClick={activeCorrectFilter}
            className={cardActive === "about" ? "is-active" : ""}
         >
            ABOUT
         </button>
         <button
            id="portfolio"
            type="button"
            onClick={activeCorrectFilter}
            className={cardActive === "portfolio" ? "is-active" : ""}
         >
            PORTFOLIO
         </button>
         <button
            id="contact"
            type="button"
            onClick={activeCorrectFilter}
            className={cardActive === "contact" ? "is-active" : ""}
         >
            CONTACT
         </button>
      </nav>
   )
}

export default CardButtons;