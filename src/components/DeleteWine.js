import React from "react";
import axios from "axios";


class DeleteWine extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:""
          }
          this.wineIdHandler=this.wineIdHandler.bind(this);
        }
            wineIdHandler(event) {
            event.preventDefault();
            this.setState({id: event.target.value});
            
          }
          
       submitButton(event){
        event.preventDefault();
        axios.delete(`http://myapi-profstream.herokuapp.com/api/462a60/wines/${this.state.id}`)
      }
      
        render(){
          return (
          <div className="App">
           <form onSubmit={this.submitButton}>
             <p>Enter wine Id</p>
             <input type='text'   onChange={this.wineIdHandler} placeholder="wine id"/>
           <input type="submit" />
           </form>
          </div>
        );
        }
      }
      
      export default DeleteWine;