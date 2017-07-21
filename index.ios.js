import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import DarkMapStyles from './MapStyles/DarkMapStyles.json';
// import LightMapStyles from './MapStyles/LightMapStyles.json';
import RetroMapStyles from './MapStyles/RetroMapStyles.json';

export default class MapExample extends Component {
  render() {
    return (
      <MapView
        provider={ PROVIDER_GOOGLE }
        style={ styles.container }
        customMapStyle={ RetroMapStyles }
        initialRegion={{
          latitude: 39.7392,
          longitude: -104.9903,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
});

AppRegistry.registerComponent('MapExample', () => MapExample);
