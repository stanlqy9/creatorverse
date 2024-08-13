import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageURL: "",
    youtubeHandle: "",
    twitterHandle: "",
    instagramHandle: ""
  });

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
        setFormData(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("creators")
        .update(formData)
        .eq("id", id);

      if (error) {
        console.error("Error updating creator:", error);
      } else {
        console.log("Creator updated successfully:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="edit-creator">
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label> <br></br> <br></br>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </label> <br></br> <br></br>
        <label>
          Image URL:
          <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange} />
        </label> <br></br> <br></br>
        <div className="social-media-links">
          <h3>Social Media Links</h3>
          <label>
            Youtube:
            <input type="text" name="youtubeHandle" value={formData.youtubeHandle} onChange={handleChange} />
          </label> <br></br> <br></br>
          <label>
            Twitter:
            <input type="text" name="twitterHandle" value={formData.twitterHandle} onChange={handleChange} />
          </label> <br></br> <br></br>
          <label>
            Instagram:
            <input type="text" name="instagramHandle" value={formData.instagramHandle} onChange={handleChange} />
          </label> <br></br> <br></br>
        </div>
        <button type="submit" className="submit-button">Save</button> <br></br>
        <button onClick = {handleDelete} className= "delete-button"> Delete </button>
      </form>
    </div>
  );
}