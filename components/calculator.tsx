import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Platform } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import ThemeToggle from './ThemeToggle';
import { DeleteIcon, HistoryIcon } from './LightIcons';

const COLORS = {
  white: '#FAFAFA',
  black: '#353535',
  grey: '#C0C0C0',
  primaryGreen: '#3C6E71',
  lightGreen: '#6F9395',
  lightGrey: '#F0EFEF',
  darkGreen: '#3D6063',
};

type ButtonProps = {
  label: string;
  onPress: () => void;
  isOperator?: boolean;
  isSpecial?: boolean;
};

const CalculatorButton: React.FC<ButtonProps> = ({ label, onPress, isOperator, isSpecial }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isSpecial && styles.specialButton,
      ]}>
      <ThemedText
        style={[
          styles.buttonText,
          isOperator && styles.operatorText,
          isSpecial && styles.specialText,
        ]}>
        {label}
      </ThemedText>
    </TouchableOpacity>
  );
};

export const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num);
  };

  const handleOperator = (operator: string) => {
    setEquation(display + ' ' + operator + ' ');
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <SafeAreaView style={[
      styles.safeArea,
      { backgroundColor: isDark ? COLORS.darkGreen : COLORS.white }
    ]}>
      <View style={styles.container}>

        <View style={styles.display}>
          <View style={styles.themeToggleContainer}>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </View>
          <View style={styles.calculations}>
            <View style={styles.equationRow}>
              <ThemedText style={styles.equation}>{equation}</ThemedText>
            </View>
            <View style={styles.displayRow}>
              <ThemedText style={[
                styles.displayText,
                { color: isDark ? COLORS.white : COLORS.black }
              ]}>
                {display}
              </ThemedText>
            </View>
          </View>
          <View style={styles.iconSection}>
            <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
              <HistoryIcon color={isDark ? COLORS.white : COLORS.primaryGreen} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={styles.iconButton}>
              <DeleteIcon color={isDark ? COLORS.white : COLORS.primaryGreen} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.buttonGrid, {
          backgroundColor: isDark ? COLORS.darkGreen : COLORS.lightGrey
        }]}>
          <View style={styles.row}>
            <CalculatorButton label="AC" onPress={handleClear} isSpecial />
            <CalculatorButton label="()" onPress={() => { }} isSpecial />
            <CalculatorButton label="%" onPress={() => handleOperator('%')} isSpecial />
            <CalculatorButton label="÷" onPress={() => handleOperator('/')} isOperator />
          </View>
          <View style={styles.row}>
            <CalculatorButton label="7" onPress={() => handleNumber('7')} />
            <CalculatorButton label="8" onPress={() => handleNumber('8')} />
            <CalculatorButton label="9" onPress={() => handleNumber('9')} />
            <CalculatorButton label="×" onPress={() => handleOperator('*')} isOperator />
          </View>
          <View style={styles.row}>
            <CalculatorButton label="4" onPress={() => handleNumber('4')} />
            <CalculatorButton label="5" onPress={() => handleNumber('5')} />
            <CalculatorButton label="6" onPress={() => handleNumber('6')} />
            <CalculatorButton label="-" onPress={() => handleOperator('-')} isOperator />
          </View>
          <View style={styles.row}>
            <CalculatorButton label="1" onPress={() => handleNumber('1')} />
            <CalculatorButton label="2" onPress={() => handleNumber('2')} />
            <CalculatorButton label="3" onPress={() => handleNumber('3')} />
            <CalculatorButton label="+" onPress={() => handleOperator('+')} isOperator />
          </View>
          <View style={styles.row}>
            <CalculatorButton label="+/-" onPress={() => { }} />
            <CalculatorButton label="0" onPress={() => handleNumber('0')} />
            <CalculatorButton label="." onPress={() => handleNumber('.')} />
            <CalculatorButton label="=" onPress={handleEqual} isOperator />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  display: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    position: 'relative',
  },
  
  calculations: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    paddingBottom: 0,  
  },
  
  displayRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 20,  
    paddingHorizontal: 20,  
  },
  
  displayText: {
    fontSize: 40,  
    textAlign: 'right',  
    color: COLORS.black,
    includeFontPadding: false,  
    lineHeight: 48,  
  },
  
  equation: {
    fontSize: 28, 
    textAlign: 'right',
    color: COLORS.grey,
    marginRight: 10,
    paddingTop: 20,
    marginBottom: 8,  
    includeFontPadding: false,  
  },

   
  
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  
  iconButton: {
    padding: 10,
  },
  
  buttonGrid: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },


 
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  themeToggleContainer: {
    width: 60,
    height: 30,
    position: 'absolute',
    left: 30,
    top: Platform.OS === 'android' ? 45 : 0,
    zIndex: 1,
  },


  equationRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },


  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: -40,
  },




  row: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  button: {
    width: 72,
    height: 72,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.black,
  },
  operatorButton: {
    backgroundColor: COLORS.primaryGreen,
  },
  operatorText: {
    color: COLORS.white,
  },
  specialButton: {
    backgroundColor: COLORS.black,
  },
  specialText: {
    color: COLORS.white,
  },








});