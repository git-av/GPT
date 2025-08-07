import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Post({ post }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={styles.image} />
      <Text style={styles.user}>{post.user}</Text>
      <Text style={styles.caption}>{post.caption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  user: {
    fontWeight: 'bold',
    marginTop: 8,
    marginHorizontal: 8,
  },
  caption: {
    marginHorizontal: 8,
    marginBottom: 8,
  },
});
