import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FormattedMessage id="details.toggle" />
      </div>
    );
  }
}

export default App;
