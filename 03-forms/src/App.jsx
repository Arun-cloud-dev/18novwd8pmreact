import Counter from "./components/Counter";
import Header from "./components/Header";
import Login from "./components/StateLogin";
import Signup from "./components/Signup";
import Button from "./components/Button";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Login/>
      <Signup/>
      <Button/>
    </main>
    {/* <Counter/> */}
    </>
  ) 
}

export default App;