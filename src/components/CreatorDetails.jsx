import "../App.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { Link, useNavigate } from "react-router-dom";
import blankProfile from "../assets/blankProfile.png";

export default function CreatorDetails() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const navigate = useNavigate();

  const handleImageError = (e) => {
    e.target.src = blankProfile;
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      navigate("/");
    }
  };

  if (!creator) {
    return <div>Loading...</div>;
}


  return (
    <div className="creator-details">
      <img
        src={creator.imageURL || "../assets/blankProfile.png"}
        alt={creator.name}
        onError={handleImageError}
      />
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <div className="social-media-links">
        <h3>Social Media Links</h3>
        <p>Youtube: {creator.youtubeHandle}</p>
        <p>Twitter: {creator.twitterHandle}</p>
        <p>Instagram: {creator.instagramHandle}</p>
      </div>

      <div className="action-buttons">
        <Link to={`/edit/${creator.id}`}>
          <button className = "edit-button">Edit</button>
        </Link>
        <button className = "delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
