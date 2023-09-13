import { memo } from "react";
import {StyleSheet, View, Text,Image, TouchableOpacity, Button } from 'react-native';


const ProductCard = ({ filteredData }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductInfo', { item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardBody}>
            <Text style={styles.price}>{item.price} $</Text>
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.cardFooter}>
            <Button title="View Details" onPress={() => navigation.navigate('ProductInfo', { item })} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    image: {
        aspectRatio: 1,
        marginBottom: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardBody: {
        marginBottom: 10,
        padding: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    title: {
        fontSize: 16,
        marginBottom: 5
    },
    cardFooter: {
        padding: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dcdcdc',
        justifyContent: 'space-between',
    },
});

export default memo(ProductCard);
