import "../App.css";
import PropTypes from "prop-types";
import blankProfile from "../assets/blankProfile.png";
import { Link } from "react-router-dom";


export default function CreatorCard({ creator }) {
  const handleImageError = (e) => {
    e.target.src = blankProfile;
  };

  return (
    <div className="creator">
      <div className="creator-header">
        <img
          src={creator.imageURL}
          alt={`Image of ${creator.name}`}
          onError={handleImageError}
        />
        <div className="creator-actions">
          <div className="creator-card-edit-button">
          <Link to={`/edit/${creator.id}`}>
            <button>Edit</button>
          </Link>
          </div>
          <div className="creator-card-details-button">
          <Link to = {`/details/${creator.id}`}>
            <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <div className="socials">
        <a
          href={`https://youtube.com/@${creator.youtubeHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href={`https://x.com/${creator.twitterHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href={`https://www.instagram.com/${creator.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

CreatorCard.propTypes = {
  creator: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    youtubeHandle: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string.isRequired,
    instagramHandle: PropTypes.string.isRequired,
  }).isRequired,
};