import React from "react";
import "./Home.css";

const Home = () => {
    const produtos = [
        {
            id: 1,
            nome: "The Witcher 3 Edição de Colecionador",
            preco: "R$ 120,00",
            imagem: "/witcher.webp",
        },
        {
            id: 2,
            nome: "God of War Edição de Colecionador",
            preco: "R$ 150,00",
            imagem: "/god.jpg",
        },
        {
            id: 3,
            nome: "Cyberpunk 2077 Edição de Colecionador",
            preco: "R$ 180,00",
            imagem: "/cyber.jpeg",
        },
    ];

    return (
        <div className="home-container">
            <div className="menu-container">
                <div className="logo">
                    <img src="/logo.webp" alt="Logo" />
                </div>
                <div className="menu-items">
                    <a href="#products">Produtos</a>
                    <a href="#categories">Categorias</a>
                    <a href="#bids">Licitações</a>
                    <a href="#wallet">Carteira</a>
                    <a href="#settings">Configurações</a>
                </div>
                <div className="profile">
                    <button className="profile-btn">
                        <img src="/perfil2.png" alt="Perfil" className="profile-icon" />
                    </button>
                </div>
            </div>
            <div className="promo-section">
                <img src="/promo.webp" alt="Promoção" className="promo-image" />
            </div>
            <div className="products-section">
                <h2>Produtos em Destaque</h2>
                <div className="products-grid">
                    {produtos.map((produto) => (
                        <div key={produto.id} className="product-card">
                            <img src={produto.imagem} alt={produto.nome} className="product-image" />
                            <h3>{produto.nome}</h3>
                            <p>{produto.preco}</p>
                            <button className="add-to-cart-btn">Adicionar ao Carrinho</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;