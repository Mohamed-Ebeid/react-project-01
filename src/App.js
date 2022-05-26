import './App.css';
import Navbar from './Component/Navbar';
import Edit from './Component/Edit';
import Home from './Component/Home';
import Create from './Component/Create';
import NotFound from './Component/NotFound';
import BlogDetails from './Component/blogDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  

  return (
    <Router>
     <div className="App">
        <Navbar/> 
        <div className="content">
          <Switch>

           <Route exact path="/">
            <Home/>
           </Route>

           <Route path="/create">
            <Create/>
           </Route>

           <Route path="/edit/:id">
            <Edit/>
           </Route>

           <Route path="/blogs/:id">
            <BlogDetails/>
           </Route>

           <Route path="*">
            <NotFound/>
           </Route>

         </Switch>
        </div>
     </div>
    </Router>
  );
}

export default App;
 