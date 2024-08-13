import "../App.css";
import { supabase } from "../client";
import { useState, useEffect } from "react";
import CreatorCard from "./CreatorCard";

export default function CreatorGrid() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchCreators();
  }, []);

  async function fetchCreators() {
    const { data /*, error} */ } = await supabase.from("creators").select("*");
    // if (error) {
    //   console.error("Error fetching creators:", error);
    // } else {
    //   if (data.length === 0) {
    //     console.log("No creators found.");n 
    //   } else {
    //     console.log("Fetched creators:", data);
    //     setCreators(data);
    //   }
    // }
    setCreators(data);
  }

  return (
    <div className="creators">
      {creators && creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard creator = { creator } key = {creator.id} > </CreatorCard>
        ))
      ) : (
        <p>No creators found.</p>
      )}
    </div>
  );
}
