import React from 'react';
import axios from "axios";
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
      wineId: null
    }
  }
  async getWineList(){
    try{
        const list= await axios.get(`https://myapi-profstream.herokuapp.com/api/466840/wines/`)
        this.setState({wineId: list.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
    console.log(this.state.wineId)
}
notNullLink(){
    if (this.state.wineId===null){
        return "wine not find";
    }
    else {
          let wines=this.state.wineId.map((wine)=>
            {return(<li>
            <Link to={"/"+wine.id}>{wine.name.toLowerCase()}</Link>
            </li>)})
          return wines;
          }
    }
notNullRoute(){
    if (this.state.wineId===null){
        return "wine not find";
    }
    else {
          let wines=this.state.wineId.map((wine)=>
            {return(<Route path={"/"+wine.id} exact component={"/"+wine.id}>
             <WineMenue id={wine.id}/>
            </Route>)})
          return wines;
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
           <Link to="/add_wine">Add wine</Link>
         </li>
         <li>
           <Link to="/delete">Delete</Link>
         </li> 
         {this.notNullLink()}
       </ul>
     </nav>
     <Switch>
       <Route path="/" exact component={"/"}>
       <MainPage />
       </Route> 
       <Router path="/add_wine" exact component={"/add_wine"}>
         <Form />
       </Router>
       <Router path="/delete" exact component={"/delete"}>
         <Delete />
       </Router>
       {this.notNullRoute()}
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


function Form(){
  return <WineForm />
}
function Delete(){
  return <DeleteWine />
}

export default App;
