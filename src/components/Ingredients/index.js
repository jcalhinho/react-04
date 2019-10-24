import React from 'react';

const Ingredients = (props) => <div id="app-title2">Ce qu'il vous faut:
  <ul id ="app-ingre">
    <li> Farine: {props.farine}</li>
    <li> Beurre: {props.beurre}</li>
    <li> Lait: {props.lait}</li>
    <li> Oeuf: {props.oeuf}</li>
    <li> Sucre: {props.sucre}</li>
    <li> Rhum: {props.rhum}</li>
  </ul>
</div>;

export default Ingredients;
