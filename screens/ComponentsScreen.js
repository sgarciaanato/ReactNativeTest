import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import CustomButton from '../components/Button';

export default class ComponentsScreen extends React.Component {
  static navigationOptions = {
    title: 'Components',
  };

  alertMe = () => alert('Hello');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <Text style={{
              fontWeight: 'bold',
              textAlign: 'center',
              paddingTop: 10,
              paddingBottom: 10,
            }}
            >
              Buttons
            </Text>
            <Text style={{ fontStyle: "italic" }}>{`theme="primary"`}</Text>
            <CustomButton theme="primary" onPress={this.alertMe}>Click</CustomButton>
            <Text style={{ fontStyle: "italic" }}>{`theme="secondary"`}</Text>
            <CustomButton theme="secondary" onPress={this.alertMe}>Click</CustomButton>
            <Text>Native Button</Text>
            <Button onPress={this.alertMe} title="Click" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
