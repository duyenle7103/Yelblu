import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView, } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';

const screenWidth = Dimensions.get('window').width;

export default function DashboardScreen() {
    const calorieProgress = 1 / 2000;
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
    <View style={styles.container}>
      
      <View style={styles.circleContainer}>
        <Progress.Circle
          size={120}
          progress={calorieProgress}
          showsText
          formatText={() => `1 / 2000`}
          color="#1e90ff"
          borderWidth={0}
          thickness={8}
        />
        <Text style={styles.circleLabel}>TIẾN TRÌNH</Text>
      </View>
      

      {/* Nutrient progress */}
      <View style={styles.progressSection}>
        <Text style={styles.label}>Tinh bột</Text>
        <ProgressBar progress={1/217} color="red" style={styles.progressBar} />
        <Text>1 / 217 g</Text>

        <Text style={styles.label}>Chất béo</Text>
        <ProgressBar progress={1/40} color="skyblue" style={styles.progressBar} />
        <Text>1 / 40 g</Text>

        <Text style={styles.label}>Protein</Text>
        <ProgressBar progress={1/54} color="navy" style={styles.progressBar} />
        <Text>1 / 54 g</Text>
      </View>

      {/* Weekly bar chart */}
      <BarChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
        colors: [
          () => 'green',
          () => 'green',
          () => 'orange',
          () => 'orange',
          () => 'red',
          () => 'green',
          () => 'red',
        ],
      },
    ],
  }}
  width={screenWidth - 64}
  height={220}
  fromZero={true}
  withCustomBarColorFromData
  flatColor
  yAxisSuffix=" cal"
  chartConfig={{
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
  }}
  style={{ borderRadius: 8 }}
  segments={4}
/>
    <View style={styles.rowContainer}>
      <Icon name="google-analytics" size={24} color="#000" style={styles.icon} />
      <Text style={styles.text}>Kết quả phân tích: <Text style={styles.result}>Chưa đạt</Text></Text>
    </View>

    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 8,
  },
  circleContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  circle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#1e90ff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  progressSection: {
    marginBottom: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontWeight: '500',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
});
