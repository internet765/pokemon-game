import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMwscg4CzG6_y8yCgIvdPVI6v4Pp2cnOw",
  authDomain: "pokemon-6f001.firebaseapp.com",
  databaseURL: "https://pokemon-6f001-default-rtdb.firebaseio.com",
  projectId: "pokemon-6f001",
  storageBucket: "pokemon-6f001.appspot.com",
  messagingSenderId: "278330357133",
  appId: "1:278330357133:web:7943faf4cb892d77dbf9c4"
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