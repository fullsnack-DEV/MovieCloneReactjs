import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { DetailPage } from "./Pages/DetailPage";
import { Provider } from "react-redux";
import Store from "./Redux/store.jsx";
import { FavPage } from "./Pages/FavPage";
import { Mobtabs } from "./component/Mobtabs";
import { useMedia } from "./Hooks/UseMedia";
import { Recommended } from "./Pages/Recommended";
import { MobTicket } from "./Pages/MobTicket";

function App() {
  const isphone = useMedia("(max-width:500px )");

  return (
    <div>
      <Provider store={Store}>
        {isphone ? (
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route exact path="/fav" component={FavPage} />
              <Route exact path="/recomanded" component={Recommended} />
              <Route exact path="/ticket" component={MobTicket} />
            </Switch>
          </Router>
        ) : (
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/detail/:id" component={DetailPage} />
              <Route exact path="/fav" component={FavPage} />
              <Route exact path="/recomanded" component={Recommended} />
              <Route exact path="/ticket" component={MobTicket} />
            </Switch>
          </Router>
        )}
      </Provider>
    </div>
  );
}

export default App;
