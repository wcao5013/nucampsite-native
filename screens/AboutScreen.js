import { Text, View, ScrollView } from 'react-native'
import { Avatar, Card, ListItem } from 'react-native-elements'
import { PARTNERS } from '../shared/partners'
import { useState } from 'react'


const Mission = () => {
    return (
            <Card style={{margin: 10}}>
                <Card.Title> Our Mission</Card.Title>
                <Card.Divider />
                    <Text>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness.</Text>
                    <Text> We increase access to adventure for the public while promoting safe and respectful use of resources. </Text>
                    <Text>The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. </Text>
                    <Text>We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
            </Card>
    )
}
const AboutScreen = () => {

        <ScrollView>
            <Mission />
            <Card>
                    <Card.Title>Community partners</Card.Title>
                    <Card.Divider />
                    {PARTNERS.map((partner) => {
                        return (
                            <ListItem key={partner.id}>
                                <Avatar source={partner.image} rounded />
                                <ListItem.Content>
                                    <ListItem.Title>{partner.name}</ListItem.Title>
                                    <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    })}
            </Card>
        </ScrollView>
}

//Not sure how this get this correct?

export default AboutScreen