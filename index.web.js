import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { registerRootComponent } from 'expo';

// Register the app entry for the web
registerRootComponent(App);

// Register the app entry for React Native Web
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app'),
});
