import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch, Route, withRouter } from 'react-router-dom';
import Form from './Components/Form';
import DisplayColor from './Components/DisplayColor';

  const colorList = [
    {colorName: "red", colorHex: "#FF0000"},
    {colorName: "green", colorHex: "#008000"},
    {colorName: "blue", colorHex: "#0000FF"}                    
  ]

  class App extends Component {
        state = {
          colorList: colorList,
          userInput: "",
          userSelectedColor: ""
        }

      getUserInput = (event) => {
          this.setState({
              userInput: event.target.value
          })          
      }

      getUserSelectedColor = (event) => {        
          this.setState({
              userSelectedColor: event.target.value
          }) 
      } 

      updateUserEntries = (e) => {
        e.preventDefault()
        const entries = [{colorName: this.state.userInput, colorHex: this.state.userSelectedColor}]
        const userRecords = this.state.colorList.concat(entries)
        this.setState({
          colorList: userRecords  
        })
        this.props.history.push("/")
      }

    render () {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={() => <Navbar colorList={this.state.colorList}/>}/>
            <Route path="/form" 
              render={() =><Form colorList={this.state.colorList} 
              getUserInput={this.getUserInput} 
              getUserSelectedColor={this.getUserSelectedColor} 
              updateUserEntries={this.updateUserEntries}
              />}/>
            <Route path="/displayColor/:color" component={() => <DisplayColor colorList={this.state.colorList}/>}/>
          </Switch>    
        </div>      
      );
    }
  }  

  export default withRouter(App)