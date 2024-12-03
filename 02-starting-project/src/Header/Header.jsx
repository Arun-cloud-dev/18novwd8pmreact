
import reactImg from '../assets/react-core-concepts.png'
import "./Header.css"


const reactDescription = ['Fundemental' , 'Crucial', 'Core']

function genRandomInt(max){
  return Math.floor(Math.random()* (max+2));
}



export default function Header(){
    const description = reactDescription[genRandomInt(2)]
    return(
    <header>
      <img src={reactImg} alt="Stylish logo" />
      <h1>React Essentials</h1>
      <p>{description} react Concepts You will need for Almost any app you going to Build </p>
    </header>
    ) 
  }