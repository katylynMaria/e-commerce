import { useState } from "react";
import NavBar from "./Navbar.jsx";
import Produto from "./produto.jsx";

import ConjuntoHS from "./imagens/PijamaDeDormir.jpeg";
import ConjuntoHK from "./imagens/ConjuntoHelloKitty.jpeg";
import ConjuntoB from "./imagens/ConjuntoMasculino.jpeg";

export default function App() {

    const Produtos = [
        {
            id: 1,
            nome: "Conjunto Feminino - Hora do Soninho",
            img: ConjuntoHS,
            preco: "R$ 65,00"
        },
        {
            id: 2,
            nome: "Conjunto Feminino - Hello Kitty",
            img: ConjuntoHK,
            preco: "R$ 85,00"
        },
        {
            id: 3,
            nome: "Conjunto Masculino - Brooklyn",
            img: ConjuntoB,
            preco: "R$ 85,00"
        }
    ];

    const [Favoritos, setFavoritos] = useState([]);

    function toggleFavorito(id) {
        setFavoritos((prev) =>
            prev.includes(id)
                ? prev.filter((favid) => favid !== id)
                : [...prev, id]
        );
    }

    return (
        <>
            <NavBar totalFavoritos={Favoritos.length} />

            <main className="app">
                <div className="grid-produtos">

                    {Produtos.map((item) => (
                        <Produto
                            key={item.id}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.img}
                            favoritado={Favoritos.includes(item.id)}
                            onFavoritar={() => toggleFavorito(item.id)}
                        />
                    ))}

                </div>
            </main>
        </>
    );
}