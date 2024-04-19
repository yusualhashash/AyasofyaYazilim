import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const UserAvatar = ({ url, text }) => {
  return (
    <View className="flex items-center justify-center m-auto">
      <View className="flex-row items-center gap-2">
        <Avatar.Image size={40} source={{ uri: url }} />
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default UserAvatar;
