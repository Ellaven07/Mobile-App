import { View, Text } from 'react-native';

export default function NavBar() {
  return (
    <View className="flex-row justify-around border-t border-purple-100 bg-white p-4">
      <Text className="font-bold text-purple-400">Home</Text>
      <Text className="font-bold text-purple-700">Profile</Text>
      <Text className="font-bold text-purple-400">Settings</Text>
      <Text className="font-bold text-purple-400">About</Text>
    </View>
  );
}