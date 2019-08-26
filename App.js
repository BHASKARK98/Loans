import React from 'react';
import RouteLoan from './Loan/Routeloan'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
class App extends React.Component {
    login=
  {
  loanloginid:'LC303',
  loanloginpassword:'Checker303@scb'
  }
  render() {
    return (     
      <div>
   {/* <PracticeLogin loginid/> */}
    <RouteLoan login={this.login}/>
      </div>
    );
  }

}

export default App;
