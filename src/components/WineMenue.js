import React from "react";
import axios from "axios";
import "./components.css";



class WineMenue extends React.Component{
    constructor(props)
{
    super(props);
    this.state={
        id: props.id,
        wineList:null
    }
}

async getWineList(){
    
    try{
        const list= await axios.get(`http://myapi-profstream.herokuapp.com/api/466840/wines/${this.state.id}`)
        this.setState({wineList: list.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
}
checkIfWineExists(){
if(this.state.wineList===null){
    return "Sorry, information is not availiable or wine has been deleted.";
}
else{
    return (<div>
            <h3>{this.state.wineList.name}</h3>
            <img src={this.state.wineList.picture} alt="wine" />
            <p>Year: {this.state.wineList.year}</p>
            <p>Grapes: {this.state.wineList.grapes}</p>
            <p>Country: {this.state.wineList.country}</p>
            <p>Region: {this.state.wineList.region}</p>
            <p>Price: {this.state.wineList.price}</p>
            <p>Desctiption: {this.state.wineList.description}</p> 
            <p>Wine Id: {this.state.wineList.id}</p> 
            </div>)
}
}
    render(){   

        return (<div>{this.checkIfWineExists()}</div> 
        );
    }
}

export default WineMenue;