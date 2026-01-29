export default function ContainerCard(props) {
  return (
    <div className="container bg-light text-dark p-1 rounded-3 mt-3 flex-wrap d-flex justify-content-center">
      {props.children}
    </div>
  );
}
