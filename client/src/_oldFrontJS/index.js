import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App/App";
// import Manette from "./component/ManetteBois/ManetteBois";
// import PageAttente from "./component/PageAttenteObstacle/PageAttenteObstacle";
// import ManetteDesert from "./component/ManetteDesert/ManetteDesert";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
