import comics from "../assets/data/comic";
import ComicCard from "./ComicCard";
import "../styles/ComicList.css";

const ComicList = () => {
  return (
    <div className="comic-list container">
      {comics.map((comic, index) => (
        <div key={comic.id} className="comic-item">
          <ComicCard {...comic} />
        </div>
      ))}
    </div>
  );
};

export default ComicList;