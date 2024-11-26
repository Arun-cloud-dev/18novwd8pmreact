
const reactDescription = ['Fundemental' , 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random()* (max+1));
}



function Header(){
  const description = reactDescription[genRandomInt(2)]
  return(
  <header>
    <img src="./assets/react-core-concepts.png" alt="Stylish logo" />
    <h1>React Essentials</h1>
    <p>{description} react Concepts You will need for Almost any app you going to Build </p>
  </header>
  ) 
}



function App(){
  return(
    <div>
      <Header/>
      <main>
        <h2>Time to Get started </h2>
      </main>
      
    </div>
  );
}


export default App; 