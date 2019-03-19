import React, { PureComponent } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  principalButtonContainer: {
    borderRadius: 3,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: Colors.darkLimeGreenColor,
    backgroundColor: Colors.darkLimeGreenColor,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  principalButtonText: {
    color: Colors.whiteColor,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  secondaryButtonContainer: {
    borderRadius: 3,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: Colors.leafColor,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },
  secondaryButtonText: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: Colors.leafColor,
    fontWeight: 'bold',
  },
});

export default class Button extends PureComponent {
  state = { hover: false }

  buttonContainerStyle = () => {
    const { theme, style } = this.props;
    const { hover } = this.state;
    if (theme === 'primary') {
      const color = hover ? Colors.leafColor : Colors.darkLimeGreenColor;
      return [
        styles.principalButtonContainer,
        {
          backgroundColor: color,
          borderColor: color,
        },
        style,
      ];
    }
    return [
      hover ? styles.principalButtonContainer : styles.secondaryButtonContainer,
      style,
    ];
  }

  textStyle = () => {
    const { theme, fontSize } = this.props;
    const { hover } = this.state;
    if (theme === 'primary') return styles.principalButtonText;
    return [
      hover ? styles.principalButtonText : styles.secondaryButtonText,
      { fontSize: fontSize || 14 },
    ];
  }

  render() {
    const { children, onPress } = this.props;
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this.setState({ hover: true })}
        onPressOut={() => this.setState({ hover: false })}
        onPress={onPress}
      >
        <View style={this.buttonContainerStyle()}>
          <Text style={this.textStyle()}>
            { children }
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
