import './Main.scss';
import Card from "./Card";

export default function CardList({data, renderEmtpy}) {
   return !data.length ? renderEmtpy : 
   <div className="card-container">
      {
         data.map(item => (
            <Card key={item.id} id={item.id} title={item.title} image={item.image} description={item.description}/>
         ))
      }
   </div>
 }