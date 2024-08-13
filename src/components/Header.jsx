import "../App.css";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <h1>Creatorverse</h1>
      <div className="buttons">
      <Link to = "/">
        <button>View All Creators</button>
        </Link>

        <Link to = "/create">
        <button>Add a Creator</button>
        </Link>
      </div>
    </div>
  );
}
