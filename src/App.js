import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {weatherKey, giphyKey} from "./APIKEYS.js";



class Weather extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: "Searching",
      gif: ''

    }
    this.newlocation = this.newlocation.bind(this)
  }

  async componentDidMount(){

    var data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ this.props.location + "&APIKEY=" +weatherKey+"&units=imperial")
    var location = await data.json()
    var pic = await fetch("http://api.giphy.com/v1/gifs/search?q="+location.weather[0].description+"&api_key="+giphyKey+"&limit=5",{mode:"cors"})
    var giphy = await pic.json()
    await this.setState({data: location, gif: giphy})

  }

  newlocation(){
    this.props.newlocation()
  }

  displayThis(){
    
    
    if (this.state.data === "Searching"){
      return <h2>Searching</h2>
    }else{
      let max = 7 < this.state.gif.data.length ? 7 : this.state.gif.data.length
      
      let random = Math.floor(max*Math.random())
      
      return (
        <div className = "weatherinfo">
        <div className = "picweather">
          <h3>It is currently: {this.state.data.weather[0].description}</h3>
          <img src = {this.state.gif.data[random].images.original.url} alt = {this.state.data.weather[0].description}/>
        </div>
        <h3>Current Temperature: {this.state.data.main.temp} F*</h3>
        <h3>Low: {this.state.data.main.temp_min} to High: {this.state.data.main.temp_max}</h3>
        <h3>Wind: {this.state.data.wind.speed}mph to {this.state.data.wind.deg}*</h3>
        <h3>Humidity: {this.state.data.main.humidity}</h3>
        </div>
      )
    }
  }


  render(){
    

    return(
      <div className = "weather">
        <h1>Weather at {this.props.location}</h1>
          {this.displayThis.bind(this)()}
        <button onClick = {this.newlocation}>New Location</button>
      </div>
    )
  }
}




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      location : '',
      searching: false,
      data: ''

    }
    this.searchinput = this.searchinput.bind(this)
    this.submit = this.submit.bind(this)
    this.newlocation = this.newlocation.bind(this)
  }

  searchinput(input){
    this.setState({location: input})
  }

  submit(){
    this.setState({searching: true})
  }

  newlocation(){
    this.setState({searching: false, location: ' '})
  }

  render(){

    let display
    if (this.state.searching === false){
      display = <Search searchinput = {this.searchinput} location = {this.state.location} submit = {this.submit}/>
    }else{

      display = <Weather location = {this.state.location} newlocation = {this.newlocation}/>
    }

    return (
      <div className = "application">
        <h1>Wether the Weather the Whether?</h1>
        <div className = "weather">
          {display}
        </div>
      </div>
    )
  }

}

class Search extends React.Component{

  constructor(props){
    super()
    this.searchinput = this.searchinput.bind(this)
  }

  searchinput(e){
    this.props.searchinput(e.target.value)
  }

  render(){
    return (
      <div className = "search">
        <div>
          <label>wHERe In Da WOrLD U WannA SeE MaTE</label>
        </div>
        <input type = "text" value = {this.props.location} onChange = {this.searchinput}/>
        <input type = 'submit' onClick = {this.props.submit}/>
      </div>
    )
  }
}





export default App;

