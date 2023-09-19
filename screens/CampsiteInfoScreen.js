import RenderCampsite from '../features/campsites/RenderCampsite';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { COMMENTS } from '../shared/comments'

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params
    const [comments, setComments] = useState(COMMENTS)
    
    return (
        <FlatList
            data={
                comments.filter((comment) => comment.campsiteId === campsite.id)}
            renderItem={renderCommentItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20}}

            ListHeaderComponent={
                <>
                    <RenderCampsite
                        campsite={campsite}
                        isFavorite={favorite}
                        markFavorite={() => setFavorite(true)}
                    />
                    <Text style={StyleSheet.commentsTitle}>Comments</Text>
                </>
            }
        />
    )
};

export default CampsiteInfoScreen;