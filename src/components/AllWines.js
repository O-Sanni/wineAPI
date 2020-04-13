import React from "react";
import axios from "axios";

class AllWines extends React.Component{
constructor(props){
    super(props);
    this.state={
        wines: null
    }
}
async getWineList(){
    try{
        const list= await axios.get("https://myapi-profstream.herokuapp.com/api/462a60/wines")
        this.setState({wines: list.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
}
notNull(){
    if (this.state.wines===null){
        return "wine not find";
    }
    else {
        let wines=this.state.wines.map(response=>{
            return (<div>
             <h3>{response.name}</h3>
             <img src={response.picture} alt="wine" />
             {/* <p>Year: {response.year}</p>
             <p>Grapes: {response.grapes}</p>
             <p>Country: {response.country}</p>
             <p>Region: {response.region}</p>
             <p>Price: {response.price}</p>
             <p>Desctiption: {response.description}</p>  */}
             </div> )});
             return wines;
    }
}

render(){
        
        return (
                <div>
                    {this.notNull()}
                </div>
        )
    }

}
 
export default AllWines;