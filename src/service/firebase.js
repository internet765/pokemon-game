import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDXL18pBgI5GGoWfErh5m7dZe_KAEcFNAY",
  authDomain: "pokemon-game-4aef1.firebaseapp.com",
  databaseURL: "https://pokemon-game-4aef1-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-4aef1",
  storageBucket: "pokemon-game-4aef1.appspot.com",
  messagingSenderId: "1023687089205",
  appId: "1:1023687089205:web:3681c711be0b7451faa57c",
  measurementId: "G-K3S2X5RNWP"
};
firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {

    this.fire = firebase
    this.database = this.fire.database();

  }

  getPokemonSocket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      
      cb(snapshot.val())
    });
  }

  postPokemon = (key, pokemon) => {
    return this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data) => {

    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref("pokemons/" + newKey).set(data)

  }


}

export default Firebase;