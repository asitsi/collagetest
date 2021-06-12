import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Singhup from "./Pages/SignUp";
import Singhin from "./Pages/Signin";
import Home from "./Pages/Home";
import AdminRoute from "./Pages/helper/AdminRouts";
import AdminDashBoard from "./Pages/AdminDashboard";
import Head from "./Pages/Head";
import Teacher from "./Pages/Teacher";
import Student from "./Pages/Student";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/signup" exact component={Singhup} />
        <Route path="/signin" exact component={Singhin} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <Route path="/dashboard/:HeadId" exact component={Head} />
        <Route path="/dashboard/:HeadId/:Teacher" exact component={Teacher} />
        <Route
          path="/dashboard/:HeadId/:Teacher/:student"
          exact
          component={Student}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
