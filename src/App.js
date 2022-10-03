import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friend from './components/Friend/Friend';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Shop from './components/Shop/Shop';
import Main from './layOut/Main';
const router=createBrowserRouter([
{
  path:'/',element:<Main> </Main>, children:[
    {
      path:"/",element:<Home></Home>
    },
    {
      path:"/home",element:<Home></Home>
    },
    
    {
      path:'/shop',element:<Shop></Shop>
    },
    {
      path:'/friends',
      loader: async () =>{
        return fetch("https://jsonplaceholder.typicode.com/users")
      },
      element: <Friend></Friend>
    },
    {
      path:"/friends/friend/:friendId",
      loader: async ({params}) =>{
      //  console.log(params.friendId)
     return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      element: <FriendDetail></FriendDetail>
    },
    {
      path:"/posts",
      loader: async () =>{
        return fetch('https://jsonplaceholder.typicode.com/posts')
      },
      element: <Posts></Posts>
    },
    {
      path:"/post/:postId",
      loader: async ({params}) =>{
      return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      element: <PostDetails></PostDetails>
    }
  ]
},
{
  path:"/about",element:<About></About>
},
{
  path:"*",element:<div>This page not found</div>
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
