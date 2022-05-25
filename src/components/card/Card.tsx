import CardHeader from "../header/CardHeader";
import CardMain from "../main/CardMain";
import styleCard from './Card.module.scss'


const Card = () => {
   return (
      <div className={styleCard.card}>
         <CardHeader/>
         <CardMain />
      </div>
   )
}

export default Card;