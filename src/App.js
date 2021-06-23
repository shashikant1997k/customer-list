import "./App.css";
import CustomerList from "./Component/CustomerList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BidsDetails from "./Component/BidsDetails";

function App() {
  return (
    <Router basename={"/customer-list/"}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="customer__list">
              <CustomerList />
            </div>
          </div>
        </Route>
        <Route exact path="/bids-details">
          <div className="App">
            <BidsDetails />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
