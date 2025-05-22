//* importazione css
import '../styles/ComicCard.css';

const ComicCard = ({ title, thumb }) => {
  return (
    <div className="comic-card">
      <img src={thumb} alt={title} />
      <h2>{title.toUpperCase()}</h2>
    </div>
  );
};

export default ComicCard;