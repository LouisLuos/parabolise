export default function Card() {
  return (
    <div className="card m-3 w-25 h-100">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button className="btn btn-primary text-decoration-none me-2">
          Virar
        </button>
        <button className="btn btn-danger text-decoration-none">
          Excluir
        </button>
      </div>
    </div>
  );
}
