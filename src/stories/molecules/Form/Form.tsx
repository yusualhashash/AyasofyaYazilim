import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export type MyFormProps = {
    onChangeText: () => void;
    text: string;
    value: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    isPassword?: boolean;
};

export const MyForm = ({ onChangeText, value, placeholder, secureTextEntry, isPassword }: MyFormProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    const inputClassName = `w-full mb-4 p-2 border rounded-lg ${isFocused ? 'border-black' : 'border-gray-300'}`;

    return (
        <View>
            <TextInput
                className={inputClassName}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isPassword && secureTextEntry && !showPassword}
                onFocus={handleFocus}
                onBlur={handleBlur}
                underlineColorAndroid="transparent" 
            />
            {isPassword && (
                <TouchableOpacity onPress={toggleShowPassword} className="absolute right-3 top-3 ">
                    <Icon
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={22}
                        color="black"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MyForm;