import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export type MyButtonProps = {
  onPress: () => void;
  name: string;
  className?: string;
};

export const MyButton = ({ onPress, name, className = '' }: MyButtonProps) => {
  return (
    <TouchableOpacity className={`p-3 rounded-lg bg-black active:opacity-80 ${className}`} onPress={onPress}>
      <Text className="text-white text-center text-md">{name}</Text>
    </TouchableOpacity>
  );
};
