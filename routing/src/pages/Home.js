
import { Link } from "react-router-dom";

export default function Home() {
  return <>
  <h1>
    My home page 
  </h1>
  <p>Ho to <Link to='/products'>The List of products</Link></p>
  </>;
}
