import { FC } from "react";
import MainAbout from "../about/MainAbout";
import CardButtons from "../buttons/CardButtons";
import MainContact from "../contact/MainContact";
import MainPortfolio from "../portfolio/MainPortfolio";


const CardMain: FC = () => {
   return (
      <div className="card-main">
         <MainAbout/>
         <CardButtons/>
      </div>
   )
}

export default CardMain;

