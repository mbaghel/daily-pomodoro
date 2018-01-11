// Takes props from SettingsView and return text and 
// slider to display and interact with.
import React from 'react';
import { 
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

export default class extends React.Component {
  state = {
    sliderVal : this.props.value,
  }
  onValueChange = (sliderVal) => this.setState({sliderVal});

  onSlidingComplete = (value) => {
    const {
      label,
      onChange,
    } = this.props;

    onChange(label, value);
  }

  render() {
  const {
    children,
    maximumValue,
    minimumValue,
    step,
    value,
  } = this.props;
  const {sliderVal} = this.state;



    return (
      <View style={styles.section}>
        <Text style={styles.settings}>{children}</Text>
        <Text style={styles.settings}>{sliderVal}</Text> 
        <Slider 
          maximumValue={maximumValue}
          minimumValue={minimumValue}
          step={step}
          value={value}
          onValueChange={this.onValueChange}
          onSlidingComplete={this.onSlidingComplete}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 20,
  },
  settings: {
    fontSize: 16,
    marginBottom: 5, 
  },
});
