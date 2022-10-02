import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
const router=createBrowserRouter([
{
  path:'/',element:"This is default page"
},{
  path:"/home",element:<Home></Home>
},{
  path:"/about",element:<About></About>
},{
  path:'/shop',element:<Shop></Shop>
}
])

function App() {

  return (
    <div className='App'>

  <RouterProvider router={router}></RouterProvider>  
    </div>
  );
}

export default App;
