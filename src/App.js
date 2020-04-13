import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import WineMenue from "./components/WineMenue";
import WineForm from "./components/WineForm";
import AllWines from "./components/AllWines";
import './App.css';
import DeleteWine from "./components/DeleteWine";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      wineId: ["/4897"]
    }
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
           <Link to="/5422">Chateau De Saint Cosme</Link>
         </li>
         <li>
         <Link to="/5423">Lan Rioja Crianza</Link></li>
         <li>
         <Link to="/5424">Margerum Sybarite</Link>
         </li>
         <li>
           <Link to="/5425">Owen Roe "Ex Umbris"</Link>
         </li>
         <li>
           <Link to="/5426">Rex Hill</Link>
         </li>
         <li>
           <Link to="/5427">Viticcio Classico Riserva</Link>
         </li>
         <li>
           <Link to="/5428">Chateau Le Doyenne</Link>
         </li>
         <li>
           <Link to="/5429">Domaine Du Bouscat</Link>
         </li>
         <li>
           <Link to="/add_wine">Add wine</Link>
         </li>
         <li>
           <Link to="/delete">Delete</Link>
         </li>
       </ul>
     </nav>
     <Switch>
       <Route path="/" exact component={"/"}>
       <MainPage />
       </Route>
       <Route path="/5422" exact component={"/5422"}>
       <One />
       </Route>
       <Route path="/5423" exact component={"/5423"}>
       <Two />
       </Route>
       <Route path="/5424" exact component={"/5424"}>
       <Three />
       </Route>
       <Route path="/5425" exact component={"/5425"}>
         <Four />
       </Route>
       <Route path="/5426" exact component={"/5426"}>
         <Five />
       </Route>
       <Route path="/5427" exact component={"/5427"}>
         <Six />
       </Route>
       <Route path="/5428" exact component={"/5428"}>
         <Seven />
       </Route>
       <Route path="/5429" exact component={"/5429"}>
         <Eight />
       </Route>
       <Router path="/add_wine" exact component={"/add_wine"}>
         <Form />
       </Router>
       <Router path="/delete" exact component={"/delete"}>
         <Delete />
       </Router>
     </Switch>
    </div>
    </Router>
  );
}
}

function MainPage(){
  return (<div>
    <h1>Welcome to wine menue</h1>
    <h2>Please choose wine</h2>
    <AllWines />

  </div>)
}
function One(){
return <WineMenue id={5422}/> 
}
function Two(){
return <WineMenue id={5423}/> 
}
function Three(){
return <WineMenue id={5424}/> 
}
function Four(){
return <WineMenue id={5425}/> 
}
function Five(){
return <WineMenue id={5426}/> 
}
function Six(){
return <WineMenue id={5427}/> 
}
function Seven(){
return <WineMenue id={5428}/> 
}
function Eight(){
return <WineMenue id={5429}/> 
}

function Form(){
  return <WineForm />
}
function Delete(){
  return <DeleteWine />
}

export default App;
