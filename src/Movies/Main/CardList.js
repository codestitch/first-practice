import './Main.scss';
import Card from "./Card";
import { useNavigate } from 'react-router-dom';

export default function CardList({data, renderEmtpy}) {
   let navigate = useNavigate(); 
   const routeChange = (id) => {
      navigate(id);
   }

   return !data.length ? renderEmtpy : 
   <div className="card-container">
      {
         data.map(item => (
            <Card key={item.id} id={item.id} title={item.title} image={item.image} description={item.description} onNavigate={routeChange}/>
         ))
      }
   </div>
 }