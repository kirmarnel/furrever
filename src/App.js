import "./App.css"
import NavBar from "./components/NavBar";
import { useState } from "react";
// import { AccountBox } from "./components/accountBox";
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
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <>
      <Router>
        <AppContainer>
        
        <div className="pages">
      
        <BoxContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <ProtectedRoute path="about" render={props => 
            <div>
              <NavBar />
              <About />
              </div>
            } isAuth={isAuth} /> */}
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
              <NavBar />
              <LoginForm />
            </Route>
            <Route path="/signup">
              <NavBar />
              <SignupForm />
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
