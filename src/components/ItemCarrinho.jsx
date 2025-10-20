import React from "react";

function ItemCarrinho({ produto, setCarrinho }) {
  function excluirProduto() {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((p) => p.id !== produto.id)
    );
  }
  return (
    <div className="list-item bg-light p-3 border border-bottom-1">
      <div className="row w-100">
        <div className="d-lg-block d-none col-md-1">
          <div className="h-100 d-flex align-items-center">
            <img
              className="img-fluid"
              src={`https://placehold.co/300x200/black/white/png/?text=${produto.nome}`}
              alt="Imagem"
            />
          </div>
        </div>
        <div className="d-flex flex-column col-10">
          <span className="h4 fw-normal card-title">{produto.nome}</span>
          <span className="card-text fw-bold">R$ {produto.preco}</span>
        </div>
        <div className="col-12 col-md-1 d-flex align-items-center">
          <button className="btn btn-warning" onClick={excluirProduto}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCarrinho;
