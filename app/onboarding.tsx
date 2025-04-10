import { router } from "expo-router"
import { SafeAreaView, Text, TouchableOpacity, View, Image, Dimensions } from "react-native"
import Swiper from "react-native-swiper"

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const onboarding = () => {
    return (
        <Swiper loop={false} showsPagination={true}>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component0.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component1.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>

            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component2.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component3.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component4.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>
            <SafeAreaView className="flex-1 justify-center items-center bg-white">
                <Image
                    source={require('../assets/images/Component5.png')}
                    style={{ width: screenWidth, height: screenHeight }}
                />
            </SafeAreaView>

        </Swiper>
    )
}

export default onboarding