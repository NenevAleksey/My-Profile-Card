

const CardButtons = () => {
   return (
      <nav className="card-buttons">
         <button data-section="#about" className="is-active">ABOUT</button>
         <button data-section="#experience">PORTFOLIO</button>
         <button data-section="#contact">CONTACT</button>
      </nav>
   )
}

export default CardButtons;