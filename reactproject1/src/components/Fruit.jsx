export default function Fruit({ name, price }) {
  return (
    <>
      {/* {name} ${price} */}
      {price > 8 ? (
        <li>
          {name} ${price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
