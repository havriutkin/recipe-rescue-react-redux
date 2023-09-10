import '../App.css';

// React Router imports
import { RouterProvider } from 'react-router';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Components imports
import Home from '../pages/Home';


function App({state, dispatch}) {
    const appRouter = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Home state={state} dispatch={dispatch}/>}/>
    ));

    return (
      <RouterProvider router={appRouter}/>
    );
}

export default App;
