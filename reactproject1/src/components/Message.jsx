export default function message() {
  function handleClick() {
    console.log("Button clicked! MF");
  }
  return (
    <div>
      <button onClick={handleClick}>Click me to suprise!</button>
    </div>
  );
}
