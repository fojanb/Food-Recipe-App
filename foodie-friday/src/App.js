import React, { Component } from "react";
import "./App.css";
// import InputComponent from "./components/InputComponent";

class App extends Component {
  state = {
    // Authenticate API --> Use Environment Tools to protect the APP_ID and APP_KEY
    APP_ID: "0a558300",
    APP_KEY: "181f226856b2e1b79a5770bcf412a99a",
    exampleReq: `https://api.edamam.com/search?q=chicken&app_id={this.state.APP_ID}&app_key={this.state.APP_KEY}`,
  };
  //We need componentdidmount() while working with API in class component
  componentDidMount(){
    //send HTTP request
    //save it to the state
    console.log("Fojan bb");
    
  }
  render() {
    return (
      <div className="App">
        <h1>Foodie Friday</h1>
        <form className="search-form">
          <input type="text" className="search-bar"></input>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default App;
