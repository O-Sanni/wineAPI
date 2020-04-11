import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import WineMenue from "./components/WineMenue";
import WineForm from "./components/WineForm"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (
    <Router>
    <div className="App">
     <nav>
       <ul>
         <li>
           <Link to="/">Main Page</Link>
         </li>
         <li>
           <Link to="/4896">Chateau De Saint Cosme</Link>
         </li>
         <li>
         <Link to="/4897">Lan Rioja Crianza</Link></li>
         <li>
         <Link to="/4898">Margerum Sybarite</Link>
         </li>
         <li>
           <Link to="/4899">Owen Roe "Ex Umbris"</Link>
         </li>
         <li>
           <Link to="/4900">Rex Hill</Link>
         </li>
         <li>
           <Link to="/4901">Viticcio Classico Riserva</Link>
         </li>
         <li>
           <Link to="/4902">Chateau Le Doyenne</Link>
         </li>
         <li>
           <Link to="/4903">Domaine Du Bouscat</Link>
         </li>
         <li>
           <Link to="/add_wine">Add wine</Link>
         </li>
       </ul>
     </nav>
     <Switch>
       <Route path="/" exact component={"/"}>
         <MainPage />
       </Route>
       <Route path="/4896" exact component={"/4896"}>
         <One />
       </Route>
       <Route path="/4897" exact component={"/4897"}>
         <Two />
       </Route>
       <Route path="/4898" exact component={"/4898"}>
         <Three />
       </Route>
       <Route path="/4899" exact component={"/4899"}>
         <Four />
       </Route>
       <Route path="/4900" exact component={"/4900"}>
         <Five />
       </Route>
       <Route path="/4901" exact component={"/4901"}>
         <Six />
       </Route>
       <Route path="/4902" exact component={"/4902"}>
         <Seven />
       </Route>
       <Route path="/4903" exact component={"/4903"}>
         <Eight />
       </Route>
       <Router path="/add_wine" exact component={"/add_wine"}>
         <Form />
       </Router>
     </Switch>
    </div>
    </Router>
  );
}
}

function MainPage(){
  return (<div>
    <h1>Wlcome to wine menue</h1>
    <h2>Please choose wine</h2>
  </div>)
}
function One(){
return <WineMenue id={4896}/> 
}
function Two(){
return <WineMenue id={4897}/> 
}
function Three(){
return <WineMenue id={4898}/> 
}
function Four(){
return <WineMenue id={4899}/> 
}
function Five(){
return <WineMenue id={4900}/> 
}
function Six(){
return <WineMenue id={4901}/> 
}
function Seven(){
return <WineMenue id={4902}/> 
}
function Eight(){
return <WineMenue id={4903}/> 
}

function Form(){
  return <WineForm />
}

export default App;
