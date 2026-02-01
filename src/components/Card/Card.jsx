export default function Card(props) {
  return (
    <div className="card m-3 w-25 h-100">
      <div className="card-body">
        <h5 className="card-title">{props.question}</h5>
        <p className="card-text">
          {props.description}
        </p>
        <button className="btn btn-primary text-decoration-none me-2">
          Virar
        </button>
        <p>
          {props.answer}
        </p>
        <button className="btn btn-danger text-decoration-none">
          Excluir
        </button>
      </div>
    </div>
  );
}
