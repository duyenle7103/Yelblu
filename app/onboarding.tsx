import { router, useRouter } from "expo-router"
import { SafeAreaView, Text, TouchableOpacity, View, Image, Dimensions, StyleSheet } from "react-native"
import Swiper from "react-native-swiper"
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Onboarding() {
    const router = useRouter();

    const handleFinishOnboarding = async () => {
        try {
            await AsyncStorage.setItem("hasSeenOnboarding", "true");
            router.replace("/(tabs)/home");
        } catch (error) {
            console.error("Lỗi khi lưu trạng thái onboarding:", error);
        }
    };

    return (
        <Swiper loop={false} showsPagination={true}>
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/onboarding/ob1.jpg')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Chào mừng đến với YELBLUE
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/onboarding/ob2.jpg')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Nhập nguyên liệu dễ dàng
                </Text>
                <Text style={styles.content}>
                    Người dùng có thể nhập thủ công hoặc chụp ảnh nguyên liệu
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/onboarding/ob3.jpg')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Gợi ý món ăn thông minh
                </Text>
                <Text style={styles.content}>
                    Ứng dụng sử dụng AI để đề xuất món ăn phù hợp
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/onboarding/ob4.jpg')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Hướng dẫn nấu ăn chi tiết
                </Text>
                <Text style={styles.content}>
                    Công thức đơn giản, dễ làm
                </Text>
            </SafeAreaView>

            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/images/onboarding/ob5.jpg')}
                    style={styles.image}
                />
                <Text style={styles.title}>
                    Theo dõi dinh dưỡng
                </Text>
                <Text style={styles.content}>
                    Xem lượng calo, protein, chất béo theo chế độ ăn
                </Text>
            </SafeAreaView>

            <SafeAreaView style={{
                flex: 1,
                justifyContent: 'center',  // Canh giữa theo chiều dọc
                alignItems: 'center',      // Canh giữa theo chiều ngang
                backgroundColor: 'white',
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    width: screenWidth * 0.8,
                }}
                >
                    Bạn đã sẵn sàng!
                </Text>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                    width: screenWidth * 0.8,
                }}
                >
                    Bắt đầu khám phá ngay!
                </Text>
                <TouchableOpacity
                    onPress={handleFinishOnboarding}
                    style={{
                        marginTop: 30,
                        width: '30%',
                        backgroundColor: 'orange',
                        borderRadius: 12,
                        paddingVertical: 10,
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginBottom: 32,
                    }}
                >
                    <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>
                        Bắt đầu
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>

        </Swiper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.5,
        marginTop: screenHeight * 0.05,
    },
    title: {
        marginTop: screenHeight * 0.05,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        width: screenWidth * 0.8,
    },
    content: {
        marginTop: screenHeight * 0.03,
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        width: screenWidth * 0.7,
    },
});