import React from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MyButton } from '../../molecules/Button/Button';
import { MyForm } from '../../molecules/Form/Form';
import CountrySelector from '../../organisms/CountrySelector/CountrySelector';

const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

const Register = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const handleRegister = (data) => {
    Alert.alert('Registration Successful', `Welcome, ${data.username}!`);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-7 justify-center">
          <Text className="text-center font-bold text-3xl ">Kaydol</Text>
          <Text className="text-center text-gray-400 text-lg mb-5">Yeni kullanıcı</Text>
          <Text className="mb-1 font-semibold text-md">Kullanıcı adı</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <MyForm 
                onChangeText={onChange}
                value={value}
                placeholder="John Doe" text={''}              />
            )}
          />
          {errors.username && <Text className="text-red-500 mb-3">{errors.username.message}</Text>}
          <Text className="mb-1 font-semibold text-md">E-posta adresi</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <MyForm 
                onChangeText={onChange}
                value={value}
                placeholder="name@example.com" text={''}              />
            )}
          />
          {errors.email && <Text className="text-red-500 mb-3">{errors.email.message}</Text>}
          <Text className="mb-1 font-semibold text-md">Şifre</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <MyForm 
                onChangeText={onChange}
                value={value}
                placeholder="password"
                secureTextEntry={true}
                isPassword={true} text={''}              />
            )}
          />
          {errors.password && <Text className="text-red-500 mb-3">{errors.password.message}</Text>}
          <MyButton name="Kaydol" onPress={handleSubmit(handleRegister)} />
          <Text className="text-center text-gray-400 my-5">
            YA DA BUNLARDAN BIRIYLE GIRIŞ YAPIN
          </Text>
          <MyButton name="Giriş" onPress={handleSubmit(handleRegister)} />
          <Text className="text-center text-gray-400 mt-5">
            Göz atmaya devam ederseniz, Çerez Politikası ve Gizlilik Politikası şartlarını kabul etmiş olursunuz.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default Register;
