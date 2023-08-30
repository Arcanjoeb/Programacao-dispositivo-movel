import React from 'react';
import { View, Text } from 'react-native';

const MinMax = ({ min, max }) => {
  const minValue = parseFloat(min);
  const maxValue = parseFloat(max);

  let result = '';

  if (!isNaN(minValue) && !isNaN(maxValue)) {
    if (minValue > maxValue) {
      result = `O valor mínimo (${minValue}) é maior.`;
    } else if (maxValue > minValue) {
      result = `O valor máximo (${maxValue}) é maior.`;
    } else {
      result = 'Os valores são iguais.';
    }
  } else {
    result = 'Valores inválidos.';
  }

  return (
    <View>
      <Text>{result}</Text>
    </View>
  );
};

export default MinMax;