import "./Card.css";

function Card({ name, role, image, years, met, onToggle, children }) {

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <h3>{name}</h3>
      <p dangerouslySetInnerHTML={{ __html: children }} />
      <p>{role}</p>
      <p>{years}</p>
      <p>Met: {met ? "Yes" : "No"}</p>
      <button type="button" onClick={onToggle}>
        {met ? "Mark as not met" : "Mark as met"}
      </button>
    </div>
  );
}

export default Card;
