export default function InputCreateCard(props) {
  return (
    <div className="container mt-3">
      <div className="card p-3 bg-light text-dark rounded-3">
        <h3 className="mb-3">Criar FlashCard</h3>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Pergunta</label>
            <input
              type="text"
              className="form-control"
              value={props.question}
              onChange={(e) => props.setQuestion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <input
              type="text"
              className="form-control"
              value={props.description}
              onChange={(e) => props.setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Resposta</label>
            <input
              type="text"
              className="form-control"
              value={props.answer}
              onChange={(e) => props.setAnswer(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Criar
          </button>
        </form>
      </div>
    </div>
  );
}
