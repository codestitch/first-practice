import './Main.scss';

export default function Card({ id, title, description, image, onNavigate }) {
   return (
    <div className="card" onClick={() => {
          if (!onNavigate) {return;}
          onNavigate(id);
        }
      }>
      <img src={image} alt={title} />
      <div className="content">
         <h3>{title}</h3>
         <p>{description}</p>
      </div>
      <div>
        <button>Set Favorite</button>
      </div>
    </div>
   );
 }