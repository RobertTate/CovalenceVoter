import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';



export default class ProjectDetailScreen extends Component {

    static navigationOptions = ({ navigation }) =>  ({ title: navigation.state.params.project.name });

    constructor(props) {
        super(props);
        this.project = this.props.navigation.state.params.project;
    }

    render() {
        console.log('You Made it to the project details screen!!!')
        return (
            <ScrollView>
                <Text>{this.project.description}</Text>
            </ScrollView>
        )
    }
}