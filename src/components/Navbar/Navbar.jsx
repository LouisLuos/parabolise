export default function Navbar() {
  return (
    <nav className="p-2 bg-light text-dark rounded-3 justify-content-between d-flex align-items-center">
      <h2 className="fs-4">Parabolise</h2>
      <ul className="text-secondary d-flex gap-3 text-decoration-none list-unstyled mb-0">
        <li>
          <a href="" className="text-decoration-none text-reset btn">
            Criar FlashCard
          </a>
        </li>
        <li>
          <a href="" className="btn text-decoration-none text-reset">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
