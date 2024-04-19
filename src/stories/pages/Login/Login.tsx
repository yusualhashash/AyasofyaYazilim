import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MyButton } from '../../molecules/Button/Button';
import { MyForm } from '../../molecules/Form/Form';
import CountrySelector from '../../organisms/CountrySelector/CountrySelector';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

const loginSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const handleLogin = (data) => {
    Alert.alert('Logged in successfully!', `Welcome ${data.username}!`);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 p-6 justify-center">
        <View className="absolute top-0 right-0 p-2.5">
          <CountrySelector defaultValue={undefined} onValueChange={undefined} />
        </View>
        <Text className="text-center font-bold text-3xl mb-8">Giriş</Text>
        <Text className="mb-1 font-semibold text-md">Kullanıcı adı veya e-posta</Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, value } }) => (
            <MyForm 
              onChangeText={onChange}
              value={value}
              placeholder="name@example.com" text={''} />
          )}
        />
        {errors.username && <Text className="text-red-500 mb-3">{errors.username.message}</Text>}
        <Text className="mb-1 font-semibold text-md">Şifre</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <MyForm 
              onChangeText={onChange}
              value={value}
              placeholder="password"
              secureTextEntry={true}
              isPassword={true} text={''} />
          )}
        />
        {errors.password && <Text className="text-red-500 mb-3">{errors.password.message}</Text>}
        <MyButton name="Giriş" onPress={handleSubmit(handleLogin)} />

          
        <Text className="text-gray-400 text-center m-5">YA DA BUNLARDAN BIRIYLE KAYDOLUN</Text>
        <MyButton className="bg-white text-black" name="Kaydol" onPress={handleSubmit(handleLogin)} />
        <Text className="text-gray-400 text-center m-4">
          Göz atmaya devam ederseniz, Çerez Politikası ve Gizlilik Politikası şartlarını kabul etmiş olursunuz.
        </Text>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;