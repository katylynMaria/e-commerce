import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function Produto({
    nome,
    preco,
    img,
    favoritado,
    onFavoritar
}) {
    return (
        <div className="produto-card">

            <div className="favorito">
                <button
                    onClick={onFavoritar}
                    className="btn-favorito"
                >
                    {favoritado ? (
                        <FaHeart color="#E9789D" size={24} />
                    ) : (
                        <FaRegHeart color="#B8A4D9" size={24} />
                    )}
                </button>
            </div>

            <img
                src={img}
                alt={nome}
                className="produto-imagem"
            />

            <div className="produto-info">
                <h2>{nome}</h2>
                <p className="preco">{preco}</p>
            </div>

        </div>
    );
}