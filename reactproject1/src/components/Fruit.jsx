export default function Fruit({ name, price, soldout }) {
  return (
    <>
      <li>
        {name} ${price} {soldout ? "sold out" : ""}
      </li>
    </>
  );
}
