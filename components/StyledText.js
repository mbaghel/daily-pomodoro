import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'roboto-mono' }]} />;
  }
}

export class DefaultText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontSize: 16 }]} />;
  }
}