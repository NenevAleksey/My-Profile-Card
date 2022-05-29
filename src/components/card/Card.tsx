import CardHeader from "../header/CardHeader";
import CardMain from "../main/CardMain";
import './Card.scss'


const Card = () => {
   return (
      <div className="card" data-state="#about">
         <CardHeader/>
         <CardMain />
      </div>
   )
}

export default Card;