import React, { useState } from "react";
import "./styles/App.css";
import Produto from "./components/Produto.jsx";
import ItemCarrinho from "./components/ItemCarrinho.jsx";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  const listaProdutos = [
    { nome: "prod 1", preco: 100, rating: 5, rquant: 100 },
    { nome: "prod 2", preco: 500, rating: 4, rquant: 28 },
    { nome: "prod 3", preco: 80, rating: 4.5, rquant: 123 },
    { nome: "prod 4", preco: 10, rating: 3.5, rquant: 15 },
    { nome: "prod 5", preco: 120, rating: 4, rquant: 68 },
    { nome: "prod 6", preco: 80, rating: 1, rquant: 2 },
    { nome: "prod 7", preco: 10, rating: 0, rquant: 0 },
    { nome: "prod 8", preco: 120, rating: 5, rquant: 17 },
  ];
  function limparCarrinho() {
    setCarrinho([]);
  }
  return (
    <>
      <h1>Carrinho</h1>
      <div className="bg-dark-subtle p-3 rounded-2 mb-5">
        {carrinho.length > 0 ? (
          <>
            <h3>Itens: {carrinho.length}</h3>
            <h4>Total: R$ {carrinho.reduce((a, c) => a + c.preco, 0)}</h4>
            <div className="list-group m-0 p-0">
              {carrinho.map((p) => (
                <ItemCarrinho
                  produto={p}
                  setCarrinho={setCarrinho}
                  key={crypto.randomUUID()}
                />
              ))}
            </div>
            <button className="btn mt-3 btn-danger" onClick={limparCarrinho}>
              Limpar
            </button>
          </>
        ) : (
          "Carrinho vazio."
        )}
      </div>
      <h1>Lista de Produtos</h1>
      <div className="d-flex flex-wrap">
        {listaProdutos.map((p) => {
          const id = crypto.randomUUID();
          return <Produto produto={p} key={id} setCarrinho={setCarrinho} />;
        })}
      </div>
    </>
  );
}

export default App;
