// app/(tabs)/calculator.tsx
import { StyleSheet } from 'react-native';
import { Calculator } from '../components/calculator';
import { ThemedView } from '@/components/ThemedView';

export default function CalculatorScreen() {
  return (
    <ThemedView style={styles.container}>
      <Calculator />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});