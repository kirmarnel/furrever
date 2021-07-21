import "./App.css"
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import About  from "./components/Pages/About";
import Search from "./components/Pages/Search";
import { Card } from "./components/Pages/Card";
import { Contact } from "./components/Pages/Contact";
import { BoxContainer } from "./components/common";
import { AppContainer } from "./components/common";
import { Profile } from "./components/Pages/Profile";
import { LoginForm } from "./components/accountBox/loginForm";
import { SignupForm } from "./components/accountBox/signupForm";
import { Logout } from "./components/Pages/Logout"




function App() {
  return (
    <>
      <Router>
        <AppContainer>
        
        <div className="pages">
      
        <BoxContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about">
              <NavBar />
              <About />
            </Route>
            <Route path="/profile" >
            <NavBar />
            <Profile />
            </Route>
            <Route path="/search">
              <NavBar />
              <Search />
            </Route>
            <Route path="/card">
              <Card/>
            </Route>
            <Route path="/contact">
              <NavBar />
              <Contact />
            </Route>
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
          </BoxContainer>
        </div>
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
