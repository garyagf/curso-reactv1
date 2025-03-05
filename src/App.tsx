import Card, { CardBody } from "./components/card";
import List from "./components/List";
/**
 * truthy
 * falsy
 */

function App() {
  //const list = ["Goku", "Tanjito", "Eren"];
  const list: string[] = ["Goku", "Tanjiro", "chanchito feliz"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimientod: ", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola mundo" text="Ese es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No ha contenido"
      )}
    </Card>
  );
}

export default App;
