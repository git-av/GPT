import React from 'react';
import { View, FlatList, Button } from 'react-native';
import Post from '../components/Post';

export default function FeedScreen({ navigation, posts }) {
  return (
    <View>
      <Button title="New Post" onPress={() => navigation.navigate('NewPost')} />
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
}
