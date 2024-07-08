import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10 },
    { name: "Mango", price: 7 },
    { name: "Banana", price: 6 },
    { name: "Orange", price: 15 },
    { name: "Pineapple", price: 13 },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ul>
    </div>
  );
}
