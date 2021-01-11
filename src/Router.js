import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";



import Home from "./Components/Home";
import Products from "./Components/Products";
import ProductsItem from "./Components/ProductsItems";
import RouteSelector from "./Components/RouteSelector";

function SetRoute() {
    return (
     

        <Router>

            <RouteSelector />
            <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/products" component={Products}/>
                    <Route  path="/products/:id" component={ProductsItem}/> 
                    <Route  path="*" component={()=><h1>ERROR 404</h1>}/>        
            </Switch>
        </Router>
    );
  }
  
  export default SetRoute;
  