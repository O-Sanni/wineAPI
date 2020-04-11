import React from "react";
import axios from "axios";



class WineMenue extends React.Component{
    constructor(props)
{
    super(props);
    this.state={
        id: props.id,
        wineList:[]
    }
}

async getWineList(){
    try{
        const list= await axios.get(`https://myapi-profstream.herokuapp.com/api/462a60/wines/${this.state.id}`)
        this.setState({wineList: list.data});
    }
    catch(error){
        console.log(error);
    }
}
componentDidMount(){
    this.getWineList();
}

       
    render(){   

        return (
            <div>
            <h3>{this.state.wineList.name}</h3>
            <img src={this.state.wineList.picture} alt="wine" />
            <p>Year: {this.state.wineList.year}</p>
            <p>Grapes: {this.state.wineList.grapes}</p>
            <p>Country: {this.state.wineList.country}</p>
            <p>Region: {this.state.wineList.region}</p>
            <p>Price: {this.state.wineList.price}</p>
            <p>Desctiption: {this.state.wineList.description}</p> 
            </div>
        );
    }
}

export default WineMenue;