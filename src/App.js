import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Watch from './Components/Watch';
import Feed from './Components/Feed';
const approuter=createBrowserRouter([
  {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Feed/>
    },
    {
      path:"/watch",
      element:<Watch/>
    },
  ]

}])
function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={approuter} />
    </div>
  );
}
export default App;
