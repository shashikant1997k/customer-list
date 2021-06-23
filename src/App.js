import "./App.css";
import CustomerList from "./Component/CustomerList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="customer__list">
              <CustomerList />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
