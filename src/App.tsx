import "./App.css";
import Card from "./components/Card";
import { CardArr } from "./mock/cardMock";

function App() {
  return (
    <>
      <div>
        {CardArr.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            desc={card.desc}
            code={card.code}
          />
        ))}
      </div>
    </>
  );
}

export default App;
