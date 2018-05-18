import React, { Component } from 'react';
import { Card, Button } from 'react-native-elements'

export default class ProjectCard extends Component {


    render() {

        return (
            <Card featuredSubtitle={ this.props.projects.name }
                    image={ require('../images/deathstar.png') } 
            >
                <Button backgroundColor="blue" title="View Projects" onPress={ this.props.Navigate } />
            </Card>


        );

    }
}