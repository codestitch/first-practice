
import { useNavigate } from 'react-router-dom';
import './Main.scss';

export default function Card({ id, title, description, image }) {

  let navigate = useNavigate(); 
   const routeChange = () => {
      navigate(id);
   }

   return (
     <div className="card" onClick={routeChange}>
      <img src={image} alt={title} />
      <div className="content">
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
     </div>
   );
 }