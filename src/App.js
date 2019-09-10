import React , { Component }from 'react';
import Footer from './templates/footer';
import Header from "./templates/header";

class App extends Component{
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container mt-5 pt-5">
          <h1 className="black">Is this working!</h1>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
