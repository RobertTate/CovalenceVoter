import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import ProjectCard from '../components/projectcard';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        this.setState({
            projects: [
                { name: 'Test Project 1', description: 'Cool Project!'},
                { name: 'Test Project 2', description: 'Cool Project!'},
                { name: 'Test Project 3', description: 'Cool Project!'},
                { name: 'Test Project 4', description: 'Cool Project!'}
            ],
        });
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                { this.state.projects.map((project, index) =>{
                    return <ProjectCard key={index} projects={project} />
                }) }
            </ScrollView>



        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingLeft: 10,
        paddingRight: 10
    }
});