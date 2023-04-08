import React from 'react';
import Searchbar from './components/SearchBar';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header header="Image Search App" />
    <Searchbar />
    </div>
  );
}

export default App;
