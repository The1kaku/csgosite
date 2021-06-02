import React from 'react';
import Article from './components/article/Article';
import Navigation from './components/navigation/Navigation';
import './app.scss';
import './main.scss';


function App() {
  return (
    <div id="App">
      <Navigation />
      <Article />
    </div>
  );
}

export default App;