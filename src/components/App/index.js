
import React from 'react';

/**
 * Local import
 */
// Composants enfants éventuels
// import Header from '../Header';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Steps from 'src/components/Steps';

// Données, styles et assets
import data from 'src/data/content';
import './app.sass';

/**
 * Code
 */
// Composant de coordination, ou bien un composant container
// Un composant de ce type-là va traditionnellement gérer les données de l'app.
const Recipe = () => {
  // return React.createElement('div', ...);
  return <div id="app">
    {/* React.createElement(Header, { title: data.title }); */}
    {/* => Header({ title: "..." }) */}
    <Header title={data.title} author={data.author} />
    <Ingredients farine={data.farine} beurre={data.beurre} lait={data.lait} oeuf={data.oeuf} sucre={data.sucre} rhum={data.rhum} />
    <Steps etape1={data.etape1} etape2={data.etape2} etape3={data.etape3} etape4={data.etape4} etape5={data.etape5} etape6={data.etape6} />
  </div>;
};

/**
 * Export
 */
export default Recipe;


