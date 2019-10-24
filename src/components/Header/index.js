import React from 'react';

import './style.sass';

// Composant de présentation
function Header(props) {
  return <div id="app-image">
    
    <h1 id="app-title">{props.title}</h1>
    <hr id="app-hr"></hr>
    <img id="app-img" src="../../src/data/crepe.jpg" alt="crepes"  />
    <hr id="app-hr"></hr>
    
    <span>Auteur : {props.author}</span>
  </div>;
}

export default Header;
