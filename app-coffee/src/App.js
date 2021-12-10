import { useSelector } from "react-redux";
import Admin from "./components/admin/Admin";
import Menu from "./components/menu/Menu";
import Login from "./components/login/Login"
import  Register from "./components/login/Register"
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const admin = useSelector((state) => state.author.admin);

  return (
    <div className="App">
      <Switch>
       
       
        <Route path="/admin">{admin ? <Admin /> : <Redirect to="/" />}</Route>
        <Route   path="/"  exact="true">
          <Login />
        </Route>
        <Route   path="/register">
          <Register />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
