import React, { memo } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';

const ProductInfo = ({ route }) => {
  const { image, title, price, description } = route.params.item;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = {
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 20,
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
    width: '100%',
    aspectRatio: 1,
  },
  info: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#343A3F',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
};

export default memo(ProductInfo);


