import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "Apple", price: 10, soldout: true },
    { name: "Mango", price: 7, soldout: true },
    { name: "Banana", price: 6, soldout: false },
    { name: "Orange", price: 15, soldout: false },
    { name: "Pineapple", price: 13, soldout: true },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
