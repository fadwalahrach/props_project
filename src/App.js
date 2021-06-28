import React from 'react';
import './App.css';
import Container from './profile/Container';

const user = {
  fullname : 'Dave Quel',
  bio : 'something',
  profession : 'President at ECCO USA'
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Container mydata={user}/>
      </div>
    )
  }
}

export default App;
