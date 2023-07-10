import './App.css';
import React, {Component} from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//this is a class based component
export default class App extends Component{
  //render method is a lifecyle method- when react loads a component then some series of method are run. This is one of those methods and it's function is to render HTML on screen.
  render(){
    return(
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News key='general' country='in' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Sports' element={<News key='sports' country='in' category='sports' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Entertainment' element={<News key='entertainment' country='in' category='entertainment' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Business' element={<News key='business' country='in' category='business' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Technology' element={<News key='technology' country='in' category='technology' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Science' element={<News key='science' country='in' category='science' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Health' element={<News key='health' country='in' category='health' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/World Affairs' element={<News key='general2' country='' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Australia' element={<News key='au' country='au' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Canada' element={<News key='ca' country='ca' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/China' element={<News key='cn' country='cn' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Egypt' element={<News key='eg' country='eg' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/France' element={<News key='fr' country='fr' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Indonesia' element={<News key='id' country='id' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Israel' element={<News key='il' country='il' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Japan' element={<News key='jp' country='jp' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Korea' element={<News key='kr' country='kr' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Germany' element={<News key='de' country='de' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Sweden' element={<News key='se' country='se' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/Russia' element={<News key='ru' country='ru' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/UK' element={<News key='gb' country='gb' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/UAE' element={<News key='ae' country='ae' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
          <Route exact path='/USA' element={<News key='us' country='us' category='general' apiKey = {`6e1a7b2f62c642c1902d269fd180f6dc`} page = {1} pageSize={6}/>}></Route>
        </Routes>
      </Router>
    )
  }
}