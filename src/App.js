import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
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
        <Router basename="/MovieCloneReactjs">
          <HashRouter>
            <Route exact path="/" component={HomePage} />
            <Route path="/detail/:id" exact component={DetailPage} />
            <Route path="/fav" exact component={FavPage} />
            <Route path="/recomanded" exact component={Recommended} />
            <Route path="/ticket" exact component={MobTicket} />
          </HashRouter>
          {isphone && <Mobtabs />}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
