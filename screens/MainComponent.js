import { useState } from 'react';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';
import { View } from 'react-native'
import CampsiteInfroScreen from './CampsiteInfoScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);
    const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <DirectoryScreen campsites={campsites} onPress={campsiteId => setSelectedCampsiteId(campsiteId)} />
            <CampsiteInfroScreen campsite ={campsites.filter(campsite => campsite.id === selectedCampsiteId)[0]} />
        </View>
    )
};

export default Main;