import React from 'react';
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import WineMenue from "./components/WineMenue";
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
           <Link to="/4871">Chateau De Saint Cosme</Link>
         </li>
         <li>
         <Link to="/4872">Lan Rioja Crianza</Link></li>
         <li>
         <Link to="/4873">Margerum Sybarite</Link>
         </li>
         <li>
           <Link to="/4874">Owen Roe "Ex Umbris"</Link>
         </li>
         <li>
           <Link to="/4875">Rex Hill</Link>
         </li>
         <li>
           <Link to="/4876">Viticcio Classico Riserva</Link>
         </li>
         <li>
           <Link to="/4877">Chateau Le Doyenne</Link>
         </li>
         <li>
           <Link to="/4878">Domaine Du Bouscat</Link>
         </li>
       </ul>
     </nav>
     <Switch>
       <Route path="/" exact component={"/"}>
         <MainPage />
       </Route>
       <Route path="/4871" exact component={"/4871"}>
         <SeventyOne />
       </Route>
       <Route path="/4872" exact component={"/4872"}>
         <SeventyTwo />
       </Route>
       <Route path="/4873" exact component={"/4873"}>
         <SeventyThree />
       </Route>
       <Route path="/4874" exact component={"/4874"}>
         <SeventyFour />
       </Route>
       <Route path="/4875" exact component={"/4875"}>
         <SeventyFive />
       </Route>
       <Route path="/4876" exact component={"/4876"}>
         <SeventySix />
       </Route>
       <Route path="/4877" exact component={"/4877"}>
         <SeventySeven />
       </Route>
       <Route path="/4878" exact component={"/4878"}>
         <SeventyEight />
       </Route>
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
function SeventyOne(){
return <WineMenue id={4871}/> 
}
function SeventyTwo(){
return <WineMenue id={4872}/> 
}
function SeventyThree(){
return <WineMenue id={4873}/> 
}
function SeventyFour(){
return <WineMenue id={4874}/> 
}
function SeventyFive(){
return <WineMenue id={4875}/> 
}
function SeventySix(){
return <WineMenue id={4876}/> 
}
function SeventySeven(){
return <WineMenue id={4877}/> 
}
function SeventyEight(){
return <WineMenue id={4878}/> 
}

export default App;
