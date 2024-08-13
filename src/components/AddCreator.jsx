import { useState } from "react";
import "../App.css";
import { supabase } from "../client"; // Ensure you have supabase client setup
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageURL: "",
    youtubeHandle: "",
    twitterHandle: "",
    instagramHandle: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("creators")
        .insert([formData]);
  
      if (error) {
        console.error("Error adding creator:", error);
      } else {
        console.log("Creator added successfully:", data);
        // Optionally, reset the form
        setFormData({
          name: "",
          description: "",
          imageURL: "",
          youtubeHandle: "",
          twitterHandle: "",
          instagramHandle: ""
        });
        // Navigate after successful insertion
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="add-creator">
      <h2>Add a Creator</h2>
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
          <h4>Provide at least one of the creator&apos;s social media handles</h4>
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
        <button type="submit" className ="submit-button">Submit</button> <br></br> <br></br>
      </form>
    </div>
  );
}