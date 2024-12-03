// import reactImg from './assets/react-core-concepts.png'

import { CORE_CONCEPTS } from './data';
import Header from "./Header/Header"
import CoreConcept from './CoreConcepts';
import Testcomp from './Testcomp'






// function Header(){
//   const description = reactDescription[genRandomInt(2)]
//   return(
//   <header>
//     <img src={reactImg} alt="Stylish logo" />
//     <h1>React Essentials</h1>
//     <p>{description} react Concepts You will need for Almost any app you going to Build </p>
//   </header>
//   ) 
// }



// function CoreConcept({image , title , description}){
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   )
// }


function App(){

  const message = "Hello this is props from app.js";

  return(
    <div>
      <Header/>
   
      
      <main>
        <section id='core-concepts'>
        <h2>Core Concepts </h2>
        <ul>
          <CoreConcept 
          title = {CORE_CONCEPTS[0].title} 
          description = {CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept  {...CORE_CONCEPTS[1]}/>
          <CoreConcept  {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
         
  
        </ul>
        </section>
      
      </main>



      <Testcomp  greeting={message}/>

      
    </div>
  );
}


export default App; 