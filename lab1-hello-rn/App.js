
import './global.css';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, Pressable } from 'react-native';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-purple-50">
        <TopBar />

        <ScrollView className="flex-1 p-4">

        <Text className="mb-2 text-center text-2xl font-bold text-purple-800">
        Welcome!
           </Text>

        <Text className="mb-4 text-center text-base text-purple-600">
         Welcome to my personal mobile application. 
        </Text>
       
          <View className="mb-4 rounded-xl bg-white p-4">
            <Text className="text-lg font-bold text-purple-700">
              About Me
            </Text>

            <Text className="mt-2 text-purple-600">
              Hi! I enjoy playing games, basketball, reading books, and exploring new things.
            </Text>
          </View>

         
          <View className="mb-4 gap-3">

            <Pressable className="rounded-lg bg-purple-700 p-4">
              <Text className="text-center font-bold text-white">
                My Hobbies
              </Text>
            </Pressable>

            <Pressable className="rounded-lg bg-purple-500 p-4">
              <Text className="text-center font-bold text-white">
                My Interests
              </Text>
            </Pressable>

            <Pressable className="rounded-lg border border-purple-300 bg-white p-4">
              <Text className="text-center font-bold text-purple-700">
                Contact Me
              </Text>
            </Pressable>

          </View>

        </ScrollView>

        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
