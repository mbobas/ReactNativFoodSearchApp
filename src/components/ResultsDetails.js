import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetails = ( {result} ) => {
    return (
        <View>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.raiting} Stars, {result.review_count} Reviews</Text>


        </View>

    )};

    const styles = StyleSheet.create({
        image: {
            width: 250,
            height: 120,
            borderRadius: 4,
        },
        name: {
            fontWeight: 'bold',
            //fontSize: 16,

        }
    });

    export default ResultsDetails;