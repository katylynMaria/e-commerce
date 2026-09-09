function NavBar({ totalFavoritos }) {
    return (
        <nav className="navbar">
            <h1>Jujubinha Moda Infantil 🌸</h1>

            <span>
                Favoritos ❤️: {totalFavoritos}
            </span>
        </nav>
    );
}

export default NavBar;