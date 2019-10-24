import React from 'react';

const Steps = (props) => <div id="app-title2">Ce que vous devez faire:
  <ul id="app-step">
    <hr id="app-hr"></hr>
    <li> Etape 1: {props.etape1}</li>
    <hr id="app-hr"></hr>
    <li> Etape 2: {props.etape2}</li>
    <hr id="app-hr"></hr>
    <li> Etape 3: {props.etape3}</li>
    <hr id="app-hr"></hr>
    <li> Etape 4: {props.etape4}</li>
    <hr id="app-hr"></hr>
    <li> Etape 5: {props.etape5}</li>
    <hr id="app-hr"></hr>
    <li> Etape 6: {props.etape6}</li>
    <hr id="app-hr"></hr>
  </ul>
</div>;
export default Steps;
