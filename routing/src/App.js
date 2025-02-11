import { createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from './pages/Home'
import ProductsPage from './pages/Products';
import RootLayout from "./pages/Root";
import QRCodeGenerator from "./pages/QRCodeGenerator";

const router = createBrowserRouter([
  {
    path: '/',
    element:<RootLayout/>,
    children: [
      {path:'/',element:<HomePage/>  },
      {path:'/qr' , element :<QRCodeGenerator/>}
    ]
  }
])

function App(){
  return <RouterProvider router={router}/>
}
export default App;
