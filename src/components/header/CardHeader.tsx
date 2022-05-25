import { FC } from "react";
import styleHeader from './CardHeader.module.scss';
import avatar from '../../image/avatar.jpeg';

const CardHeader: FC = () => {
   return (
      <div className={styleHeader.card_header}>
         <div className={styleHeader.card_cover} style={{ backgroundImage: `url(${avatar})` }} ></div>
         <img className={styleHeader.card_avatar} src={avatar} alt="avatar" />
         <h1 className={styleHeader.card_fullname}>Алексей Ненев</h1>
         <h2 className={styleHeader.card_jobtitle}>Front-end Developer</h2>
      </div>
   )
}

export default CardHeader;

