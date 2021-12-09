import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function EmailScreen({ route }) {
  const { id } = route.params;

  const [email, setEmail] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch(
        "https://mobile.ect.ufrn.br:3002/emails/" + id
      );
      const email = await response.json();
      console.log("https://mobile.ect.ufrn.br:3002/emails/" + id);
      setEmail(email);
    }
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: "white", display: "flex", flex: 1 }}>
      <View
        style={{ alignItems: "center", flexDirection: "row", marginBottom: 30 }}
      >
        <Text style={{ fontSize: 20, color: "black", marginLeft: 20 }}>
          {email.tittle + " "}
        </Text>
        <Text
          style={{
            backgroundColor: "#d3d3d3",
            fontSize: 10,
            borderRadius: 3,
            // width: ,
            // padding:5,
            paddingHorizontal: 6,
            textAlign: "center",
          }}
        >
          Caixa de entrada
        </Text>
        <View
          style={{ justifyContent: "center", flex: 1, alignItems: "flex-end", marginHorizontal:10 }}
        >
          <Icon
            name={email.star ? "star" : "star-outline"}
            size={30}
            color={email.star ? "orange" : "gray"}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20 }}>
        <Image style={styles.image} source={{ uri: email.picture }} />
        <View>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{ color: "black" }}>{email.from + " "}</Text>
            <Text style={{ color: "black", fontSize: 8, padding: 1 }}>
              {email.time}
            </Text>
          </View>
          <Text style={{ color: "gray", fontSize: 8 }}>Para {email.to} </Text>
        </View>
      </View>
      <View style={{ flex: 1, margin: 20 }}>
        <WebView source={{ html: email.body }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
