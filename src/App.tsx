import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

/*function App() {
  const items = ["London", "New York", "San Fransisco", "Tokyo", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Clicked")}>New Button</Button>
    </div>
  );
}

export default App;
