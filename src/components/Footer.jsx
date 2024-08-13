import "../App.css";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} Creatorverse, All rights reserved</p>
        </footer>
    )
}