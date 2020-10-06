import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Quote from './components/Quote/Quote';
import TextArea from './components/TextArea/TextArea';
import Footer from './components/Footer/Footer';
// import SignIn from './components/SignIn/SignIn';
// import Register from './components/Register/Register';


class App extends Component {


  render() {
    return (
      <Fragment>
        <Header />
        {/* <SignIn /> */}
        {/* <Register /> */}
        <Navigation />
        <main>
          <Quote />
          <TextArea />
        </main>

        <Footer />
      </Fragment>
    )
  }
}


export default App;
