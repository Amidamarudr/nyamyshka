import "./App.css";
import CatCard from "./CatCard";

const App = () => {
  const tasteFeed = [
    { 
      id: 0, 
      name: "с фуа-гра", 
      quantity: "10 порций", 
      prise: "мышь в подарок",
      value: "0,5",
      weight: "кг"
    },
    { 
      id: 1, 
      name: "с рыбой",
      quantity: "40 порций", 
      prise: "2 мыши в подарок",
      value: "2",
      weight: "кг"
    },
    {
      id: 2,
      name: "с курой",
      quantity: "100 порций",
      prise: "5 мышей в подарок",
      customer: "заказчик доволен",
      value: "5",
      weight: "кг"
    },
  ];
  return (
    <div className="test-main">
      <h1 className="header">Ты сегодня покормил кота?</h1>
      <div className="main">{tasteFeed.map((taste) => (
        <CatCard 
        key={taste.id} 
        name={taste.name}
        quantity={taste.quantity}
        prise={taste.prise}
        customer={taste.customer}
        value={taste.value}
        weight={taste.weight} 
        {...tasteFeed} />
      ))}
      </div>
    </div>
  );
};

export default App;
