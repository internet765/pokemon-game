import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBvlr46hFH3VLoKOST1WkVtMfvVbWUkD7o",
  authDomain: "ppokemons-8e4bb.firebaseapp.com",
  databaseURL: "https://ppokemons-8e4bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ppokemons-8e4bb",
  storageBucket: "ppokemons-8e4bb.appspot.com",
  messagingSenderId: "550853419011",
  appId: "1:550853419011:web:c1dcb87cde04f01600ae36"
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