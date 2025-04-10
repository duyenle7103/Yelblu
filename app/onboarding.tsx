import { router } from "expo-router"
import { SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native"
import Swiper from "react-native-swiper"

const onboarding = () => {
    return (
        <Swiper loop={false} showsPagination={true}>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob1.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob1.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob2.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob3.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob4.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image
                source={require('../assets/images/onboarding/ob5.jpg')}
                style={{ width: 100, height: 100 }}
            />
            </SafeAreaView>
            
        </Swiper>
    )
}

export default onboarding