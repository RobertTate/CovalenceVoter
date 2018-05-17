import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'

export default class ProjectCard extends Component {


    render() {

        return (
            <Card title={ this.props.projects.name }
                    image={ require('../images/deathstar.png') } 
            >
                <Button title="View Projects" />
            </Card>


        );

    }
}