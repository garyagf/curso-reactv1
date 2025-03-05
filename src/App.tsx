import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";
/**
 * truthy
 * falsy
 */

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

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
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola mundo
      </Button>
    </Card>
  );
}

export default App;
