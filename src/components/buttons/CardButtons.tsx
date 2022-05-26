

const CardButtons = () => {
   return (
      <div className="card-buttons">
         <button data-section="#about" className="is-active">ABOUT</button>
         <button data-section="#experience">PORTFOLIO</button>
         <button data-section="#contact">CONTACT</button>
      </div>
   )
}

export default CardButtons;