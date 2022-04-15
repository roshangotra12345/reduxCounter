/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import store from './src/Store';
// import Store from './src/Store'
// import {Provider} from 'react-redux'
// Store.subscribe(()=>console.log(store.getState()));

 AppRegistry.registerComponent(appName, () => App);

