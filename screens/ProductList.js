import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, View, Text, TextInput, FlatList, Image, TouchableOpacity, Button, RefreshControl } from 'react-native';

const ProductList = ({ navigation }) => {
    const [searchProduct, setSearchProduct] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const json = await response.json();
            setProducts(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    const handleSearch = (product) => {
        setSearchProduct(product);
    }

    const renderItem = ({ item }) => (
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

    const filteredData = products.filter((item) => {
        return item.title.toLowerCase().includes(searchProduct.toLowerCase());
    });

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
            <View style={styles.searchInputContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Products..."
                    onChangeText={handleSearch}
                    value={searchProduct}
                />
            </View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    contentContainerStyle={styles.productsListContainer}
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />)}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10,
    },
    searchInputContainer: {
        paddingHorizontal: 20,
        width: '100%'
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    productsListContainer: {
        paddingHorizontal: 20,
    },
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

export default ProductList
