import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r2.png",
        }}
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
    height: 40,
  },
});
