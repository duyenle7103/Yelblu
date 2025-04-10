import * as React from 'react'
import { View, Text, ScrollView } from "react-native";

export default function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert("This is the home screen.")}
                  style={{fontSize: 26, fontWeight: 'bold'}} >
                    Home Screen
            </Text>
        </View>
        
    );
}