import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Tiesto",
    "Don Diablo",
    "Martin Garrix",
    "Armin van Buuren",
    "Anyma",
  ];
  return (
    <div>
      <ListGroup items={items} heading={"DJs"} />
    </div>
  );
}

export default App;
