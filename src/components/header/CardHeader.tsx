import { FC } from "react";
import './CardHeader.scss';
import avatar from '../../image/avatar.jpeg';

const CardHeader: FC = () => {
   return (
      <header className="card-header">
         <div className="card-cover" style={{ backgroundImage: `url(${avatar})` }} ></div>
         <img className="card-avatar"  src={avatar} alt="avatar" />
         <h1 className="card-fullname">Алексей Ненев</h1>
         <h2 className="card-jobtitle">Front-end Developer</h2>
      </header>
   )
}

export default CardHeader;

