import React from "react";
import axios from "axios";


class WineForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            pictureURL:'',
            grapes:'',
            country:'',
            region: '',
            price: '',
            description: ''
          }
          this.nameHandler=this.nameHandler.bind(this);
          this.pictureURLHandler=this.pictureURLHandler.bind(this);
          this.grapesHandler=this.grapesHandler.bind(this);
          this.countryHandler=this.countryHandler.bind(this);
          this.regionHandler=this.regionHandler.bind(this);
          this.priceHandler=this.priceHandler.bind(this);
          this.descriptionHandler=this.descriptionHandler.bind(this);
          this.submitButton=this.submitButton.bind(this);
        }
          nameHandler(event) {
            this.setState({name: event.target.value});
            event.preventDefault();
          }
          pictureURLHandler(event) {
            this.setState({pictureURL: event.target.value});
            event.preventDefault();
          }
          grapesHandler(event) {
            this.setState({grapes: event.target.value});
            event.preventDefault();
          }
          countryHandler(event) {
            this.setState({country: event.target.value});
            event.preventDefault();
          }
          regionHandler(event) {
            this.setState({region: event.target.value});
            event.preventDefault();
          }
          priceHandler(event) {
            this.setState({price: event.target.value});
            event.preventDefault();
          }
          descriptionHandler(event) {
            this.setState({description: event.target.value});
            event.preventDefault();
          }
      submitButton(event){
        event.preventDefault();
        axios.post("https://myapi-profstream.herokuapp.com/api/462a60/wines",this.state)
      }
        render(){
          return (
          <div className="App">
           <form onSubmit={this.submitButton}>
             <p>Enter wine name</p>
             <input type='text' onChange={this.nameHandler} placeholder="wine name"/>
             <p>Enter wine url link</p>
             <input type='text' onChange={this.pictureURLHandler} placeholder="picture url"/>
             <p>Enter type of grapes</p>
             <input type='text' onChange={this.grapesHandler} placeholder="grapes type"/>
             <p>Enter contry of origin</p>
             <input type='text' onChange={this.countryHandler} placeholder="country"/>
             <p>Enter region of origin</p>
             <input type='text' onChange={this.regionHandler}  placeholder="region"/>
             <p>Enter price of wine</p>
             <input type='text' onChange={this.priceHandler}  placeholder="price"/>
             <p>Enter wine description</p>
             <input type='text'onChange={this.descriptionHandler}  placeholder="description"/>
           <input type="submit" />
           </form>
          </div>
        );
        }
      }
      
      export default WineForm;