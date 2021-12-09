import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Logo from "../assets/emaile.png"
export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={Logo} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    
    height: 70,
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "black",
  },

  logo: {
    width: 150,
    height: 50,
  },
});
