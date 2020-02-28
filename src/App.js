import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="Home">
      <header className="Home-band">
        <h1>Catherine Stein</h1>
        <p>Web Developer, Musician</p>
      </header>
      <section>
        <h2>Bio</h2>
        <p>lorem ipsum dolor sit amet</p>
      </section>
      <section className="Home-band">
        <h2>Links to stuff</h2>
        <ul>
          <li>lorem</li>
          <li>ipsum</li>
          <li>dolor</li>
        </ul>
      </section>
      
    </main>
  );
}

export default App;
