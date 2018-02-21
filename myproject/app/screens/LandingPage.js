import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";

export default class LandingPage extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Landing for " + navigation.state.params.loginName,
        headerTintColor: "#FFFFFF",
        headerStyle: styles.headerStyle,
        headerRight: (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Tos");
                }}
            >
                <Text style={styles.headerButtonStyle}>Terms</Text>
            </TouchableOpacity>
        )
    });

    constructor(props) {
        super(props);
        this.state = {addText: 0};

        setInterval(() => {
            this.setState(previousState => {
              return { addText: previousState.addText + 1 };
            });
          }, 1000);
    }

    render() {
        return (
            <View style={styles.mainView}>
                <TextInput 
                    value = {this.state.addText.toString()}
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    },
    headerStyle: {
        backgroundColor: "#2196F3"
    },
    headerButtonStyle: {
        color: "#FFFFFF",
        padding: 20
    }
});
