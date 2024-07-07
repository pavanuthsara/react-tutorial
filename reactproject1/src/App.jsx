import Hello from "./components/Hello"

function App() {
  const person ={
    name: "Pavan",
    message: "Hi there ",
    seatNumbers: [1,5,8],
  };
  return (
    <div className="App">
      <Hello person = {person} />
    </div>
  )
}

export default App
