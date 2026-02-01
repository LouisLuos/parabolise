export default function ContainerCard(props) {
  return (
    <div className="container bg-light text-dark p-3 rounded-3 mt-3 row g-3 justify-content-center mx-auto">
      {props.children}
    </div>
  );
}
