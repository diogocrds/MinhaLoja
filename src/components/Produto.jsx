import React from "react";
import ItemCarrinho from "./ItemCarrinho";

function Produto({ produto, setCarrinho }) {
  const starRating = [];
  const fill = Math.floor(produto.rating);
  for (let i = 0; i < fill; i++) {
    starRating.push(
      <i className="bi bi-star-fill text-warning-emphasis" key={`fill${i}`}></i>
    );
  }
  const half = Math.ceil(produto.rating - fill);
  for (let i = 0; i < half; i++) {
    starRating.push(
      <i className="bi bi-star-half text-warning-emphasis" key={`half${i}`}></i>
    );
  }
  const empty = 5 - fill - half;
  for (let i = 0; i < empty; i++) {
    starRating.push(
      <i className="bi bi-star text-warning-emphasis" key={`empty${i}`}></i>
    );
  }

  function adicionarCarrinho() {
    setCarrinho((prevCarrinho) => {
      return [...prevCarrinho, { ...produto, id: crypto.randomUUID() }];
    });
  }
  return (
    <div className="p-2 col-12 col-sm-6 col-md-3 col-lg-2 ">
      <div className="card rounded-0">
        <img
          className="card-img-top rounded-0"
          src={`https://placehold.co/300x200/black/white/png/?text=${produto.nome}`}
          alt="Imagem"
        />
        <div className="card-body d-flex flex-column text-center">
          <span className="h4 fw-normal card-title">{produto.nome}</span>
          <div>
            {starRating}
            <span className="ps-2 text-danger-emphasis">{produto.rquant}</span>
          </div>
          <span className="card-text fw-bold mb-2">R$ {produto.preco}</span>
          <a className="btn btn-outline-success" onClick={adicionarCarrinho}>
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Produto;
