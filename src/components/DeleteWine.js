import React from "react";
import axios from "axios";


class DeleteWine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wineid:""
          }
          this.wineIdHandler=this.wineIdHandler.bind(this);
        }
            wineIdHandler(event) {
            this.setState({wineid: event.target.value});
            event.preventDefault();
          }
          
       
      render(){
let id=this.state.wineid;

function submitButton(event){
         event.preventDefault();
        axios.delete(`https://myapi-profstream.herokuapp.com/api/462a60/wines/${id}`)
        .then(res=>
            console.log(res.status))
        .catch(err=>console.log(err))
      }
          return (
          <div className="App">
           <form onSubmit={submitButton}>
             <p>Enter wine Id</p>
             <input type='text'  onChange={this.wineIdHandler} placeholder="wine id"/>
           <input type="submit" />
           </form>
          </div>
        );
        }
      }
      
      export default DeleteWine;