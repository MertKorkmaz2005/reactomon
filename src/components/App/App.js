import PokemonCardWrapper from '../layouts/PokemonCardWrapper/PokemonCardWrapper';
import CounterCard from '../CounterCard/CounterCard';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {counter: 0}
  }
  updateCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }
  render(){
    return (
      <main className='main'>
         <PokemonCardWrapper updateCounter={this.updateCounter} /> 
         <CounterCard counter={this.state.counter} />
      </main>
    );
  }
 
}

export default App;
