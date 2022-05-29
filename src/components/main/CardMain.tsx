import { FC } from "react";
import MainAbout from "../about/MainAbout";
import CardButtons from "../buttons/CardButtons";
import MainContact from "../contact/MainContact";
import MainPortfolio from "../portfolio/MainPortfolio";
import './CardMain.scss';

const CardMain: FC = () => {
   
   return (
      <main className="card-main">
         <MainAbout />
         <MainPortfolio />
         <MainContact />
         <CardButtons />
      </main>
   )
}

export default CardMain;

