import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { DetailPage } from "./Pages/DetailPage";
import { Provider } from "react-redux";
import Store from "./Redux/store.jsx";
import { FavPage } from "./Pages/FavPage";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/detail/:id" component={DetailPage} />
          <Route exact path="/fav" component={FavPage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
