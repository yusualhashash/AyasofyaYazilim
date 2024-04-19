import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MyForm } from '../../molecules/Form/Form';
import { MyButton } from '../../molecules/Button/Button';

const emailSchema = z.object({
  email: z.string().email(),
});

const ForgotPasswordForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    }
  });

  const handleResetPassword = data => {
    console.log('Reset password for:', data.email);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <View className="items-center justify-center">
      <TouchableOpacity className="p-2 bg-transparent" onPress={() => setModalVisible(true)}>
        <Text className="underline font-bold text-center">Şifremi unuttum</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center bg-gray-200 bg-opacity-90">
          <View className="bg-white p-4 rounded-lg w-80">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-xl font-bold">Şifremi unuttum</Text>
              <TouchableOpacity className="border rounded-md" onPress={handleCancel}>
                <Text className="px-2 text-lg">X</Text>
              </TouchableOpacity>
            </View>
            <Text className="text-gray-500 my-2">
              E-posta adresinize bir şifre sıfırlama bağlantısı gönderilecektir. Birkaç dakika içerisinde bir e-posta almazsanız lütfen tekrar deneyin.
            </Text>
            <Text className="mb-1 text-red-500 font-semibold text-md">E-posta adresi</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <MyForm 
                  onChangeText={onChange}
                  value={value}
                  placeholder="name@example.com" text={''}                />
              )}
            />
            {errors.email && <Text className="text-red-500">{errors.email.message}</Text>}
            <View className="items-end">
              <MyButton name="Gönder" onPress={handleSubmit(handleResetPassword)} className="mt-4 w-full" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ForgotPasswordForm;
