import React , {Component} from 'react';
import Home from './Home';
import Work from './Work';
import Profile from './Profile';
import Portfolio from './Portfolio';
import About from './About';
import SocialMedia from './Socialmedia';
import Contact from '../Contact';
import Footer from './Footer';

class Index extends Component {
  render() {
    return (
      <div className="App">
          <Home /> 
          <Work /> 
          <Portfolio /> 
          <Profile /> 
          
          <SocialMedia /> 
          <Contact />
      </div>
    );
  }

}

export default Index;