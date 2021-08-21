import React , {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Index from './component/Index';
import Contact from './component/Contact'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={Index}/>
            <Route  path="/contact" component={Contact}/>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
