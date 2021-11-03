import { useSelector } from "react-redux";
import Admin from "./components/admin/Admin";
import Menu from "./components/menu/Menu";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const admin = useSelector((state) => state.author.admin);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/admin">{admin ? <Admin /> : <Redirect to="/" />}</Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
