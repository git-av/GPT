import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function NewPostScreen({ navigation, addPost }) {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [user, setUser] = useState('');

  const submit = () => {
    if (!image || !user) return;
    const newPost = { id: Date.now().toString(), image, caption, user };
    addPost(newPost);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        style={styles.input}
      />
      <TextInput
        placeholder="User"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TextInput
        placeholder="Caption"
        value={caption}
        onChangeText={setCaption}
        style={styles.input}
      />
      <Button title="Post" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
});
