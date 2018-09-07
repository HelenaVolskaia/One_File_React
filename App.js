'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addReactiveData.bind(this)
  }
  addReactiveData() { 
    fetchAsync('https://swapi.co/api/people/').then((data, type) => showData(data, "swapi"));
    fetchAsync('https://pokeapi.co/api/v2/pokemon/').then((data, type) => showData(data, "pokemons"));
  }
  render() {
    return e(
            'button',
            { onClick: () => this.addReactiveData()},
            'Fetch Data With React'
        )
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(App), domContainer);