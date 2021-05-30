import { Route } from "react-router";
import "./App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Notification from "./Components/Notification";
import searchUser from './assets/search_user.png';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Route path="/" exact>
          <Notification
            message="Start with searching a GitHub user"
            icon={searchUser}
          />
        </Route>
        <Route path="/:login/:pageNumber?">
          <Profile user={props.user} />
        </Route>
      </div>
    </div>
  );
};

export default App;
