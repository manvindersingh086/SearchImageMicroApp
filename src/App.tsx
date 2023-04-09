import React from 'react';
import Searchbar from './components/SearchBar';
import Header from './components/Header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Header header="Image Search App" />
    <Searchbar />
    <Footer footer="Image Search App" />
    </div>
  );
}

export default App;
