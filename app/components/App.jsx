import React, {createClass} from 'react';
import {Calendar, Rdv} from './Calendar'
import Meteo from './Meteo'

let BasicView = createClass({
    render(){
        return (
            <div className="container">
                 {this.props.children}
            </div>
        )
    }
})

export default class App extends React.Component {
  render() {
    return (
      <BasicView>
          <Rdv className="component">
              Prochain événements
          </Rdv>
          <Meteo />
          <Rdv className="component">
              Cette semaine
          </Rdv>
      </BasicView>
    );
  }
}
