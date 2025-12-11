import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/chi-siamo",
        },
        {
            title: "Products",
            path: "/prodotti",
        },
    ];
    return (
        <header>
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
}