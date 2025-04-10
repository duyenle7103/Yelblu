import { router } from "expo-router"
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native"
import Swiper from "react-native-swiper"

const onboarding = () => {
    return (
        <Swiper loop={false} showsPagination={true}>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component0.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component1.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component2.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component3.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component4.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('./assets/images/Component5.png')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            
        </Swiper>
    )
}

export default onboarding