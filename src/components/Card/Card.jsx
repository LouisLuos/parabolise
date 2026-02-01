import { useState } from "react";

export default function Card(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card m-2 col-11 col-md-5 col-lg-3 transition-all ${
        isFlipped
          ? "border-primary shadow-lg bg-body-tertiary"
          : "shadow-sm border-light"
      }`}
      style={{ transition: "0.3s", minHeight: "200px" }}
    >
      <div className="card-body d-flex flex-column">
        <h5 className={`card-title ${isFlipped ? "text-primary" : ""}`}>
          {props.question}
        </h5>

        <p className="card-text text-secondary">{props.description}</p>

        <div className="mt-auto d-flex gap-2">
          <button
            className={`btn ${isFlipped ? "btn-outline-primary" : "btn-primary"}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {isFlipped ? "Esconder" : "Virar"}
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={props.onDelete}
          >
            Excluir
          </button>
        </div>

        {isFlipped && (
          <div className="mt-3 p-2 bg-white rounded border-start border-primary border-4">
            <small className="text-muted d-block mb-1">Resposta:</small>
            <p className="fw-bold mb-0">{props.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
