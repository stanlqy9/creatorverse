import "../App.css";
import CreatorGrid from "../components/CreatorGrid";
import Header from "../components/Header";


export default function ShowCreators() {
    return (
        <div>
            <Header/>
            <main>
            <CreatorGrid/>
            </main>
        </div>
    )
}