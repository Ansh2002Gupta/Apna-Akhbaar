import './App.css';
import React, {Component} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//this is a class based component
export default class App extends Component{

  //Rule of Thumb: If you want a state variable of a component 'A' to change, but it's changing depends on some component 'B' then, pass the function that changes the state of the component 'A' (<setState> offently) as a proptype of component 'B', in which just by calling this function you will be able to change the state of 'A'.

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }

  //render method is a lifecyle method- when react loads a component then some series of method are run. This is one of those methods and it's function is to render HTML on screen.
  render(){
    return(
      <Router>
        <LoadingBar height={4} color='red' shadow={true} progress={this.state.progress}/>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={this.setProgress} key='general' country='in' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Sports' element={<News setProgress={this.setProgress} key='sports' country='in' category='sports' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} key='entertainment' country='in' category='entertainment' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Business' element={<News setProgress={this.setProgress} key='business' country='in' category='business' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Technology' element={<News setProgress={this.setProgress} key='technology' country='in' category='technology' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Science' element={<News setProgress={this.setProgress} key='science' country='in' category='science' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Health' element={<News setProgress={this.setProgress} key='health' country='in' category='health' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/World Affairs' element={<News setProgress={this.setProgress} key='general2' country='' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          {/* <Route exact path='/China' element={<News setProgress={this.setProgress} key='cn' country='cn' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route> */}
          <Route exact path='/France' element={<News setProgress={this.setProgress} key='fr' country='fr' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Japan' element={<News setProgress={this.setProgress} key='jp' country='jp' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Korea' element={<News setProgress={this.setProgress} key='kr' country='kr' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          {/* <Route exact path='/Germany' element={<News setProgress={this.setProgress} key='de' country='de' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route> */}
          <Route exact path='/Russia' element={<News setProgress={this.setProgress} key='ru' country='ru' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/UK' element={<News setProgress={this.setProgress} key='gb' country='gb' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/USA' element={<News setProgress={this.setProgress} key='us' country='us' category='general' apiKey = {this.apiKey} page = {1} pageSize={6}/>}></Route>
        </Routes>
      </Router>
    )
  }
}