import React from "react";
import axios from "axios";

class DisplayWine extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            wineInfo:[]
        }
    }
    async getWineList(){
        try{
            const list= await axios.get("https://myapi-profstream.herokuapp.com/api/462a60/wines")
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
        let listWines=[];
        switch(this.props.id){
            case 4871:
                listWines=(<div>
                    <h1>Name: {this.state.wineList[0].name}</h1>
                    <img src={this.state.wineList[0].picture} alt="wine" />
                    <p>Year: {this.state.wineList[0].year}</p>
                    <p>Grapes: {this.state.wineList[0].grapes}</p>
                    <p>Country: {this.state.wineList[0].country}</p>
                    <p>Region: {this.state.wineList[0].region}</p>
                    <p>Price: {this.state.wineList[0].price}</p>
                    <p>Desctiption: {this.state.wineList[0].description}</p>    
                </div>)
                break;
        }








    }
}