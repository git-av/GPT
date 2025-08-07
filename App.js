import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from './screens/FeedScreen';
import NewPostScreen from './screens/NewPostScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      user: 'Demo',
      image: 'https://placekitten.com/400/400',
      caption: 'Welcome to the feed!',
    },
  ]);

  const addPost = post => {
    setPosts(prev => [post, ...prev]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed">
          {props => <FeedScreen {...props} posts={posts} />}
        </Stack.Screen>
        <Stack.Screen name="NewPost">
          {props => <NewPostScreen {...props} addPost={addPost} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
