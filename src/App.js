import { Component } from 'react';
import PokemonForm from './components/PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './components/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    console.log(pokemonName);
    this.setState({
      pokemonName,
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

//Информация о покемоне
//https://youtu.be/xoG3l2PgiYY?t=1850

//Pattern стейт машина
//https://youtu.be/xoG3l2PgiYY?t=3603

// По простому всё выглядит так.
// export default class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false
//   }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     })
//     setTimeout(()=>{
//       fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
//       .then(res => res.json())
//       .then(pokemon => this.setState({pokemon}))
//       .finally(() => this.setState({loading: false}));
//     },500)
//   }

//   render() {
//     const {pokemon, loading} = this.state
//     return (
//       <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//         {loading && <h2>Loading...</h2>}
//         {pokemon && <div>{pokemon.name}</div>}
//       </div>
//     );
//   }
// }
