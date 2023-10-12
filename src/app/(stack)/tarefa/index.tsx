import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import React, { useState } from 'react';

import Button from 'components/Button'

const tarefa = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <View>
      <ScrollView>
        <Text style={styles.tituloPage}>
          Tarefa
        </Text>
        
        <View style={styles.boxSpace}>
          <Button texto='Finalizar Tarefa' cor='#16be2e' line={20}>
            <AntDesign name="checkcircleo" size={16} color="white" />
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default tarefa;

const styles = StyleSheet.create(
  {
    tituloPage: {
      fontSize: 34,
      fontWeight: "800",
      marginLeft: 18,
      marginTop: 18,
      textTransform: "uppercase",
      color: '#222',
    },
    boxSpace:{
      margin: 18,
  }
  }
)
