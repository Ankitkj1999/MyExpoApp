// components/ThemeToggle.tsx
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { LightOnIcon, LightOffIcon } from './LightIcons';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => (
  <TouchableOpacity onPress={onToggle} style={styles.themeToggle}>
    <View style={styles.toggleIcons}>
      {isDark ? <LightOnIcon /> : <LightOffIcon />}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  themeToggle: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 40 : 20,
    right: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    padding: 5,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleIcons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeToggle;